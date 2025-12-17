// ==========================================
// FACULTY PAGE RENDERING LOGIC
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    initFacultyPage();
});

function initFacultyPage() {
    renderPrincipal();
    renderAllFaculty();
    setupFilters();
    setupSearch();
    renderFacultyStats();
}

// Render Principal Section
function renderPrincipal() {
    const principal = getFacultyById('principal-1'); // Principal ID
    const container = document.getElementById('principal-section');

    if (!container || !principal) return;

    const photoHTML = principal.photo ?
        `<img src="${principal.photo}" alt="${principal.name}">` :
        `<i class="fas fa-user" style="font-size: 4rem; color: var(--primary-blue);"></i>`;

    container.innerHTML = `
        <div style="flex: 0 0 200px;">
            <div style="width: 200px; height: 200px; border-radius: 10px; overflow: hidden; border: 4px solid var(--primary-blue); box-shadow: 0 4px 10px rgba(0,0,0,0.2); display: flex; align-items: center; justify-content: center; background: var(--light-bg);">
                ${photoHTML}
            </div>
        </div>
        <div style="flex: 1; min-width: 300px;">
            <h3 style="color: var(--primary-blue); margin-bottom: 5px; font-size: 2rem;">${principal.name}</h3>
            <p style="color: #777; font-weight: 600; text-transform: uppercase; font-size: 1rem; margin-bottom: 5px;">${principal.designation}</p>
            <p style="color: #999; font-size: 0.9rem; margin-bottom: 15px;">${principal.qualifications}</p>
            <div style="display: flex; gap: 25px; flex-wrap: wrap; font-size: 0.95rem; color: var(--primary-blue); margin-bottom: 20px;">
                <span><i class="fas fa-envelope" style="margin-right: 8px;"></i> ${principal.email}</span>
                <span><i class="fas fa-phone" style="margin-right: 8px;"></i> ${principal.phone}</span>
            </div>
            <p style="font-style: italic; color: #555; line-height: 1.8;">
                "Leading with a vision to provide accessible, high-quality education to all students, fostering an environment that nurtures intellectual curiosity and social responsibility."
            </p>
        </div>
    `;
}

// Render All Faculty
function renderAllFaculty() {
    const faculty = getAllFaculty().filter(f => f.id !== 'principal-1'); // Exclude principal
    renderFacultyGrid(faculty);
}

// Render Faculty Grid
function renderFacultyGrid(facultyList) {
    const container = document.getElementById('faculty-grid');
    if (!container) return;

    if (facultyList.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #666; padding: 40px;">No faculty members found.</p>';
        return;
    }

    container.innerHTML = facultyList.map(faculty => {
        const deptInfo = getDepartmentInfo(faculty.department);
        const photoHTML = faculty.photo ?
            `<img src="${faculty.photo}" alt="${faculty.name}" style="width: 100%; height: 100%; object-fit: cover;">` :
            `<i class="fas fa-user" style="font-size: 3rem; color: ${deptInfo.color};"></i>`;

        return `
            <div class="faculty-card" data-dept="${faculty.department}">
                <div style="width: 100px; height: 100px; background: var(--light-bg); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; border: 3px solid ${deptInfo.color}; overflow: hidden;">
                    ${photoHTML}
                </div>
                <h4 style="color: var(--primary-blue); margin-bottom: 5px; font-size: 1.2rem;">${faculty.name}</h4>
                <p style="color: #777; font-size: 0.9rem; margin-bottom: 5px;">${faculty.designation}</p>
                <p style="color: #999; font-size: 0.85rem; margin-bottom: 10px;"><i class="${deptInfo.icon}" style="margin-right: 5px;"></i>${deptInfo.name}</p>
                <p style="color: #666; font-size: 0.8rem; margin-bottom: 15px; font-style: italic;">${faculty.qualifications}</p>
                <div style="display: flex; gap: 15px; justify-content: center; font-size: 0.9rem; color: #666;">
                    <a href="mailto:${faculty.email}" style="color: ${deptInfo.color};" title="Email"><i class="fas fa-envelope"></i></a>
                    <a href="tel:${faculty.phone}" style="color: ${deptInfo.color};" title="Phone"><i class="fas fa-phone"></i></a>
                </div>
            </div>
        `;
    }).join('');

    // Add hover effects
    addHoverEffects();
}

// Setup Department Filters
function setupFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            const dept = this.getAttribute('data-dept') || this.textContent.trim().toLowerCase().replace(/\s+/, '-');
            // Update active button
            buttons.forEach(b => {
                b.classList.remove('active');
                b.style.background = 'white';
                b.style.color = 'var(--primary-blue)';
            });
            this.classList.add('active');
            this.style.background = 'var(--primary-blue)';
            this.style.color = 'white';
            // Filter faculty
            const faculty = getFacultyByDepartment(dept).filter(f => f.id !== 'principal-1');
            renderFacultyGrid(faculty);
        });
    });

    // On page load, check hash for department
    const hash = window.location.hash.replace('#', '');
    if (hash && hash.length > 0) {
        filterFaculty(hash);
    }
}

// Wrapper function for inline onclick handlers
function filterFaculty(dept) {
    const buttons = document.querySelectorAll('.filter-btn');
    // Update active button
    buttons.forEach(b => {
        b.classList.remove('active');
        b.style.background = 'white';
        b.style.color = 'var(--primary-blue)';
    });
    // Find and activate the clicked button
    const clickedBtn = Array.from(buttons).find(b => {
        const btnDept = b.getAttribute('data-dept') || b.textContent.trim().toLowerCase().replace(/\s+/, '-');
        return btnDept === dept;
    });
    if (clickedBtn) {
        clickedBtn.classList.add('active');
        clickedBtn.style.background = 'var(--primary-blue)';
        clickedBtn.style.color = 'white';
    }
    // Filter faculty
    const faculty = getFacultyByDepartment(dept).filter(f => f.id !== 'principal-1');
    renderFacultyGrid(faculty);
    // Update hash in URL
    if (window.location.hash.replace('#', '') !== dept) {
        window.location.hash = dept;
    }
}

// Setup Search
function setupSearch() {
    const searchInput = document.getElementById('faculty-search');
    if (!searchInput) return;

    searchInput.addEventListener('input', function() {
        const query = this.value.trim();

        if (query.length === 0) {
            renderAllFaculty();
            return;
        }

        const results = searchFaculty(query).filter(f => f.id !== 'principal-1');
        renderFacultyGrid(results);
    });
}

// Render Faculty Stats
function renderFacultyStats() {
    const container = document.getElementById('faculty-stats');
    if (!container) return;

    const totalFaculty = getAllFaculty().length - 1; // Exclude principal
    const phdHolders = getAllFaculty().filter(f => f.qualifications && f.qualifications.includes('Ph.D.')).length;
    const departments = new Set(getAllFaculty().filter(f => f.id !== 'principal-1').map(f => f.department)).size;

    container.innerHTML = `
        <div style="text-align: center; padding: 30px; background: white; border-radius: 5px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <i class="fas fa-chalkboard-teacher" style="font-size: 3rem; color: var(--primary-blue); margin-bottom: 15px;"></i>
            <h3 style="color: var(--primary-blue); font-size: 2.5rem; margin-bottom: 5px;">${totalFaculty}+</h3>
            <p style="color: #666;">Total Faculty</p>
        </div>
        <div style="text-align: center; padding: 30px; background: white; border-radius: 5px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <i class="fas fa-user-graduate" style="font-size: 3rem; color: var(--accent-gold); margin-bottom: 15px;"></i>
            <h3 style="color: var(--primary-blue); font-size: 2.5rem; margin-bottom: 5px;">${phdHolders}+</h3>
            <p style="color: #666;">Ph.D. Holders</p>
        </div>
        <div style="text-align: center; padding: 30px; background: white; border-radius: 5px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <i class="fas fa-book-reader" style="font-size: 3rem; color: var(--primary-blue); margin-bottom: 15px;"></i>
            <h3 style="color: var(--primary-blue); font-size: 2.5rem; margin-bottom: 5px;">${departments}</h3>
            <p style="color: #666;">Departments</p>
        </div>
        <div style="text-align: center; padding: 30px; background: white; border-radius: 5px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <i class="fas fa-award" style="font-size: 3rem; color: var(--accent-gold); margin-bottom: 15px;"></i>
            <h3 style="color: var(--primary-blue); font-size: 2.5rem; margin-bottom: 5px;">25+</h3>
            <p style="color: #666;">Years Experience</p>
        </div>
    `;
}

// Add Hover Effects
function addHoverEffects() {
    document.querySelectorAll('.faculty-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        });
    });
}