import { toggleFavoriteStatus } from '.';
import { btnBoxRender } from '../modal/exercise-modal';

// Приклад виклику функції
export const toggleFavorit = exercise => {
  const toggleClass = 'js-toggle-favorit';
  const toggleBtn = document.getElementById(toggleClass);

  toggleBtn.addEventListener('click', handleToggleFavorite);
};

const handleToggleFavorite = async event => {
  try {
    const isFavorite = await toggleFavoriteStatus(exercise);
    console.log(isFavorite);
    if (isFavorite) {
      btnBoxRender(isFavorite);
    }
  } catch (error) {
    console.error(error);
  }
};
