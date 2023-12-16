import { toggleFavoriteStatus } from '.';

export const toggleFavorit = exercise => {
  const toggleID = 'js-toggle-favorit';
  const toggleBtn = document.getElementById(toggleID);

  const toggleFavoritEvent = toggleBtn.addEventListener(
    'click',
    async event => {
      const isOK = await toggleFavoriteStatus(exercise);

      const text = !isOK ? 'Add to favorites' : 'Remove from favorites';
      const iconId = !isOK ? 'icon-heart' : 'icon-trash';

      toggleBtn.innerHTML = `<span >${text}</span>
       <svg class="btn-icon">
            <use href="/images/icons-sprite.svg#${iconId}" />
          </svg>`;
    }
  );

  return toggleFavoritEvent;
};
