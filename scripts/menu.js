const nav = document.querySelector('nav');
const burger = document.getElementById('burger');

function setMenu(open) {
  nav.classList.toggle('open', open);
  document.body.classList.toggle('menu-open', open);       // stops the page scrolling behind the menu
  burger.setAttribute('aria-expanded', open);
  burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}

burger.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
document.querySelectorAll('#menu a').forEach(a => a.addEventListener('click', () => setMenu(false)));
addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
matchMedia('(min-width:901px)').addEventListener('change', e => { if (e.matches) setMenu(false); });