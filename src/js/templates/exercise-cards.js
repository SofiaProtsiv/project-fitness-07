const cards = document.querySelector('.js-cards');
const BASE_URL = import.meta.env.BASE_URL;

function showInitialCards(data) {
  const initialCardsLayout = data
    .map(
      ({ filter, name, imgURL }) =>
        `
        <a class="exercise-cards__gallery-link js-card" data-card-name="${name}" href="">
            <div class="exercise-cards__gallery-card">
                <div class="exercise-cards__gradient"></div>
                <img class="exercise-cards__gallery-image"  src="${imgURL}" alt="${
          filter + '-' + name
        }" loading="lazy" />
                <div class="exercise-cards__gallery-info">
                    <h3 class="exercise-cards__head3-name">${name}</h3>
                    <p class="exercise-cards__parag-filter">${filter}</p>
                </div>
            </div>
        </a>
        `
    )
    .join('');

  cards.insertAdjacentHTML('beforeend', initialCardsLayout);
}

function showWorkoutCards(data) {
  const workoutCardsLayout = data
    .map(
      ({ _id, bodyPart, name, target, burnedCalories, time, rating }) =>
        `
        <a class="workout-cards__gallery-link js-workout-card" data-id="${_id}"  href="">
            <div class="workout-cards__gallery-card" >
                <div class="workout-cards__first-line-wrapper">
                    <p class="workout-cards__parag-workout">Workout</p>
                    <p class="workout-cards__parag-rating">${
                      Math.round(rating * 10) / 10
                    }</p>
                    <svg class="workout-cards__icon-star">
                        <use href="${BASE_URL}images/icons-sprite.svg#icon-star"></use>
                    </svg>
                    <p class="workout-cards__parag-start">Start</p>
                    <svg class="workout-cards__icon-arrow-up">
                        <use href="${BASE_URL}images/icons-sprite.svg#icon-arrow-up"></use>
                    </svg>
                </div>
                <div class="workout-cards__second-line-wrapper">
                    <div class="workout-cards__wrapper-icon-running-stick">
                        <svg class="workout-cards__icon-running-stick">
                            <use href="${BASE_URL}images/icons-sprite.svg#icon-running-stick"></use>
                        </svg>
                    </div>
                    <h3 class="workout-cards__head3-name">${name}</h3>
                </div>
                <div class="workout-cards__third-line-wrapper">
                    <p class="workout-cards__parag-burned-calories">Burned calories:</p>
                    <p class="workout-cards__parag-burned-calories-result">${burnedCalories} / ${time} min<p>
                    <p class="workout-cards__parag-body-part">Body part:</p>
                    <p class="workout-cards__parag-body-part-result">${bodyPart}<p>
                    <p class="workout-cards__parag-target">Target:</p>
                    <p class="workout-cards__parag-target-result">${target}<p>
                </div>
            </div>
        </a>
        `
    )
    .join('');

  cards.insertAdjacentHTML('beforeend', workoutCardsLayout);
}

function showFavoriteCards(data) {
  const favoriteCardsLayout = data
    .map(
      ({ _id, bodyPart, name, target, burnedCalories, time }) =>
        `
        <a class="favori-cards__gallery-link" href="">
            <div class="favorite-cards__gallery-card" data-id="${_id}">
                <div class="favorite-cards__first-line-wrapper">
                    <p class="favorite-cards__parag-workout">favorite</p>
                    <svg class="favorite-cards__icon-trash">
                        <use href="${BASE_URL}images/icons-sprite.svg#icon-trash"></use>
                    </svg>
                    <p class="favorite-cards__parag-start">Start</p>
                    <svg class="favorite-cards__icon-arrow-up">
                        <use href="${BASE_URL}images/icons-sprite.svg#icon-arrow-up"></use>
                    </svg>
                </div>
                <div class="favorite-cards__second-line-wrapper">
                    <svg class="favorite-cards__icon-running-stick">
                        <use href="${BASE_URL}images/icons-sprite.svg#icon-running-stick"></use>
                    </svg>
                    <h3 class="favorite-cards__head3-name">${name}</h3>
                </div>
                <div class="favorite-cards__third-line-wrapper">
                    <p class="favorite-cards__parag-burned-calories">
                    Burned calories: <span class="favorite-cards__span-text">${burnedCalories} / ${time} min<span></p>
                    <p class="favorite-cards__parag-body-part">
                    Body part: <span class="favorite-cards__span-text">${bodyPart} min<span></p>
                    <p class="favorite-cards__parag-target">
                    Target: <span class="favorite-cards__span-text">${target} min<span></p>
                </div>
            </div>
        </a>
        `
    )
    .join('');

  cards.insertAdjacentHTML('beforeend', favoriteCardsLayout);
}

function cleanerCardWrapper() {
  cards.innerHTML = '';
}

export {
  showInitialCards,
  showWorkoutCards,
  showFavoriteCards,
  cleanerCardWrapper,
};
