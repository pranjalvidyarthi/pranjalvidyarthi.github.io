const items = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);   // animate only once
    }
  });
}, { threshold: 0.3});                  // trigger when 15% is visible

items.forEach(el => observer.observe(el));