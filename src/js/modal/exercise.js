const modalRef = document.querySelector('.modalExercise');

const renderModal = () => {
  const markup = modalExercises();

  return `example`;
};

const testButton = parent => {
  const markup = '<button type="button">Open modal</button>';
};

const closeModal = () => {
  modalRef.classList.remove('open');
  closeButton.removeEventListener('click', closeModal);
  userButton.addEventListener('click', openModal);
  document.body.style.overflow = 'visible';
};

const openModal = () => {
  modalRef.classList.add('open');
  closeButton.addEventListener('click', closeModal);
  userButton.removeEventListener('click', openModal);
  document.body.style.overflow = 'hidden';
};

renderModal();
