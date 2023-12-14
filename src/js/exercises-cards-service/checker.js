function checkCard(evt){
    evt.preventDefault();
    const {target} = evt;
    if (!target.classList.contains("js-cards")){
        const cardElement = target.closest('.exercise-cards__gallery-card');
        return cardElement.dataset.cardName;
    }
}

function checkPage(evt){
    evt.preventDefault();
    const {target} = evt;
    if (!target.classList.contains("js-pages")){
        const cardElement = target.closest('.exercise-cards__wrapper-page');
        return cardElement.dataset.page;
    }
}

function checkWorkoutCard(evt){
    evt.preventDefault();
    const {target} = evt;
    if (!target.classList.contains("js-cards")){
        const cardElement = target.closest('.workout-cards__gallery-card');
        console.log(cardElement.dataset.id);
        return cardElement.dataset.id;
    }
}

export {checkCard, checkPage, checkWorkoutCard};