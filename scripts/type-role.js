
document.addEventListener('DOMContentLoaded', () => {

    const roles = [
        { text: 'Web Developer', animation: 'jump' },
        { text: 'YouTuber', animation: 'float' },
        { text: 'Photographer', animation: 'jog' },
        { text: 'Video Editor', animation: 'twirl' }
    ];

    const typed = document.getElementById('typed');

    const reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
    ).matches;

    // Check required elements and library
    if (!typed || typeof Splitting === 'undefined') {
        console.error('Splitting.js or #typed element not found!');
        return;
    }

    let roleIndex = 0;

    function animateRole() {

        const currentRole = roles[roleIndex];

        // Remove previous animation
        typed.className = '';

        // Replace previous text and generated characters
        typed.textContent = currentRole.text;

        // Split text into individual characters
        Splitting({
            target: typed,
            by: 'chars'
        });

        // Apply animation class
        typed.classList.add(currentRole.animation);

        // Next role
        roleIndex = (roleIndex + 1) % roles.length;
    }

    // Initial role
    animateRole();

    // Respect accessibility preferences
    if (!reduceMotion) {
        setInterval(animateRole, 3000);
    }

});
