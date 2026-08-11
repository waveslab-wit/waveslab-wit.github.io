(function () {
  const menuButton = document.querySelector('.mobile-menu-button');
  const navList = document.querySelector('.nav-list');

  if (menuButton && navList) {
    menuButton.addEventListener('click', function () {
      const isOpen = navList.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-list a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage.includes('-template') && href === 'people.html')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  const year = document.querySelector('[data-current-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
