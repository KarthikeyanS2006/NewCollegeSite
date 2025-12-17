// ==========================================
// ALAGAPPA UNIVERSITY CLONE - SGAC DATA
// ==========================================

const CONFIG = {
    identity: {
        name: "Sethupathy Government Arts College",
        tagline: "Affiliated to Alagappa University | Accredited with 'A' Grade by NAAC",
        address: "Ramanathapuram - 623 502, Tamil Nadu, India",
        phone: "+91-4567-220268",
        email: "principal@sgacrmd.edu.in",
        logo: "assets/images/logoclg.png",
        govtLogo: "assets/images/tn_logo.png"
    },
    overview: {
        title: "About Our College",
        text: "Sethupathy Government Arts College, Ramanathapuram, is a premier institution of higher learning in the Ramanathapuram District. Established with the vision of providing quality education to the rural and economically backward students of this region, the college has grown into a center of academic excellence. It is affiliated to Alagappa University and has been accredited with an 'A' Grade by NAAC, reflecting its commitment to high standards in education and infrastructure.",
        vision: "To empower the youth of this region through holistic education, fostering intellectual growth, social responsibility, and ethical values.",
        history: "Founded to serve the educational needs of the coastal district, the college has a rich history of producing distinguished alumni who serve in various capacities across the globe."
    },
    carousel: [
        {
            src: 'assets/images/entrence.jpg',
            title: 'Welcome to Sethupathy Govt Arts College',
            desc: 'Empowering Rural Youth Through Quality Education',
            buttonText: 'Learn More',
            buttonLink: '#about'
        },
        {
            src: 'assets/images/college2.jpg',
            title: 'Academic Excellence',
            desc: 'Accredited with "A" Grade by NAAC',
            buttonText: 'View Programs',
            buttonLink: '#programs'
        },
        {
            src: 'assets/images/college3.jpg',
            title: 'Research & Innovation',
            desc: 'Fostering a Culture of Discovery and Inquiry',
            buttonText: 'Research Activities',
            buttonLink: '#research'
        }
    ],
    news: [
        { text: 'Admission Open for 2025-2026 Academic Year - Apply Online', link: '#admissions' },
        { text: 'Semester Examination Results Declared - April 2025', link: '#' },
        { text: 'NAAC Peer Team Visit Scheduled for Next Month', link: '#' },
        { text: 'Scholarship Applications for SC/ST Students Open', link: '#' }
    ],
    academicPrograms: {
        ug: ['B.A. Tamil', 'B.A. English', 'B.A. History', 'B.A. Economics', 'B.Sc. Mathematics', 'B.Sc. Physics', 'B.Sc. Chemistry', 'B.Sc. Botany', 'B.Sc. Zoology', 'B.Sc. Computer Science', 'B.Com.', 'B.Com. (CA)'],
        pg: ['M.A. Tamil', 'M.A. English', 'M.A. Economics', 'M.Sc. Mathematics', 'M.Sc. Physics', 'M.Sc. Chemistry', 'M.Sc. Botany', 'M.Sc. Zoology', 'M.Sc. Computer Science', 'M.Com.'],
        research: ['Ph.D. in Tamil', 'Ph.D. in English', 'Ph.D. in Commerce', 'Ph.D. in Mathematics', 'Ph.D. in Physics', 'Ph.D. in Chemistry', 'Ph.D. in Botany', 'Ph.D. in Zoology']
    },
    departments: [
        { id: 'tamil', name: 'Tamil', icon: 'fas fa-book-open', link: './departments.html' },
        { id: 'english', name: 'English', icon: 'fas fa-language', link: './departments.html#dep' },
        { id: 'maths', name: 'Mathematics', icon: 'fas fa-square-root-alt', link: './departments.html#dep' },
        { id: 'physics', name: 'Physics', icon: 'fas fa-atom', link: './departments.html#dep' },
        { id: 'chemistry', name: 'Chemistry', icon: 'fas fa-flask', link: './departments.html#dep2' },
        { id: 'economics', name: 'Economics', icon: 'fas fa-chart-line', link: './departments.html#dep2' },
        { id: 'commerce', name: 'Commerce', icon: 'fas fa-business-time', link: './departments.html#dep2' },
        { id: 'commerce-ca', name: 'Commerce (CA)', icon: 'fas fa-desktop', link: './departments.html#cdep2' },
        { id: 'botany', name: 'Botany', icon: 'fas fa-leaf', link: './departments.html#dep2' },
        { id: 'zoology', name: 'Zoology', icon: 'fas fa-dna', link: './departments.html#dep2' },
        { id: 'marine-biology', name: 'Marine Biology', icon: 'fas fa-water', link: './departments.html#dep2' },
        { id: 'cs', name: 'Computer Science', icon: 'fas fa-laptop-code', link: './departments.html#dep2' }
    ],
    researchActivities: [
        { title: 'Research Centers', desc: 'Dedicated centers for advanced research in Sciences and Humanities.' },
        { title: 'Publications', desc: 'Faculty and student publications in reputed national and international journals.' },
        { title: 'Grants & Projects', desc: 'Ongoing research projects funded by UGC, DST, and other agencies.' },
        { title: 'Collaborations', desc: 'MoUs with industries and other academic institutions.' },
        { title: 'Student Research', desc: 'Encouraging research aptitude among PG and M.Phil scholars.' }
    ],
    studyCentres: [
        { title: 'Computer Center', icon: 'fas fa-desktop' },
        { title: 'Language Lab', icon: 'fas fa-headphones' },
        { title: 'Skill Development Center', icon: 'fas fa-tools' },
        { title: 'Career Guidance Cell', icon: 'fas fa-compass' },
        { title: 'Innovation Hub', icon: 'fas fa-lightbulb' }
    ],
    campusFacilities: [
        { title: 'Central Library', icon: 'fas fa-book' },
        { title: 'Sports Complex', icon: 'fas fa-running' },
        { title: 'Hostels', icon: 'fas fa-bed' },
        { title: 'Digital Labs', icon: 'fas fa-microchip' },
        { title: 'Cafeteria', icon: 'fas fa-coffee' }
    ],
    quickLinks: [
        { text: 'Apply Online', link: '#' },
        { text: 'Examination Results', link: '#' },
        { text: 'IQAC / NAAC', link: '#' },
        { text: 'Notifications', link: '#' },
        { text: 'Scholarships', link: '#' },
        { text: 'Alumni Association', link: '#' },
        { text: 'Contact Us', link: '#footer' }
    ],
    gallery: [
        { src: 'assets/images/entrence.jpg', caption: 'Main Entrance' },
        { src: 'assets/images/college2.jpg', caption: 'Campus View' },
        { src: 'assets/images/college3.jpg', caption: 'Academic Block' },
        { src: 'assets/images/culturals01.jpg', caption: 'Cultural Events' },
        { src: 'assets/images/college1.jpg', caption: 'Student Activities' },
        { src: 'assets/images/bcomcertificate.jpg', caption: 'Convocation' }
    ],
    faculty: {
        principal: {
            id: 'principal-1',
            name: 'Dr. P. Seenuvasa Kumaran',
            designation: 'Principal',
            qualifications: 'M.Sc., M.Phil., B.Ed., PGDCA, Ph.D.',
            department: 'administration',
            email: 'principal@sgacrmd.edu.in',
            phone: '+91-4567-220268',
            image: "assets/images/Principal_image.jpg",
            message: "Welcome to Sethupathy Government Arts College. Our mission is to provide accessible, high-quality education to all. We strive to create an environment that nurtures intellectual curiosity and social responsibility."
        }
    }
};

// ==========================================
// APP LOGIC
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    renderNavigation();
    renderCarousel();
    renderNewsTicker();
    renderOverview();
    renderAcademicPrograms();
    renderDepartments();
    renderResearchActivities();
    renderStudyCentres();
    renderCampusFacilities();
    renderPrincipalMessage();
    renderGalleryPreview();
    renderQuickLinks();
}

// 1. Navigation
function renderNavigation() {
    const navList = document.getElementById('main-nav');
    if (!navList) return;

    const links = [
        { text: 'Home', href: 'index.html', icon: 'fas fa-home' },
        { text: 'About Us', href: 'about.html', dropdown: ['History', 'Vision & Mission', 'Principal\'s Desk'], icon: 'fas fa-address-card' },
        { text: 'Departments', href: 'departments.html', icon: 'fas fa-book' },
        { text: 'Academics', href: 'academics.html', dropdown: ['UG Courses', 'PG Courses', 'Research'], icon: 'fas fa-graduation-cap' },
        { text: 'Faculty', href: 'faculty.html', icon: 'fas fa-users' },
        { text: 'Admissions', href: 'admissions.html', icon: 'fas fa-user-plus' },
        { text: 'Notifications', href: 'notifications.html', icon: 'fas fa-bell' },
        { text: 'IQAC/NAAC', href: 'iqac.html', icon: 'fas fa-award' },
        { text: 'Gallery', href: 'gallery.html', icon: 'fas fa-images' },
        { text: 'Contact', href: 'contact.html', icon: 'fas fa-envelope' }
    ];

    navList.innerHTML = links.map(link => {
        if (link.dropdown) {
            return `
                <li class="dropdown">
                    <a href="${link.href}">${link.icon ? `<i class="${link.icon}"></i> ` : ''}${link.text} <i class="fas fa-chevron-down"></i></a>
                    <div class="dropdown-menu">
                        ${link.dropdown.map(item => `<a href="#">${item}</a>`).join('')}
                    </div>
                </li>
            `;
        }
        return `<li><a href="${link.href}">${link.icon ? `<i class="${link.icon}"></i> ` : ''}${link.text}</a></li>`;
    }).join('');

    // Mobile Menu Toggle
    const toggleBtn = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (toggleBtn && mainNav) {
        toggleBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }
}

// 2. Carousel
function renderCarousel() {
    const container = document.getElementById('hero-carousel');
    const indicators = document.getElementById('carousel-indicators');

    if (!container) return;

    container.innerHTML = CONFIG.carousel.map((slide, index) => `
        <div class="carousel-slide ${index === 0 ? 'active' : ''}" style="background-image: url('${slide.src}')">
            <div class="overlay"></div>
            <div class="carousel-content">
                <h2>${slide.title}</h2>
                <p>${slide.desc}</p>
                <a href="${slide.buttonLink}" class="btn-primary">${slide.buttonText}</a>
            </div>
        </div>
    `).join('');

    if (indicators) {
        indicators.innerHTML = CONFIG.carousel.map((_, index) => `
            <div class="indicator ${index === 0 ? 'active' : ''}" onclick="moveSlide(${index})"></div>
        `).join('');
    }

    startCarousel();
}

let currentSlide = 0;
let slideInterval;

function startCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');

    if (slides.length === 0) return;

    function showSlide(index) {
        slides.forEach(s => s.classList.remove('active'));
        indicators.forEach(i => i.classList.remove('active'));

        currentSlide = (index + slides.length) % slides.length;

        slides[currentSlide].classList.add('active');
        if (indicators[currentSlide]) indicators[currentSlide].classList.add('active');
    }

    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');

    if (nextBtn) nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
    if (prevBtn) prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));

    slideInterval = setInterval(() => showSlide(currentSlide + 1), 5000);
}

// 3. News Ticker
function renderNewsTicker() {
    const ticker = document.getElementById('news-ticker');
    if (!ticker) return;
    ticker.innerHTML = `<div class="ticker-item">
        ${CONFIG.news.map(item => `<a href="${item.link}">${item.text}</a>`).join(' <span style="margin:0 10px; color:var(--accent-gold);">|</span> ')}
    </div>`;
}

// 4. Overview
function renderOverview() {
    const container = document.getElementById('college-overview');
    if (!container) return;
    const { text, vision, history } = CONFIG.overview;

    container.innerHTML = `
        <div class="col-md-6" style="padding: 20px; flex: 1; min-width: 300px;">
            <p style="font-size: 1.1rem; margin-bottom: 20px; text-align: justify;">${text}</p>
            <h4 style="color: var(--primary-blue); border-bottom: 2px solid var(--accent-gold); display: inline-block; margin-bottom: 10px;">Vision</h4>
            <p style="margin-bottom: 20px;">${vision}</p>
            <h4 style="color: var(--primary-blue); border-bottom: 2px solid var(--accent-gold); display: inline-block; margin-bottom: 10px;">History</h4>
            <p>${history}</p>
        </div>
        <div class="col-md-6" style="padding: 20px; flex: 1; min-width: 300px; display: flex; align-items: center;">
            <img src="assets/images/entrence.jpg" alt="College Entrance" style="width: 100%; border-radius: 5px; box-shadow: var(--shadow-md); border: 5px solid white;">
        </div>
    `;
}

// 5. Academic Programs
function renderAcademicPrograms() {
    const container = document.getElementById('academic-programs');
    if (!container) return;
    const { ug, pg, research } = CONFIG.academicPrograms;

    const createList = (items) => `<ul style="list-style: none; padding: 0;">${items.map(item => `<li style="padding: 5px 0; border-bottom: 1px solid #eee; font-size: 0.9rem;"><i class="fas fa-check-circle" style="color: var(--primary-blue); margin-right: 8px;"></i>${item}</li>`).join('')}</ul>`;

    container.innerHTML = `
        <div class="program-card" style="background: white; padding: 25px; border-radius: 5px; box-shadow: var(--shadow-sm); border-top: 4px solid var(--primary-blue);">
            <h3 style="color: var(--primary-blue); margin-bottom: 15px; font-size: 1.4rem;"><i class="fas fa-graduation-cap"></i> UG Programs</h3>
            ${createList(ug)}
        </div>
        <div class="program-card" style="background: white; padding: 25px; border-radius: 5px; box-shadow: var(--shadow-sm); border-top: 4px solid var(--accent-gold);">
            <h3 style="color: var(--primary-blue); margin-bottom: 15px; font-size: 1.4rem;"><i class="fas fa-user-graduate"></i> PG Programs</h3>
            ${createList(pg)}
        </div>
        <div class="program-card" style="background: white; padding: 25px; border-radius: 5px; box-shadow: var(--shadow-sm); border-top: 4px solid var(--primary-blue);">
            <h3 style="color: var(--primary-blue); margin-bottom: 15px; font-size: 1.4rem;"><i class="fas fa-microscope"></i> Research (Ph.D.)</h3>
            ${createList(research)}
        </div>
    `;

    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))';
    container.style.gap = '30px';
}

// 6. Departments
function renderDepartments() {
    const container = document.getElementById('departments-grid');
    if (!container) return;
    container.innerHTML = CONFIG.departments.map(dept => `
        <a href="${dept.link}" class="dept-card" style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 25px; background: white; border: 1px solid #eee; transition: all 0.3s ease; text-align: center; border-radius: 5px; box-shadow: var(--shadow-sm);">
            <div style="width: 60px; height: 60px; background: var(--light-bg); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 15px;">
                <i class="${dept.icon}" style="font-size: 1.8rem; color: var(--primary-blue);"></i>
            </div>
            <span style="font-weight: 700; color: var(--text-dark); font-size: 1rem; text-transform: uppercase;">${dept.name}</span>
        </a>
    `).join('');

    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(auto-fill, minmax(180px, 1fr))';
    container.style.gap = '20px';
}

// 7. Research Activities
function renderResearchActivities() {
    const container = document.getElementById('research-activities');
    if (!container) return;
    container.innerHTML = CONFIG.researchActivities.map(item => `
        <div class="research-item" style="margin-bottom: 20px; padding: 15px; background: white; border-left: 4px solid var(--accent-gold); box-shadow: var(--shadow-sm);">
            <h4 style="margin-bottom: 5px; font-size: 1.1rem; color: var(--primary-blue);">${item.title}</h4>
            <p style="font-size: 0.9rem; color: #555; margin: 0;">${item.desc}</p>
        </div>
    `).join('');
}

// 8. Study Centres
function renderStudyCentres() {
    const container = document.getElementById('study-centres');
    if (!container) return;
    container.innerHTML = CONFIG.studyCentres.map(center => `
        <div class="study-center-item" style="text-align: center; padding: 20px; background: white; border: 1px solid #eee; border-radius: 5px; transition: transform 0.3s;">
            <i class="${center.icon}" style="font-size: 2rem; color: var(--secondary-blue); margin-bottom: 10px;"></i>
            <h5 style="font-size: 0.95rem; margin: 0; font-weight: 600;">${center.title}</h5>
        </div>
    `).join('');

    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(auto-fill, minmax(140px, 1fr))';
    container.style.gap = '15px';
}

// 9. Campus Facilities
function renderCampusFacilities() {
    const container = document.getElementById('campus-facilities');
    if (!container) return;
    container.innerHTML = CONFIG.campusFacilities.map(facility => `
        <div class="facility-card" style="text-align: center; padding: 30px; background: white; box-shadow: var(--shadow-sm); border-radius: 5px; border-bottom: 3px solid transparent; transition: all 0.3s;">
            <i class="${facility.icon}" style="font-size: 2.5rem; color: var(--accent-gold); margin-bottom: 20px;"></i>
            <h4 style="color: var(--primary-blue); font-size: 1.2rem;">${facility.title}</h4>
        </div>
    `).join('');

    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
    container.style.gap = '30px';
}

// 10. Principal Message
function renderPrincipalMessage() {
    const container = document.getElementById('principal-message');
    if (!container) return;
    const p = CONFIG.faculty.principal;

    container.innerHTML = `
        <div style="flex: 0 0 200px;">
            <img src="${p.image}" alt="${p.name}" class="principal-large-img" style="width: 100%; border-radius: 5px; border: 1px solid #ddd; padding: 5px;">
        </div>
        <div class="message-content" style="flex: 1;">
            <h3 style="color: var(--primary-blue); margin-bottom: 5px;">${p.name}</h3>
            <div class="designation" style="color: #777; font-weight: 600; margin-bottom: 15px; text-transform: uppercase; font-size: 0.9rem;">${p.designation}</div>
            <p style="font-style: italic; color: #555; margin-bottom: 20px;">"${p.message}"</p>
            <div style="display: flex; gap: 20px; font-size: 0.9rem; color: var(--primary-blue);">
                <span><i class="fas fa-envelope"></i> ${p.email}</span>
                <span><i class="fas fa-phone"></i> ${p.phone}</span>
            </div>
        </div>
    `;
}

// 11. Gallery Preview
function renderGalleryPreview() {
    const container = document.getElementById('gallery-preview');
    if (!container) return;
    container.innerHTML = CONFIG.gallery.slice(0, 4).map(img => `
        <div class="gallery-item" style="height: 250px; overflow: hidden; border-radius: 5px; position: relative;">
            <img src="${img.src}" alt="${img.caption}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s;">
            <div style="position: absolute; bottom: 0; left: 0; width: 100%; background: rgba(0,0,0,0.7); color: white; padding: 10px; text-align: center; font-size: 0.9rem;">${img.caption}</div>
        </div>
    `).join('');
}

// 12. Quick Links
function renderQuickLinks() {
    const container = document.getElementById('quick-links');
    if (!container) return;
    container.innerHTML = CONFIG.quickLinks.map(link => `
        <li><a href="${link.link}" style="display: block; padding: 5px 0; border-bottom: 1px solid rgba(255,255,255,0.1); color: #ccc; transition: color 0.3s;"><i class="fas fa-angle-right" style="margin-right: 8px; color: var(--accent-gold);"></i>${link.text}</a></li>
    `).join('');
}
