// scripts.js
// Adding some interactivity for my D276 project using vanilla JS.

document.addEventListener('DOMContentLoaded', () => {

    // ─── Scroll Animation ────────────────────────────────────────────────────
    // Uses Intersection Observer to trigger CSS animations when elements scroll into view.
    const observerOptions = {
        root: null,       // viewport
        rootMargin: '0px',
        threshold: 0.15   // trigger when 15% of the element is visible
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // stop watching once animated
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.slide-up, .fade-in, .content-section, .project-card');
    animatedElements.forEach(el => {
        if (!el.classList.contains('slide-up') && !el.classList.contains('fade-in')) {
            el.classList.add('slide-up');
        }
        scrollObserver.observe(el);
    });

    // ─── Light / Dark Mode Toggle ─────────────────────────────────────────────
    const toggleBtn  = document.getElementById('theme-toggle');

    // Helper: apply a theme to the page and update the button label
    function applyTheme(isLight) {
        if (isLight) {
            document.body.classList.add('light-mode');
            toggleBtn.textContent = 'Dark';
        } else {
            document.body.classList.remove('light-mode');
            toggleBtn.textContent = 'Light';
        }
    }

    // Load saved preference from localStorage (default: light)
    const savedTheme = localStorage.getItem('theme');
    applyTheme(savedTheme !== 'dark');

    // Toggle on click and save preference
    toggleBtn.addEventListener('click', () => {
        const goingLight = !document.body.classList.contains('light-mode');
        applyTheme(goingLight);
        localStorage.setItem('theme', goingLight ? 'light' : 'dark');
    });

    // ─── Console message ──────────────────────────────────────────────────────
    console.log('Welcome to my UVU Research Portfolio!');
    console.log('Built for D276 using vanilla HTML, CSS, and JS.');
});
