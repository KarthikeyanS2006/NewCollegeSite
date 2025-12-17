// ==========================================
// SGAC ADMIN PANEL - AUTHENTICATION & CRUD
// ==========================================

// Default admin credentials
const DEFAULT_CREDENTIALS = {
    username: 'admin',
    password: 'sgac2025'
};

// Session management
let adminSession = null;

// Initialize admin panel
document.addEventListener('DOMContentLoaded', () => {
    checkSession();
    setupEventListeners();
});

// ==========================================
// AUTHENTICATION
// ==========================================

function checkSession() {
    const session = localStorage.getItem('sgac_admin_session');
    if (session) {
        const sessionData = JSON.parse(session);
        const now = new Date().getTime();

        // Check if session is still valid (30 minutes)
        if (now - sessionData.timestamp < 1800000) {
            adminSession = sessionData;
            showDashboard();
            loadDashboardStats();
            return;
        }
    }
    showLogin();
}

function showLogin() {
    document.getElementById('login-page').style.display = 'flex';
    document.getElementById('admin-dashboard').style.display = 'none';
}

function showDashboard() {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('admin-dashboard').style.display = 'flex';
    document.getElementById('admin-username').textContent = adminSession.username;
}

function setupEventListeners() {
    // Login form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    // Logout buttons
    document.querySelectorAll('.logout-btn').forEach(btn => {
        btn.addEventListener('click', handleLogout);
    });

    // Navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        if (!item.classList.contains('logout-btn')) {
            item.addEventListener('click', handleNavigation);
        }
    });

    // Change password form
    const passwordForm = document.getElementById('change-password-form');
    if (passwordForm) {
        passwordForm.addEventListener('submit', handlePasswordChange);
    }
}

function handleLogin(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('login-error');

    // Get stored credentials or use default
    const storedCreds = localStorage.getItem('sgac_admin_credentials');
    const credentials = storedCreds ? JSON.parse(storedCreds) : DEFAULT_CREDENTIALS;

    if (username === credentials.username && password === credentials.password) {
        // Create session
        adminSession = {
            username: username,
            timestamp: new Date().getTime()
        };
        localStorage.setItem('sgac_admin_session', JSON.stringify(adminSession));

        showDashboard();
        loadDashboardStats();
    } else {
        errorDiv.textContent = 'Invalid username or password';
        errorDiv.classList.add('show');
    }
}

function handleLogout() {
    localStorage.removeItem('sgac_admin_session');
    adminSession = null;
    showLogin();
}

function handlePasswordChange(e) {
    e.preventDefault();

    const currentPassword = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    const storedCreds = localStorage.getItem('sgac_admin_credentials');
    const credentials = storedCreds ? JSON.parse(storedCreds) : DEFAULT_CREDENTIALS;

    if (currentPassword !== credentials.password) {
        alert('Current password is incorrect');
        return;
    }

    if (newPassword !== confirmPassword) {
        alert('New passwords do not match');
        return;
    }

    if (newPassword.length < 6) {
        alert('Password must be at least 6 characters');
        return;
    }

    // Update credentials
    credentials.password = newPassword;
    localStorage.setItem('sgac_admin_credentials', JSON.stringify(credentials));

    alert('Password updated successfully');
    e.target.reset();
}

// ==========================================
// NAVIGATION
// ==========================================

function handleNavigation(e) {
    e.preventDefault();
    const section = this.dataset.section;
    switchSection(section);
}

function switchSection(section) {
    // Update nav active state
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[data-section="${section}"]`).classList.add('active');

    // Update content sections
    document.querySelectorAll('.content-section').forEach(sec => {
        sec.classList.remove('active');
    });
    document.getElementById(`${section}-section`).classList.add('active');

    // Update title
    const titles = {
        dashboard: 'Dashboard',
        faculty: 'Faculty Management',
        carousel: 'Carousel Management',
        notifications: 'Notifications Management',
        gallery: 'Gallery Management',
        settings: 'Settings'
    };
    document.getElementById('section-title').textContent = titles[section];

    // Load section data
    if (section === 'faculty') loadFacultyTable();
    if (section === 'carousel') loadCarouselList();
    if (section === 'notifications') loadNotificationsTable();
    if (section === 'gallery') loadGalleryGrid();
}

// ==========================================
// DASHBOARD
// ==========================================

function loadDashboardStats() {
    const faculty = getDataFromStorage('faculty') || COLLEGE_DATA.faculty;
    const notifications = getDataFromStorage('notifications') || COLLEGE_DATA.notifications;
    const carousel = getDataFromStorage('carousel') || COLLEGE_DATA.carousel;
    const gallery = getDataFromStorage('gallery') || COLLEGE_DATA.gallery;

    document.getElementById('total-faculty').textContent = faculty.length;
    document.getElementById('total-notifications').textContent = notifications.length;
    document.getElementById('total-carousel').textContent = carousel.length;
    document.getElementById('total-gallery').textContent = gallery.length;
}

// ==========================================
// DATA MANAGEMENT
// ==========================================

function getDataFromStorage(key) {
    const data = localStorage.getItem(`sgac_${key}_data`);
    return data ? JSON.parse(data) : null;
}

function saveDataToStorage(key, data) {
    localStorage.setItem(`sgac_${key}_data`, JSON.stringify(data));
}

function exportData() {
    const data = {
        faculty: getDataFromStorage('faculty') || COLLEGE_DATA.faculty,
        carousel: getDataFromStorage('carousel') || COLLEGE_DATA.carousel,
        notifications: getDataFromStorage('notifications') || COLLEGE_DATA.notifications,
        gallery: getDataFromStorage('gallery') || COLLEGE_DATA.gallery
    };

    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `sgac_data_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);

            if (data.faculty) saveDataToStorage('faculty', data.faculty);
            if (data.carousel) saveDataToStorage('carousel', data.carousel);
            if (data.notifications) saveDataToStorage('notifications', data.notifications);
            if (data.gallery) saveDataToStorage('gallery', data.gallery);

            alert('Data imported successfully!');
            loadDashboardStats();
            location.reload();
        } catch (error) {
            alert('Error importing data: ' + error.message);
        }
    };
    reader.readAsText(file);
}

function resetData() {
    if (!confirm('Are you sure you want to reset all data to default? This cannot be undone.')) {
        return;
    }

    localStorage.removeItem('sgac_faculty_data');
    localStorage.removeItem('sgac_carousel_data');
    localStorage.removeItem('sgac_notifications_data');
    localStorage.removeItem('sgac_gallery_data');

    alert('Data reset to default');
    location.reload();
}

// ==========================================
// FACULTY MANAGEMENT
// ==========================================

function loadFacultyTable() {
    const faculty = getDataFromStorage('faculty') || COLLEGE_DATA.faculty;
    const tbody = document.getElementById('faculty-tbody');

    tbody.innerHTML = faculty.map(f => `
        <tr>
            <td>${f.id}</td>
            <td>${f.name}</td>
            <td>${f.designation}</td>
            <td>${getDepartmentInfo(f.department) ? getDepartmentInfo(f.department).name : f.department}</td>
            <td>${f.email}</td>
            <td>
                <button class="btn-edit" onclick="editFaculty('${f.id}')">
                    <i class="fas fa-edit"></i> Edit
                </button>
                <button class="btn-delete" onclick="deleteFaculty('${f.id}')">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </td>
        </tr>
    `).join('');
}

function showAddFacultyModal() {
    const modal = createModal('Add Faculty', `
        <form id="faculty-form" class="modal-form">
            <label>Name *</label>
            <input type="text" name="name" required>
            
            <label>Designation *</label>
            <input type="text" name="designation" required>
            
            <label>Department *</label>
            <select name="department" required>
                ${Object.keys(COLLEGE_DATA.departments).map(key => `
                    <option value="${key}">${COLLEGE_DATA.departments[key].name}</option>
                `).join('')}
            </select>
            
            <label>Email *</label>
            <input type="email" name="email" required>
            
            <label>Phone *</label>
            <input type="tel" name="phone" required>
            
            <label>Qualifications</label>
            <input type="text" name="qualifications">
            
            <label>Specialization</label>
            <input type="text" name="specialization">
            
            <label>Photo URL</label>
            <input type="text" name="photo" placeholder="assets/images/faculty.jpg">
            
            <button type="submit" class="btn-primary">Add Faculty</button>
        </form>
    `);

    document.getElementById('faculty-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const faculty = getDataFromStorage('faculty') || [...COLLEGE_DATA.faculty];

        const newFaculty = {
            id: 'fac-' + Date.now(),
            name: formData.get('name'),
            designation: formData.get('designation'),
            department: formData.get('department'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            photo: formData.get('photo') || '',
            qualifications: formData.get('qualifications') || '',
            specialization: formData.get('specialization') || ''
        };

        faculty.push(newFaculty);
        saveDataToStorage('faculty', faculty);
        closeModal();
        loadFacultyTable();
        loadDashboardStats();
        alert('Faculty added successfully!');
    });
}

function editFaculty(id) {
    const faculty = getDataFromStorage('faculty') || COLLEGE_DATA.faculty;
    const member = faculty.find(f => f.id === id);
    if (!member) return;

    const modal = createModal('Edit Faculty', `
        <form id="edit-faculty-form" class="modal-form">
            <input type="hidden" name="id" value="${member.id}">
            
            <label>Name *</label>
            <input type="text" name="name" value="${member.name}" required>
            
            <label>Designation *</label>
            <input type="text" name="designation" value="${member.designation}" required>
            
            <label>Department *</label>
            <select name="department" required>
                ${Object.keys(COLLEGE_DATA.departments).map(key => `
                    <option value="${key}" ${member.department === key ? 'selected' : ''}>${COLLEGE_DATA.departments[key].name}</option>
                `).join('')}
            </select>
            
            <label>Email *</label>
            <input type="email" name="email" value="${member.email}" required>
            
            <label>Phone *</label>
            <input type="tel" name="phone" value="${member.phone}" required>
            
            <label>Qualifications</label>
            <input type="text" name="qualifications" value="${member.qualifications || ''}">
            
            <label>Specialization</label>
            <input type="text" name="specialization" value="${member.specialization || ''}">
            
            <label>Photo URL</label>
            <input type="text" name="photo" value="${member.photo || ''}">
            
            <button type="submit" class="btn-primary">Update Faculty</button>
        </form>
    `);

    document.getElementById('edit-faculty-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const facultyList = getDataFromStorage('faculty') || [...COLLEGE_DATA.faculty];

        const index = facultyList.findIndex(f => f.id === id);
        facultyList[index] = {
            id: id,
            name: formData.get('name'),
            designation: formData.get('designation'),
            department: formData.get('department'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            photo: formData.get('photo') || '',
            qualifications: formData.get('qualifications') || '',
            specialization: formData.get('specialization') || ''
        };

        saveDataToStorage('faculty', facultyList);
        closeModal();
        loadFacultyTable();
        alert('Faculty updated successfully!');
    });
}

function deleteFaculty(id) {
    if (!confirm('Are you sure you want to delete this faculty member?')) return;

    const faculty = getDataFromStorage('faculty') || [...COLLEGE_DATA.faculty];
    const filtered = faculty.filter(f => f.id !== id);
    saveDataToStorage('faculty', filtered);
    loadFacultyTable();
    loadDashboardStats();
    alert('Faculty deleted successfully!');
}

// ==========================================
// CAROUSEL MANAGEMENT
// ==========================================

function loadCarouselList() {
    const carousel = getDataFromStorage('carousel') || COLLEGE_DATA.carousel;
    const container = document.getElementById('carousel-list');
    if (!container) return;
    if (!carousel || !Array.isArray(carousel) || carousel.length === 0) {
        container.innerHTML = '<p style="text-align:center;color:#888;padding:30px;">No carousel images found.</p>';
        return;
    }
    container.innerHTML = carousel.map(item => `
        <div class="carousel-item">
            <img src="${item.src}" alt="${item.title}">
            <div class="carousel-item-info">
                <h4>${item.title}</h4>
                <p>${item.desc}</p>
                <button class="btn-edit" onclick="editCarousel(${item.id})">Edit</button>
                <button class="btn-delete" onclick="deleteCarousel(${item.id})">Delete</button>
            </div>
        </div>
    `).join('');
}

function showAddCarouselModal() {
    const modal = createModal('Add Carousel Slide', `
        <form id="carousel-form" class="modal-form">
            <label>Image URL *</label>
            <input type="text" name="src" required>
            
            <label>Title *</label>
            <input type="text" name="title" required>
            
            <label>Description *</label>
            <textarea name="desc" required></textarea>
            
            <label>Button Text</label>
            <input type="text" name="buttonText" value="Learn More">
            
            <label>Button Link</label>
            <input type="text" name="buttonLink" value="#">
            
            <button type="submit" class="btn-primary">Add Slide</button>
        </form>
    `);

    document.getElementById('carousel-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const carousel = getDataFromStorage('carousel') || [...COLLEGE_DATA.carousel];

        const newSlide = {
            id: Math.max(...carousel.map(c => c.id)) + 1,
            src: formData.get('src'),
            title: formData.get('title'),
            desc: formData.get('desc'),
            buttonText: formData.get('buttonText'),
            buttonLink: formData.get('buttonLink')
        };

        carousel.push(newSlide);
        saveDataToStorage('carousel', carousel);
        closeModal();
        loadCarouselList();
        loadDashboardStats();
        alert('Carousel slide added!');
    });
}

function deleteCarousel(id) {
    if (!confirm('Delete this carousel slide?')) return;

    const carousel = getDataFromStorage('carousel') || [...COLLEGE_DATA.carousel];
    const filtered = carousel.filter(c => c.id !== id);
    saveDataToStorage('carousel', filtered);
    loadCarouselList();
    loadDashboardStats();
}

// ==========================================
// NOTIFICATIONS MANAGEMENT
// ==========================================

function loadNotificationsTable() {
    const notifications = getDataFromStorage('notifications') || COLLEGE_DATA.notifications;
    const tbody = document.getElementById('notifications-tbody');

    tbody.innerHTML = notifications.map(n => `
        <tr>
            <td>${n.id}</td>
            <td>${n.text}</td>
            <td>${n.date}</td>
            <td>${n.important ? '⭐ Yes' : 'No'}</td>
            <td>
                <button class="btn-delete" onclick="deleteNotification(${n.id})">Delete</button>
            </td>
        </tr>
    `).join('');
}

function showAddNotificationModal() {
    const modal = createModal('Add Notification', `
        <form id="notification-form" class="modal-form">
            <label>Notification Text *</label>
            <textarea name="text" required></textarea>
            
            <label>Link</label>
            <input type="text" name="link" value="#">
            
            <label>Date</label>
            <input type="date" name="date" value="${new Date().toISOString().split('T')[0]}">
            
            <label>
                <input type="checkbox" name="important"> Mark as Important
            </label>
            
            <button type="submit" class="btn-primary">Add Notification</button>
        </form>
    `);

    document.getElementById('notification-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const notifications = getDataFromStorage('notifications') || [...COLLEGE_DATA.notifications];

        const newNotif = {
            id: Math.max(...notifications.map(n => n.id)) + 1,
            text: formData.get('text'),
            link: formData.get('link'),
            date: formData.get('date'),
            important: formData.get('important') === 'on'
        };

        notifications.unshift(newNotif);
        saveDataToStorage('notifications', notifications);
        closeModal();
        loadNotificationsTable();
        loadDashboardStats();
        alert('Notification added!');
    });
}

function deleteNotification(id) {
    if (!confirm('Delete this notification?')) return;

    const notifications = getDataFromStorage('notifications') || [...COLLEGE_DATA.notifications];
    const filtered = notifications.filter(n => n.id !== id);
    saveDataToStorage('notifications', filtered);
    loadNotificationsTable();
    loadDashboardStats();
}

// ==========================================
// GALLERY MANAGEMENT
// ==========================================

function loadGalleryGrid() {
    const gallery = getDataFromStorage('gallery') || COLLEGE_DATA.gallery;
    const container = document.getElementById('gallery-grid');

    container.innerHTML = gallery.map(img => `
        <div class="gallery-item-admin">
            <img src="${img.src}" alt="${img.caption}">
            <div class="item-actions">
                <span>${img.caption}</span>
                <button class="btn-delete" onclick="deleteGalleryImage(${img.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
}

function showAddGalleryModal() {
    const modal = createModal('Add Gallery Image', `
        <form id="gallery-form" class="modal-form">
            <label>Image URL *</label>
            <input type="text" name="src" required>
            
            <label>Caption *</label>
            <input type="text" name="caption" required>
            
            <label>Category *</label>
            <select name="category" required>
                <option value="campus">Campus</option>
                <option value="events">Events</option>
                <option value="cultural">Cultural</option>
                <option value="sports">Sports</option>
            </select>
            
            <button type="submit" class="btn-primary">Add Image</button>
        </form>
    `);

    document.getElementById('gallery-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const gallery = getDataFromStorage('gallery') || [...COLLEGE_DATA.gallery];

        const newImage = {
            id: Math.max(...gallery.map(g => g.id)) + 1,
            src: formData.get('src'),
            caption: formData.get('caption'),
            category: formData.get('category')
        };

        gallery.push(newImage);
        saveDataToStorage('gallery', gallery);
        closeModal();
        loadGalleryGrid();
        loadDashboardStats();
        alert('Image added!');
    });
}

function deleteGalleryImage(id) {
    if (!confirm('Delete this image?')) return;

    const gallery = getDataFromStorage('gallery') || [...COLLEGE_DATA.gallery];
    const filtered = gallery.filter(g => g.id !== id);
    saveDataToStorage('gallery', filtered);
    loadGalleryGrid();
    loadDashboardStats();
}

// ==========================================
// MODAL UTILITIES
// ==========================================

function createModal(title, content) {
    const modalHTML = `
        <div class="modal show" id="admin-modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>${title}</h3>
                    <button class="modal-close" onclick="closeModal()">&times;</button>
                </div>
                ${content}
            </div>
        </div>
    `;

    document.getElementById('modal-container').innerHTML = modalHTML;
}

function closeModal() {
    document.getElementById('modal-container').innerHTML = '';
}