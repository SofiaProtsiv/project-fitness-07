export const getActiveLink = function () {
  const currentPage = window.location.pathname;

  if (currentPage === '/') return;

  const navLinks = document.querySelectorAll('.header__nav__link');

  navLinks.forEach(function (link) {
    const linkHref = link.getAttribute('href').split('./')[1];
    if (currentPage.includes(linkHref)) {
      link.parentNode.classList.add('active');
    } else {
      link.parentNode.classList.remove('active');
    }
  });
};

export const toggleMobileMenu = function () {
  const burger = document.getElementById('MobileBTN');

  burger.addEventListener('click', function () {
    burger.classList.toggle('active');
  });
};
