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


export const getActiveLink = function () {
  const currentPage = window.location.pathname;
  const favoritesLink = document.querySelector('#favorites');
  const homeLink = document.querySelector('#home');
const nav = document.querySelector(".header__nav")
  if (currentPage.includes('team.html')) {
    nav.style.display = "none"
  //   const navList = document.querySelector('.header__nav__list');
  //   const teamListItem = document.createElement('li');
  //   teamListItem.classList.add('header__nav__item');
  //   const teamLink = document.createElement('a');
  //   teamLink.classList.add('header__nav__link', 'active');
  //   teamLink.setAttribute('href', './team.html');
  //  teamLink.textContent = 'Team';
  //   teamListItem.appendChild(teamLink);
  //   navList.appendChild(teamListItem);
  } else if (currentPage.includes('favorites.html')) {
    favoritesLink.classList.add('active');
    homeLink.classList.remove('active');
  } else {
    homeLink.classList.add('active');
    favoritesLink.classList.remove('active');
  }
};