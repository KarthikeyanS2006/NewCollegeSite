// common.js - shared utilities
// View count tracking (total across site)
(function () {
    const VIEW_KEY = 'site_total_views';
    let total = parseInt(localStorage.getItem(VIEW_KEY) || '0', 10);
    total += 1;
    localStorage.setItem(VIEW_KEY, total);
    // Update footer element if exists
    document.addEventListener('DOMContentLoaded', function () {
        const el = document.getElementById('total-views');
        if (el) { el.textContent = total; }
        // Highlight active nav link based on URL
        const path = window.location.pathname.split('/').pop();
        const navLinks = document.querySelectorAll('#main-nav a');
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href === path) {
                link.classList.add('active');
            }
        });
    });
})();

// Google Translate initialization
function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element');
}
