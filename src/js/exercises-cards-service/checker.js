function checkCard(evt){
    evt.preventDefault();
    const {target} = evt;
    if (target.classList.contains("js-cards")){
        return;
    }
    const cardElement = target.closest('.js-card');
    return cardElement.dataset.cardName;
}

function checkPage(evt){
    evt.preventDefault();
    const {target} = evt;
    if (!target.classList.contains("js-page")){
        return;
    }
    const cardElement = target.closest('.js-page');
    return cardElement.dataset.page;
}

function checkWorkoutCard(evt){
    // evt.preventDefault();
    const {target} = evt;
    if (target.classList.contains("js-cards")){
        return;
    }
    const cardElement = target.closest('.js-workout-card');
    return cardElement.dataset.id;
}

export {checkCard, checkPage, checkWorkoutCard};