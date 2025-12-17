// ==========================================
// COMMON HEADER/FOOTER TEMPLATE
// ==========================================
// This file contains reusable HTML snippets for Google Translate and Accessibility

const GOOGLE_TRANSLATE_SCRIPT = `
<!-- Google Translate -->
<script type="text/javascript">
    function googleTranslateElementInit() {
        new google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: 'en,ta,hi,te,kn,ml',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element');
    }
</script>
<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
`;

const SKIP_LINK = `
<!-- Skip to Content Link for Accessibility -->
<a href="#main-content" class="skip-link">Skip to main content</a>
`;

const GOOGLE_TRANSLATE_WIDGET = `
<div id="google_translate_element" style="display: inline-block; margin-right: 15px;"></div>
`;

// Instructions for adding to HTML pages:
// 1. Add GOOGLE_TRANSLATE_SCRIPT to <head> section
// 2. Add SKIP_LINK right after <body> tag
// 3. Add GOOGLE_TRANSLATE_WIDGET to top-actions div in top-bar
// 4. Add aria-labels to all interactive elements
// 5. Add role attributes to semantic sections
// 6. Ensure all images have alt text
// 7. Add aria-current="page" to active navigation link
