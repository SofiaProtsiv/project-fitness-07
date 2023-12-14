function checkCard(evt){
    evt.preventDefault();
    const {target} = evt;
    if (!target.classList.contains("js-cards")){
        const cardElement = target.closest('.exercise-cards__gallery-card');

        return cardElement.dataset.cardName;
    }
}

export {checkCard};