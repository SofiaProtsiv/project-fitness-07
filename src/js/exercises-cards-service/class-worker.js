const cards = document.querySelector(".exercise-cards__wrapper");
const emptyParag = document.querySelector(".exercise-cards__parag-empty");
const DEFAULT_STRING_FAVORITE = "It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.";
const DEFAULT_STRING = "Sorry, but we don`t have anything for you with such filter. Please try another search";

function addWorkoutClass(){
    cards.classList.add("workout-cards__wrapper");
}

function deleteWorkoutClass(){
    cards.classList.remove("workout-cards__wrapper");
}

function addFavoriteClass(){
    cards.classList.add("favorite-cards__wrapper");
}

function deleteFavoriteClass(){
    cards.classList.remove("favorite-cards__wrapper");
}

function hiddenEmptyParag(){
    emptyParag.classList.add("visually-hidden");
}

function unhiddenEmptyParag(){
    emptyParag.classList.remove("visually-hidden");
}

function addStringFavoriteParagEmpty(){
    emptyParag.innerHTML = DEFAULT_STRING_FAVORITE;
}
function addStringEmptyParag(){
    emptyParag.innerHTML = DEFAULT_STRING;
}
export {addWorkoutClass, deleteWorkoutClass, addFavoriteClass, deleteFavoriteClass, hiddenEmptyParag, unhiddenEmptyParag, addStringFavoriteParagEmpty, addStringEmptyParag};