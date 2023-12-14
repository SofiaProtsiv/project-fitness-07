export const mobileToggle = function () {
  const refs = {
    toggleMobileMenuBTN: document.querySelector('[data-mobile-menu-btn]'),
    bodyAddClass: document.querySelector('body'),
    mobileMenu: document.querySelector('[data-mobile-menu]'),
    mobileMenuContent: document.querySelector('[data-mobile-menu-content]'),
  };

  refs.toggleMobileMenuBTN.addEventListener('click', toggleMobileMenu);
  refs.mobileMenu.addEventListener('click', toggleMobileMenu);
  refs.mobileMenuContent.addEventListener('click', function (event) {
    event.stopPropagation();
  });
  refs.closeLink.forEach(link => {
    link.addEventListener('click', toggleMobileMenu);
  });

  function toggleMobileMenu() {
    refs.bodyAddClass.classList.toggle('is-hidden');
    refs.mobileMenu.classList.toggle('is-hidden');
  }
};
