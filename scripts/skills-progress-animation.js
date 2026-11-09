  const skills = document.querySelectorAll('.skill');
 
  function animate(skill) {
    const level = Number(skill.dataset.level);
    const fill = skill.querySelector('.fill');
    const num = skill.querySelector('.num');
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
 
    fill.style.width = (level * 10) + '%';
 
    if (reduce) { num.textContent = level; return; }
 
    const duration = 1600, start = performance.now();
    (function tick(now) {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      num.textContent = (level * eased).toFixed(t < 1 ? 1 : 0);
      if (t < 1) requestAnimationFrame(tick);
    })(start);
  }
 
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (!entry.isIntersecting) return;
      setTimeout(() => animate(entry.target), i * 150);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.4 });
 
  skills.forEach(s => observer.observe(s));
