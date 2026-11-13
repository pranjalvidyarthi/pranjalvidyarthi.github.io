
(() => {
  'use strict';

  /* ================================
     SKILL PROGRESS ANIMATION
  ================================= */

  const skillElements = document.querySelectorAll(
    '#skills .skill'
  );

  if (!skillElements.length) return;

  const motionPreference = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  );

  const DURATION = 1600;


  /* ================================
     ANIMATE INDIVIDUAL SKILL
  ================================= */

  function animateSkill(skill) {

    const level = Number(skill.dataset.level);

    const circle = skill.querySelector('.skill-circle');
    const counter = skill.querySelector('.num');

    // Validate elements and skill level
    if (
      !circle ||
      !counter ||
      !Number.isFinite(level) ||
      level < 0 ||
      level > 10
    ) {
      return;
    }

    const targetProgress = (level / 10) * 100;

    const finalScore = Number.isInteger(level)
      ? String(level)
      : level.toFixed(1);


    // Handle reduced motion
    if (motionPreference.matches) {

      circle.style.setProperty(
        '--progress',
        `${targetProgress}%`
      );

      counter.textContent = finalScore;

      return;
    }


    /* ================================
       ANIMATION FRAME
    ================================= */

    const startTime = performance.now();

    function updateProgress(currentTime) {

      const elapsed = currentTime - startTime;

      const progress = Math.min(
        elapsed / DURATION,
        1
      );

      // Cubic ease-out
      const easedProgress = 1 - Math.pow(
        1 - progress,
        3
      );

      // Update circular ring
      const currentProgress =
        targetProgress * easedProgress;

      circle.style.setProperty(
        '--progress',
        `${currentProgress}%`
      );


      // Update numerical counter
      const currentScore = level * easedProgress;

      counter.textContent = progress < 1
        ? currentScore.toFixed(1)
        : finalScore;


      // Continue until animation completes
      if (progress < 1) {
        requestAnimationFrame(updateProgress);
      }

    }

    requestAnimationFrame(updateProgress);

  }


  /* ================================
     INTERSECTION OBSERVER
  ================================= */

  const skillObserver = new IntersectionObserver(

    (entries, observer) => {

      entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        animateSkill(entry.target);

        // Animate only once
        observer.unobserve(entry.target);

      });

    },

    {
      threshold: 0.4
    }

  );


  /* ================================
     OBSERVE SKILL ELEMENTS
  ================================= */

  skillElements.forEach(skill => {
    skillObserver.observe(skill);
  });


  /* ================================
     HANDLE MOTION PREFERENCE CHANGES
  ================================= */

  // If reduced motion becomes enabled while
  // the page is open, finish visible animations.

  motionPreference.addEventListener('change', event => {

    if (!event.matches) return;

    skillElements.forEach(skill => {

      const circle = skill.querySelector('.skill-circle');
      const counter = skill.querySelector('.num');

      if (!circle || !counter) return;

      const level = Number(skill.dataset.level);

      if (!Number.isFinite(level)) return;

      circle.style.setProperty(
        '--progress',
        `${(level / 10) * 100}%`
      );

      counter.textContent = Number.isInteger(level)
        ? String(level)
        : level.toFixed(1);

    });

  });

})();
