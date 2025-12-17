document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // CONFIGURATION LOADED FROM config.js
    // ==========================================

    const carouselData = CONFIG.carousel;
    const newsData = CONFIG.news;
    const galleryData = CONFIG.gallery;


    // === Dynamic Carousel Rendering ===
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselIndicators = document.querySelector('.carousel-indicators');

    if (carouselContainer && carouselData.length > 0) {
        // Clear existing static content if any (except controls)
        const controls = carouselContainer.querySelectorAll('.carousel-control, .carousel-indicators');
        carouselContainer.innerHTML = '';

        // Re-add controls container
        const prevBtn = document.createElement('button');
        prevBtn.className = 'carousel-control prev';
        prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';

        const nextBtn = document.createElement('button');
        nextBtn.className = 'carousel-control next';
        nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';

        const indicators = document.createElement('div');
        indicators.className = 'carousel-indicators';

        carouselContainer.appendChild(prevBtn);
        carouselContainer.appendChild(nextBtn);
        carouselContainer.appendChild(indicators);

        // Render Slides
        carouselData.forEach((item, index) => {
            const slide = document.createElement('div');
            slide.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
            slide.style.backgroundImage = `url('${item.src}')`;

            slide.innerHTML = `
                <div class="overlay"></div>
                <div class="carousel-content">
                    <h2>${item.title}</h2>
                    <p>${item.desc}</p>
                    <a href="admissions.html" class="btn-primary">Apply Now</a>
                </div>
            `;

            // Insert before controls
            carouselContainer.insertBefore(slide, prevBtn);

            // Render Indicators
            const dot = document.createElement('div');
            dot.className = `indicator ${index === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => {
                showSlide(index);
                startSlideTimer();
            });
            indicators.appendChild(dot);
        });

        // Initialize Carousel Logic
        initCarousel();
    }

    // === Dynamic News Ticker ===
    const tickerContent = document.querySelector('.ticker-content');
    if (tickerContent && newsData.length > 0) {
        tickerContent.innerHTML = ''; // Clear static
        const tickerItem = document.createElement('div');
        tickerItem.className = 'ticker-item';

        // Join news items with a separator
        const newsHTML = newsData.map(item =>
            `<a href="${item.link}">${item.text}</a>`
        ).join(' &nbsp;&nbsp; | &nbsp;&nbsp; ');

        tickerItem.innerHTML = newsHTML;
        tickerContent.appendChild(tickerItem);
    }

    // === Carousel Logic (Vertical Slide) ===
    function initCarousel() {
        const slides = document.querySelectorAll('.carousel-slide');
        const dots = document.querySelectorAll('.indicator');
        const prevBtn = document.querySelector('.prev');
        const nextBtn = document.querySelector('.next');
        let currentSlide = 0;
        let slideInterval;

        function showSlide(index) {
            // Handle wrapping
            let nextIndex = index;
            if (index >= slides.length) nextIndex = 0;
            else if (index < 0) nextIndex = slides.length - 1;

            // Determine direction for animation (simple logic: next goes down, prev goes up)
            // For "Down from Up" effect, we can manage classes
            slides.forEach(slide => {
                slide.classList.remove('active');
                slide.style.zIndex = 1;
            });
            dots.forEach(dot => dot.classList.remove('active'));

            slides[nextIndex].classList.add('active');
            slides[nextIndex].style.zIndex = 2;
            dots[nextIndex].classList.add('active');

            currentSlide = nextIndex;
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }

        function startSlideTimer() {
            stopSlideTimer();
            slideInterval = setInterval(nextSlide, 5000);
        }

        function stopSlideTimer() {
            clearInterval(slideInterval);
        }

        // Event Listeners
        if (nextBtn) nextBtn.addEventListener('click', () => {
            nextSlide();
            startSlideTimer();
        });

        if (prevBtn) prevBtn.addEventListener('click', () => {
            prevSlide();
            startSlideTimer();
        });

        startSlideTimer();
    }

    // === Mobile Menu Toggle ===
    const mobileBtn = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (mobileBtn && mainNav) {
        mobileBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            const icon = mobileBtn.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // === Mobile Dropdown Toggle ===
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });

    // === Stats Counter Animation ===
    const statsSection = document.querySelector('.stats-section');
    const counters = document.querySelectorAll('.count');
    let started = false;

    function startCounter(counter) {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 100;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => startCounter(counter), 20);
        } else {
            counter.innerText = target;
        }
    }

    if (statsSection && counters.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !started) {
                counters.forEach(counter => startCounter(counter));
                started = true;
            }
        }, { threshold: 0.5 });

        observer.observe(statsSection);
    }

    // === Scroll to Top ===
    const scrollToTopBtn = document.getElementById('scrollToTop');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // === Lightbox Logic (for Gallery Page) ===
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (galleryItems.length > 0) {
        // Create Modal
        const modal = document.createElement('div');
        modal.className = 'lightbox-modal';
        modal.innerHTML = `
            <div class="lightbox-content">
                <span class="lightbox-close">&times;</span>
                <img src="" alt="Gallery Image">
            </div>
        `;
        document.body.appendChild(modal);

        const modalImg = modal.querySelector('img');
        const closeBtn = modal.querySelector('.lightbox-close');

        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const imgSrc = item.querySelector('img').src;
                modalImg.src = imgSrc;
                modal.classList.add('active');
            });
        });

        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }

    // === Google Translate Styling Fix ===
    setInterval(() => {
        const googleFrame = document.querySelector('.goog-te-menu-frame');
        if (googleFrame) {
            // Apply custom styles if needed
        }
    }, 1000);

});
