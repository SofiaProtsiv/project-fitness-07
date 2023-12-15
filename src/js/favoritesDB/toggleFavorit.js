import { toggleFavoriteStatus } from '.';

// Приклад виклику функції

export const toggleFavorit = exercise => {
  const toggleClass = 'js-toggle-favorit';
  const toggleBtn = document.getElementById(toggleClass);

  toggleBtn.addEventListener('click', async event => {
    const isOK = await toggleFavoriteStatus(exercise);
    console.log(isOK);
    const text = !isOK ? 'Add to favorites' : 'Remove from favorites';
    const iconId = !isOK ? 'icon-heart' : 'icon-trash';

    toggleBtn.innerHTML = `<span id="js-toggle-favorit-text">${text}</span>
       <svg id="js-toggle-favorit-image" class="btn-icon">
            <use href="/images/icons-sprite.svg#${iconId}" />
          </svg>`;
  });
};
