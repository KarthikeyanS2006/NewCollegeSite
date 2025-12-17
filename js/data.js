// ==========================================
// SGAC CENTRALIZED DATA MANAGEMENT SYSTEM
// ==========================================
// All dynamic content is managed from this single file
// Update faculty, carousel, notifications, gallery here
// Uses complete faculty data from faculty-data.js structure

const COLLEGE_DATA = {

    // ==========================================
    // FACULTY DATABASE - COMPLETE DATA
    // ==========================================
    faculty: [
        // Principal
        {
            id: 'principal-1',
            name: 'Dr. P. Seenuvasa Kumaran',
            designation: 'Principal',
            qualifications: 'M.Sc., M.Phil., B.Ed., PGDCA, Ph.D.',
            department: 'administration',
            email: 'principal@sgac.edu.in',
            phone: '+91-4567-293122',
            photo: 'assets/images/Principal_image.jpg'
        },

        // Tamil Department
        {
            id: 'tamil-hod',
            name: 'Dr. M. SENTHAMARAI',
            designation: 'Head of Department',
            qualifications: 'M.A., M.Phil., Ph.D.',
            role: 'Assistant Professor',
            department: 'tamil',
            email: 'tamil.hod@sgac.edu.in',
            phone: '+91-9876-543210',
            shift: '1st'
        },
        {
            id: 'tamil-2',
            name: 'Dr. MUTHURAMAN.S',
            designation: 'Guest Lecturer',
            qualifications: 'M.A., M.PHIL.',
            department: 'tamil',
            email: 'muthuraman@sgac.edu.in',
            phone: '+91-9876-543211',
            shift: '1st'
        },
        {
            id: 'tamil-3',
            name: 'Dr. POORNAYOGARANI.K',
            designation: 'Guest Lecturer',
            qualifications: 'M.A., M.Phil., Ph.D.',
            department: 'tamil',
            email: 'poornayogarani@sgac.edu.in',
            phone: '+91-9876-543212',
            shift: '1st'
        },
        {
            id: 'tamil-4',
            name: 'Dr. RAMAMURTHY.S',
            designation: 'Guest Lecturer',
            qualifications: 'M.A., M.Phil., Ph.D.',
            department: 'tamil',
            email: 'ramamurthy@sgac.edu.in',
            phone: '+91-9876-543212',
            shift: '1st'
        },
        {
            id: 'tamil-5',
            name: 'Dr. PAUL MURUGAN.V',
            designation: 'Guest Lecturer',
            qualifications: 'M.A., M.Phil., Ph.D., PDF',
            department: 'tamil',
            email: 'paulmurugan@sgac.edu.in',
            phone: '+91-9876-543212',
            shift: '1st'
        },

        // English Department
        {
            id: 'english-hod',
            name: 'Dr. K. JEYAMURUGAN',
            designation: 'Head of Department',
            qualifications: 'M.A., M.Phil.',
            role: 'Assistant Professor',
            department: 'english',
            email: 'english.hod@sgac.edu.in',
            phone: '+91-9876-543220',
            shift: '1st'
        },
        {
            id: 'english-2',
            name: 'BARAKKATHU NISHA.T.A',
            designation: 'Guest Lecturer',
            qualifications: 'M.A., M.PHIL., SET, NET',
            department: 'english',
            email: 'barakkathu@sgac.edu.in',
            phone: '+91-9876-543221',
            shift: '1st'
        },
        {
            id: 'english-3',
            name: 'Dr. SUTHANTHIRA JOTHI.D',
            designation: 'Guest Lecturer',
            qualifications: 'M.A., M.PHIL.',
            department: 'english',
            email: 'suthanthirajothi@sgac.edu.in',
            phone: '+91-9876-543222',
            shift: '1st'
        },

        // Mathematics Department
        {
            id: 'math-hod',
            name: 'Prof. C. SHANMUGA VADIVU',
            designation: 'Head of Department',
            qualifications: 'M.A., M.Phil., Ph.D.',
            department: 'maths',
            email: 'math.hod@sgac.edu.in',
            phone: '+91-9876-543210',
            shift: '1st'
        },
        {
            id: 'math-2',
            name: 'Prof. G. CHANDRA SEKARAN',
            designation: 'Associate Professor',
            qualifications: 'M.Sc., M.PHIL., B.Ed., SET',
            department: 'maths',
            email: 'chandrasekaran@sgac.edu.in',
            phone: '+91-9876-543211',
            shift: '1st'
        },
        {
            id: 'math-3',
            name: 'Prof. M. MALARVANNAN',
            designation: 'Assistant Professor',
            qualifications: 'M.Sc., M.Ed., M.PHIL.',
            department: 'maths',
            email: 'malarvannan@sgac.edu.in',
            phone: '+91-9876-543212',
            shift: '1st'
        },

        // Physics Department
        {
            id: 'physics-hod',
            name: 'Thiru. B. SENTHIL',
            designation: 'Head of Department',
            qualifications: 'M.A., M.Phil., Ph.D.',
            role: 'Assistant Professor',
            department: 'physics',
            email: 'physics.hod@sgac.edu.in',
            phone: '+91-9876-543210',
            shift: '1st'
        },
        {
            id: 'physics-2',
            name: 'Dr. K. RATHIDEVI',
            designation: 'Associate Professor',
            qualifications: 'M.Sc., M.PHIL.',
            department: 'physics',
            email: 'rathidevi@sgac.edu.in',
            phone: '+91-9876-543211',
            shift: '1st'
        },
        {
            id: 'physics-3',
            name: 'Prof. K. USHA',
            designation: 'Assistant Professor',
            qualifications: 'M.Sc., M.PHIL.',
            department: 'physics',
            email: 'usha@sgac.edu.in',
            phone: '+91-9876-543212',
            shift: '1st'
        },

        // Chemistry Department
        {
            id: 'chemistry-hod',
            name: 'Dr. N. UMA SANKARI',
            designation: 'Head of Department',
            qualifications: 'M.A., M.Phil., Ph.D.',
            role: 'Associate Professor',
            department: 'chemistry',
            email: 'chem.hod@sgac.edu.in',
            phone: '+91-9876-543210',
            shift: '1st'
        },
        {
            id: 'chemistry-2',
            name: 'Dr. PAUL PANDI.P',
            designation: 'Guest Lecturer',
            qualifications: 'M.Sc., M.PHIL., B.Ed., SET',
            department: 'chemistry',
            email: 'paulpandi@sgac.edu.in',
            phone: '+91-9876-543211',
            shift: '1st'
        },
        {
            id: 'chemistry-3',
            name: 'Dr. RAJIV GANDHI.N',
            designation: 'Guest Lecturer',
            qualifications: 'M.Sc., M.Ed., M.PHIL.',
            department: 'chemistry',
            email: 'rajiv@sgac.edu.in',
            phone: '+91-9876-543212',
            shift: '1st'
        },

        // Botany Department
        {
            id: 'botany-hod',
            name: 'Dr. K. RAVEENDRA RETHNAM',
            designation: 'Head of Department',
            qualifications: 'M.A., M.Phil., Ph.D.',
            role: 'Assistant Professor',
            department: 'botany',
            email: 'botany.hod@sgac.edu.in',
            phone: '+91-9876-543210',
            shift: '1st'
        },
        {
            id: 'botany-2',
            name: 'Dr. M. UTHIRASELVAM',
            designation: 'Assistant Professor',
            qualifications: 'M.Sc., M.PHIL.',
            department: 'botany',
            email: 'uthiraselvam@sgac.edu.in',
            phone: '+91-9876-543211',
            shift: '1st'
        },

        // Zoology Department
        {
            id: 'zoology-hod',
            name: 'Dr. V. SIVAKUMARAN',
            designation: 'Head of Department',
            qualifications: 'M.A., M.Phil., Ph.D.',
            role: 'Assistant Professor',
            department: 'zoology',
            email: 'zoology.hod@sgac.edu.in',
            phone: '+91-9876-543210',
            shift: '1st'
        },
        {
            id: 'zoology-2',
            name: 'Dr. P. MAYAVU',
            designation: 'Associate Professor',
            qualifications: 'M.Sc., M.PHIL., Ph.D.',
            department: 'zoology',
            email: 'mayavu@sgac.edu.in',
            phone: '+91-9876-543211',
            shift: '1st'
        },

        // Computer Science Department
        {
            id: 'cs-hod',
            name: 'Dr. K. RATHIDEVI',
            designation: 'Head of Department I/C',
            qualifications: 'M.A., M.Phil., Ph.D.',
            department: 'cs',
            email: 'computerscience.hod@sgac.edu.in',
            phone: '+91-9876-543210',
            shift: '1st'
        },
        {
            id: 'cs-2',
            name: 'FATHIMA ZAHIRA.M',
            designation: 'Guest Lecturer',
            qualifications: 'M.Sc., M.PHIL., Ph.D.',
            department: 'cs',
            email: 'fathima@sgac.edu.in',
            phone: '+91-9876-543211',
            shift: '1st'
        },

        // Commerce Department
        {
            id: 'commerce-hod',
            name: 'Dr. K. MUTHALAGU',
            designation: 'Head of Department',
            qualifications: 'M.A., M.Phil., Ph.D.',
            department: 'commerce',
            email: 'commerce.hod@sgac.edu.in',
            phone: '+91-9876-543210',
            shift: '1st'
        },
        {
            id: 'commerce-2',
            name: 'Dr. N. KESAVAN',
            designation: 'Associate Professor',
            qualifications: 'M.COM., M.PHIL., Ph.D.',
            department: 'commerce',
            email: 'kesavan@sgac.edu.in',
            phone: '+91-9876-543211',
            shift: '1st'
        },

        // Economics Department
        {
            id: 'economics-hod',
            name: 'Dr. K. RAMAKRISHNAN',
            designation: 'Head of Department',
            qualifications: 'M.A., M.Phil., Ph.D.',
            role: 'Associate Professor',
            department: 'economics',
            email: 'economics.hod@sgac.edu.in',
            phone: '+91-9876-543210',
            shift: '1st'
        },
        {
            id: 'economics-2',
            name: 'Dr. K. MANI RAJU',
            designation: 'Associate Professor',
            qualifications: 'M.A., M.PHIL., Ph.D.',
            department: 'economics',
            email: 'maniraju@sgac.edu.in',
            phone: '+91-9876-543211',
            shift: '1st'
        }
    ],

    // ==========================================
    // CAROUSEL IMAGES
    // ==========================================
    carousel: [{
            id: 1,
            src: 'assets/images/entrence.jpg',
            title: 'Welcome to Sethupathy Govt Arts College',
            desc: 'Empowering Rural Youth Through Quality Education',
            buttonText: 'Learn More',
            buttonLink: 'about.html'
        },
        {
            id: 2,
            src: 'assets/images/college2.jpg',
            title: 'Academic Excellence',
            desc: 'Accredited with "A" Grade by NAAC',
            buttonText: 'View Programs',
            buttonLink: 'academics.html'
        },
        {
            id: 3,
            src: 'assets/images/college3.jpg',
            title: 'Research & Innovation',
            desc: 'Fostering a Culture of Discovery and Inquiry',
            buttonText: 'Research Activities',
            buttonLink: 'index.html#research'
        },
        {
            id: 4,
            src: 'assets/images/college1.jpg',
            title: 'Modern Infrastructure',
            desc: 'State-of-the-art Facilities for Holistic Development',
            buttonText: 'Explore Campus',
            buttonLink: 'gallery.html'
        }
    ],

    // ==========================================
    // NOTIFICATIONS / NEWS
    // ==========================================
    notifications: [{
            id: 1,
            text: 'Admission Open for 2025-2026 Academic Year - Apply Online',
            link: 'admissions.html',
            date: '2025-06-01',
            important: true
        },
        {
            id: 2,
            text: 'Semester Examination Results Declared - April 2025',
            link: '#',
            date: '2025-05-15',
            important: false
        },
        {
            id: 3,
            text: 'NAAC Peer Team Visit Scheduled for Next Month',
            link: 'iqac.html',
            date: '2025-05-10',
            important: true
        },
        {
            id: 4,
            text: 'Scholarship Applications for SC/ST Students Open',
            link: '#',
            date: '2025-05-05',
            important: false
        },
        {
            id: 5,
            text: 'Annual Sports Day - June 15, 2025',
            link: '#',
            date: '2025-05-01',
            important: false
        }
    ],

    // ==========================================
    // GALLERY IMAGES
    // ==========================================
    gallery: [
        { id: 1, src: 'assets/images/entrence.jpg', caption: 'Main Entrance', category: 'campus' },
        { id: 2, src: 'assets/images/college2.jpg', caption: 'Campus View', category: 'campus' },
        { id: 3, src: 'assets/images/college3.jpg', caption: 'Academic Block', category: 'campus' },
        { id: 4, src: 'assets/images/college1.jpg', caption: 'College Building', category: 'campus' },
        { id: 5, src: 'assets/images/culturals01.jpg', caption: 'Cultural Event', category: 'cultural' },
        { id: 6, src: 'assets/images/bcomcertificate.jpg', caption: 'Convocation Ceremony', category: 'events' }
    ],

    // ==========================================
    // DEPARTMENT INFORMATION
    // ==========================================
    departments: {
        administration: { name: 'Administration', icon: 'fas fa-user-tie', color: '#003366' },
        tamil: { name: 'Tamil', icon: 'fas fa-book-open', color: '#003366' },
        english: { name: 'English', icon: 'fas fa-language', color: '#ffcc00' },
        maths: { name: 'Mathematics', icon: 'fas fa-square-root-alt', color: '#003366' },
        physics: { name: 'Physics', icon: 'fas fa-atom', color: '#ffcc00' },
        chemistry: { name: 'Chemistry', icon: 'fas fa-flask', color: '#003366' },
        economics: { name: 'Economics', icon: 'fas fa-chart-line', color: '#ffcc00' },
        commerce: { name: 'Commerce', icon: 'fas fa-business-time', color: '#003366' },
        'commerce-ca': { name: 'Commerce (CA)', icon: 'fas fa-desktop', color: '#ffcc00' },
        botany: { name: 'Botany', icon: 'fas fa-leaf', color: '#003366' },
        zoology: { name: 'Zoology', icon: 'fas fa-dna', color: '#ffcc00' },
        'marine-biology': { name: 'Marine Biology', icon: 'fas fa-water', color: '#003366' },
        cs: { name: 'Computer Science', icon: 'fas fa-laptop-code', color: '#ffcc00' }
    }
};

// ==========================================
// HELPER FUNCTIONS
// ==========================================

// Load data from localStorage or use default
function loadData(key) {
    const stored = localStorage.getItem(`sgac_${key}_data`);
    return stored ? JSON.parse(stored) : COLLEGE_DATA[key];
}

// Get all faculty
function getAllFaculty() {
    return loadData('faculty');
}

// Get faculty by department
function getFacultyByDepartment(department) {
    const faculty = loadData('faculty');
    if (department === 'all') return faculty;
    return faculty.filter(f => f.department === department);
}

// Get faculty by ID
function getFacultyById(id) {
    const faculty = loadData('faculty');
    return faculty.find(f => f.id === id);
}

// Search faculty
function searchFaculty(query) {
    const faculty = loadData('faculty');
    const lowerQuery = query.toLowerCase();
    return faculty.filter(f =>
        f.name.toLowerCase().includes(lowerQuery) ||
        f.department.toLowerCase().includes(lowerQuery) ||
        f.designation.toLowerCase().includes(lowerQuery)
    );
}

// Get carousel images
function getCarouselImages() {
    return loadData('carousel');
}

// Get notifications
function getNotifications(limit = null) {
    const notifications = loadData('notifications');
    return limit ? notifications.slice(0, limit) : notifications;
}

// Get gallery images
function getGalleryImages(category = 'all') {
    const gallery = loadData('gallery');
    if (category === 'all') return gallery;
    return gallery.filter(img => img.category === category);
}

// Get department info
function getDepartmentInfo(deptCode) {
    return COLLEGE_DATA.departments[deptCode];
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = COLLEGE_DATA;
}
