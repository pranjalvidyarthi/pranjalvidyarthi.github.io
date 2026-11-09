/* ---------- Typing roles (Typed.js) ---------- */
const roles = ['Web Developer','YouTuber' ,'Photographer', 'Video Editor'];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reduce || typeof Typed === 'undefined') {
    // no animation (or library failed to load): just show the first role
    document.getElementById('typed').textContent = roles[0];
} else {
    new Typed('#typed', {
        strings: roles,
        typeSpeed: 80,        // ms per letter while typing
        backSpeed: 45,        // ms per letter while deleting
        startDelay: 500,
        backDelay: 1500,      // pause before deleting
        loop: true,
        cursorChar: '█',
        autoInsertCss: false  // we style the cursor ourselves
    });
}