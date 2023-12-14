import { showModal } from '../modal/exercise';

const backdrop = document.querySelector('.js-backdrop');
const btnOpenModalExerciseRef = document.querySelector('[data-modal]');

btnOpenModalExerciseRef.addEventListener('click', event => {
  showModal();
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    handleClose();
  }
});
