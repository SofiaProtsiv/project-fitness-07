const scrollupBtn = document.querySelector('.scrollup__btn');

const scrollBtnDisplay = function () {
  !window.scrollY
    ? scrollupBtn.classList.add('visually-hidden')
    : scrollupBtn.classList.remove('visually-hidden');
};

window.addEventListener('scroll', scrollBtnDisplay);

scrollupBtn.addEventListener('click', handlerScrollupBtnClick);

function handlerScrollupBtnClick() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
