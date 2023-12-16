export const getActiveLink = function () {
  const currentPage = window.location.pathname;

  if (currentPage === '/') return;

  const navLinks = document.querySelectorAll('.header__nav__link');

  navLinks.forEach(function (link) {
    const linkHref = link.getAttribute('href').split('./')[1];
    if (currentPage.includes(linkHref)) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
};
export const addTeamLink = function () {
  const currentPage = window.location.pathname;

  if (currentPage === '/team.html') {
    const navList = document.querySelector('.header__nav__list');
    const teamListItem = document.createElement('li');
    teamListItem.classList.add('header__nav__item');
    const teamLink = document.createElement('a');
    teamLink.classList.add('header__nav__link', 'active');
    teamLink.setAttribute('href', './team.html');
    teamLink.textContent = 'Team';
    teamListItem.appendChild(teamLink);
    navList.appendChild(teamListItem);
  }
};

export const toggleMobileMenu = function () {
  const burger = document.getElementById('MobileBTN');

  burger.addEventListener('click', function () {
    burger.classList.toggle('active');
  });
};
