const cards = document.querySelector(".exercise-cards__wrapper");

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

export {addWorkoutClass, deleteWorkoutClass, addFavoriteClass, deleteFavoriteClass};