// script.js
// Adding some interactivity for my D276 project using vanilla JS.

document.addEventListener('DOMContentLoaded', () => {
    // I learned about Intersection Observer to trigger CSS animations when scrolling
    // This watches elements and adds a class to them when they come into view
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.15 // trigger when 15% of the element is visible
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the class that triggers the CSS keyframe animation
                entry.target.classList.add('is-visible');
                
                // Stop observing once animated so it doesn't repeat
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Grab all the sections and cards I want to animate
    // I added slide-up or fade-in classes in the HTML for these
    const animatedElements = document.querySelectorAll('.slide-up, .fade-in, .content-section, .project-card');
    animatedElements.forEach(el => {
        // give everything a base class if it doesn't have one so it hides initially
        if (!el.classList.contains('slide-up') && !el.classList.contains('fade-in')) {
            el.classList.add('slide-up'); 
        }
        scrollObserver.observe(el);
    });

    // Console message to prove JS is working and for project requirements
    console.log('Welcome to my UVU Research Portfolio!');
    console.log('Built for D276 using vanilla HTML, CSS, and JS.');
});
