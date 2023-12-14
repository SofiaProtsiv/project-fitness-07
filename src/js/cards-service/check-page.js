function checkPage(evt){
    evt.preventDefault();
    const {target} = evt;
    if (!target.classList.contains("js-pages")){
        const cardElement = target.closest('.exercise-cards__wrapper-page');
        return cardElement.dataset.page;
    }
}

export {checkPage};

