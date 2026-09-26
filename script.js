const menuToggle = document.querySelector('.menu-toggle');
const navigationLinks = document.querySelector('.nav-links');

if (menuToggle && navigationLinks) {
  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isExpanded));
    navigationLinks.classList.toggle('is-open', !isExpanded);
  });

  navigationLinks.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      menuToggle.setAttribute('aria-expanded', 'false');
      navigationLinks.classList.remove('is-open');
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      menuToggle.setAttribute('aria-expanded', 'false');
      navigationLinks.classList.remove('is-open');
      menuToggle.focus();
    }
  });
}

const currentYear = document.querySelector('#current-year');
if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}