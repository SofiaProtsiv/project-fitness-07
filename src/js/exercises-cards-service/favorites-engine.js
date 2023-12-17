import { pageFilter,cardsHandler } from "./card-holder";
import ApiService from "../api-service";
import { favoritesDB } from "../favoritesDB";
import { openModalExercise } from "../modal/exercise-modal";

const exercisesList = document.querySelector('.js-cards');

export function startFavorite(){
  if (window.location.href.includes("/favorite")){
    pageFilter.endPoint = 1;
    cardsHandler();
  } else{
    cardsHandler();
  }
}

async function removeHandler({ target }){
  if (target.classList.contains("favorite-cards__icon-trash")) {
    removeElFromFavoritesOnTrashBtn(target)
    return;
  }

  const exerciseId = target.closest("li").dataset.id;;
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
  const exerciseEl = el.closest("li")
  const exerciseID = exerciseEl.dataset.id
  exerciseEl.closest("li").remove();
  favoritesDB.remove(exerciseID)
}

function removeElFromFavorites({ _id }) {
  const exerciseEl = document.querySelector('.favorite-cards__gallery-link[data-id="' + _id + '"]');
  exerciseEl.closest("li").remove();
}

if (exercisesList) {
  exercisesList.addEventListener('click', removeHandler);
} else {
  console.error("Element with class 'js-cards' not found for workout.");
}

export { removeElFromFavorites }