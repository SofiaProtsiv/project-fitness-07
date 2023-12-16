import ApiService from "../api-service";
import { favoritesDB } from "../favoritesDB";
import { openModalExercise } from "../modal/exercise-modal";
import { showFavoriteCards} from "../templates/exercise-cards";
import { addFavoriteClass, deleteWorkoutClass, } from "./class-worker";

  const exercisesList =  document.querySelector('.js-cards');
  
setFavoritesCards()

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

  async function workoutHandler(evt) {
    const exerciseId = evt.target.closest("li").dataset.id;;
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