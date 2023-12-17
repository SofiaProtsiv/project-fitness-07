import { toggleFavoriteStatus } from '.';
import { removeElFromFavorites } from '../exercises-cards-service/favorite-service';
import { closeModalExercise } from '../modal/exercise-modal';

export const toggleFavorit = exercise => {
  const toggleID = 'js-toggle-favorit';
  const toggleFavoritBtn = document.getElementById(toggleID);

  if (!toggleFavoritBtn) return;

  const toggleFavoritEvent = toggleFavoritBtn.addEventListener(
    'click',
    async event => {
      const whereIsAddToFavorit = await toggleFavoriteStatus(exercise);
      reRenderFavoritToggleBtn(whereIsAddToFavorit, toggleFavoritBtn);
    
      if (window.location.pathname.includes("favorites")) {
        closeModalExercise()
        removeElFromFavorites(exercise)
      }
    }
  );

  return toggleFavoritEvent;
};

const reRenderFavoritToggleBtn = (whereIsAddToFavorit, toggleFavoritBtn) => {
  const BASE_URL = import.meta.env.BASE_URL;

  const text = !whereIsAddToFavorit
    ? 'Add to favorites'
    : 'Remove from favorites';
  const iconId = !whereIsAddToFavorit ? 'icon-heart' : 'icon-trash';

  toggleFavoritBtn.innerHTML = `<span >${text}</span>
       <svg class="btn-icon">
            <use href="${BASE_URL}images/icons-sprite.svg#${iconId}" />
          </svg>`;
};