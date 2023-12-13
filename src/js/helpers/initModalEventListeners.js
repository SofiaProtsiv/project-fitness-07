// all clickable elements that must open some modal window
const backdrop = document.querySelector('.js-backdrop');
const triggers = document.querySelectorAll('[data-modal]');

triggers.forEach(trigger => {
  trigger.addEventListener('click', handleOpen);
});

function handleOpen(event) {
  event.preventDefault();
  const { target } = event;
  const modal = document.getElementById(target.dataset.modal);
  backdrop.classList.add('open');
  modal.classList.add('open');
  // target.removeEventListener('click', handleOpen);
  document.body.style.overflow = 'hidden';

  const exits = modal.querySelectorAll('.js-modal-exit');
  exits.forEach(exit => {
    exit.addEventListener('click', handleClose.bind({ modal, backdrop }));
  });
}

function handleClose(event) {
  event.preventDefault();
  const { modal, backdrop } = this;
  backdrop.classList.remove('open');
  modal.classList.remove('open');
  // modal.removeEventListener('click', handleClose);
  // modal.addEventListener('click', handleOpen);

  document.body.style.overflow = 'visible';
}

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    handleClose();
  }
});
