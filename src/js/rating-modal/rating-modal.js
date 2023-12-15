const modalConfig = {
    ratingText : "Rating",
    iconStar : '/images/icons-sprite.svg#icon-star',
    ratingMax : 5,
    closeKeyBoardBtn : "Escape"
}

const feedbackForm = document.querySelector("form.feedback");
const rootRatingModal = document.querySelector(".rating-modal-window");
const closeBtn = document.querySelector(".rating-close");

const createRatingMarkup = () => {
    const starsArray = [];

    for(let count = 0; count < modalConfig.ratingMax; count++) {
        let starIndex = modalConfig.ratingMax - count;
        starsArray.push(`
        <input type="radio" class="visually-hidden" id="star${starIndex}" name="rating" value="${starIndex}">
        <label class="rating-star" for="star${starIndex}">
            <svg class="rating-star-icon">
                <use href=${modalConfig.iconStar} />
            </svg>
        </label>
        `);
    }
    return `
    <div class="rating-wrapper">
        <p class="rating-text">${modalConfig.ratingText}</p>
        <div class="rating-stars">
            ${ starsArray.join("") }
            <p class="rating-count">0.0</p>
        </div>
    </div>
    `
}

const handleClose = (event) => {
    if (event.key === modalConfig.closeKeyBoardBtn) {
        closeRatingModal();
    }
}

const handleRatingChange = (event) => {
    ratingCount.innerHTML = event.target.value;
}

feedbackForm.insertAdjacentHTML('afterbegin', createRatingMarkup());
const ratingInputs = document.querySelectorAll('.rating-stars input');
const ratingCount = document.querySelector('.rating-count');

const closeRatingModal = () => {
    ratingInputs.forEach(input => {
        input.removeEventListener('change', handleRatingChange);
    });

    rootRatingModal.classList.remove('open');
    document.body.style.overflow = 'visible';
    document.removeEventListener('keydown', handleClose);
}
  
const openRatingModal = () => {
    rootRatingModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleClose);
    ratingInputs.forEach(input => {
        input.addEventListener('change', handleRatingChange);
    });
}

closeBtn.addEventListener('click', closeRatingModal);

rootRatingModal.addEventListener('click', e => {
    if(e.target === rootRatingModal) {
        closeRatingModal();
    }
});

openRatingModal();
