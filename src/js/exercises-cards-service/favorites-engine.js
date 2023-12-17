// import { pageFilter,cardsHandler } from "./card-holder";

// export function startFavorite(){
//   if (window.location.href.includes("/favorite")){
//     pageFilter.endPoint = 1;
//     cardsHandler();
//   } else{
//     cardsHandler();
//   }
// }

import ApiService from '../api-service';
import { favoritesDB } from '../favoritesDB';
import { openModalExercise } from '../exercise-modal';
import { showFavoriteCards } from '../templates/exercise-cards';
import { addFavoriteClass, deleteWorkoutClass } from './class-worker';

const exercisesList = document.querySelector('.js-cards');

setFavoritesCards();

async function setFavoritesCards() {
  addFavoriteClass();
  deleteWorkoutClass();
  const data = await favoritesDB.get();
  showFavoriteCards(data);
}

if (exercisesList) {
  exercisesList.addEventListener('click', workoutHandler);
} else {
  console.error("Element with class 'js-cards' not found for workout.");
}

async function workoutHandler({ target }) {
  if (target.classList.contains('favorite-cards__icon-trash')) {
    removeElFromFavoritesOnTrashBtn(target);
    return;
  }

  const exerciseId = target.closest('li').dataset.id;
  if (!exerciseId) {
    return;
  }

  const apiService = new ApiService();

  try {
    apiService.id = exerciseId;
    const exercise = await apiService.fetchExerciseById();

    if (!exercise) {
      throw new Error('Exercise not found!');
    }

    openModalExercise(exercise);
  } catch (error) {
    console.error(error);
  }
}

async function removeElFromFavoritesOnTrashBtn(el) {
  const exerciseEl = el.closest('li');
  const exerciseID = exerciseEl.dataset.id;
  exerciseEl.closest('li').remove();
  favoritesDB.remove(exerciseID);
}

function removeElFromFavorites({ _id }) {
  const exerciseEl = document.querySelector(
    '.favorite-cards__gallery-link[data-id="' + _id + '"]'
  );
  exerciseEl.closest('li').remove();
}

export { removeElFromFavorites };
