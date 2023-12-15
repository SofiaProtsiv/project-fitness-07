import { toggleFavoriteStatus } from '.';

const BASE_URL = import.meta.env.BASE_URL;

// Приклад виклику функції
export const toggleFavorit = exercise => {
  const toggleClass = 'js-toggle-favorit';
  const toggleBtn = document.getElementById(toggleClass);

  toggleBtn.addEventListener('click', async event => {
    const isOK = await toggleFavoriteStatus(exercise);
    console.log(isOK);
    const text = !isOK ? 'Add to favorites' : 'Remove from favorites';
    const iconId = !isOK ? 'icon-heart' : 'icon-trash';

    toggleBtn.innerHTML = `<span>${text}</span>
       <svg class="btn-icon">
            <use href="${BASE_URL}images/icons-sprite.svg#${iconId}" />
          </svg>`;
  });
};
