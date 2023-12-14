import {
  strCapitalizeAllFirstChar,
  strCapitalizeSentence,
  strSplitCamelCase,
} from '../helpers/stringHelper';

const backdropRef = document.querySelector('.js-backdrop');
const modalRef = document.querySelector('.modalExercise');
const closeButtonRef = modalRef.querySelector('.x-button');
const imgWrapperRef = modalRef.querySelector('.modalExercise__img-wrapper');
const contentWrapperRef = modalRef.querySelector('.exercise-content');
const buttonBoxRef = modalRef.querySelector('.button-box');

const MAX_RATING = 5;

const renderModal = exercise => {
  const { gifUrl, name, rating, isFavorite, description } = exercise;
  const details = getDetails(exercise);
  // media
  imgWrapperRef.innerHTML = '';
  imgWrapperRef.insertAdjacentHTML('afterbegin', markupMedia(gifUrl, name));
  // title
  contentWrapperRef.innerHTML = '';
  contentWrapperRef.insertAdjacentHTML('beforeend', markupTitle(name));
  // rating
  contentWrapperRef.insertAdjacentHTML('beforeend', markupRating(rating));
  // details
  contentWrapperRef.insertAdjacentHTML('beforeend', markupDetails(details));
  // description
  contentWrapperRef.insertAdjacentHTML(
    'beforeend',
    markupDescription(description)
  );
  // buttons
  buttonBoxRef.innerHTML = '';
  isFavorite
    ? buttonBoxRef.insertAdjacentHTML('beforeend', markupRemoveFavoritesBtn())
    : buttonBoxRef.insertAdjacentHTML('beforeend', markupAddFavoritesBtn());
  buttonBoxRef.insertAdjacentHTML('beforeend', markupGiveRatingBtn());
};

const getDetails = exercise => ({
  bodyPart: exercise.bodyPart,
  equipment: exercise.equipment,
  rating: exercise.rating,
  burnedCalories: exercise.burnedCalories,
  time: exercise.time,
  popular: exercise.popularity,
});

const markupTitle = title => {
  return `
    <h3 class="title">${strCapitalizeAllFirstChar(title)}</h3>
  `;
};

const markupRating = rating => {
  const markup = [];
  const value = Math.round(rating * 10) / 10;
  markup.push(`<li class="rating__item value">${value}</li>`);

  for (let i = 1; i <= MAX_RATING; i++) {
    markup.push(`
    <li class="rating__item">
      <svg class=" icon-star_filled">
        <use shref="/images/icons-sprite.svg#icon-star" />
      </svg>
    </li>
    `);
  }

  return `<ul class="rating">${markup.join('')}</ul>`;
};

const markupMedia = (url, alt) => {
  return `
    <img src="${url}" alt="${alt}"/>
  `;
};

const markupDetails = ({ burnedCalories, time, ...rest }) => {
  const markup = [];
  for (const [key, value] of Object.entries(rest)) {
    const splitKey = strSplitCamelCase(key);
    const keyName = strCapitalizeSentence(splitKey);
    markup.push(`
      <li class="exercise_details-item">
        <p class="detail-name">${keyName}</p>
        <p class="detail-value">${value}</p>
      </li>
    `);
  }

  markup.push(`
      <li class="exercise_details-item">
        <p class="detail-name">Burned Calories</p>
        <p class="detail-value">${burnedCalories}/${time} min</p>
      </li>
  `);

  return `<ul class="exercise_details">${markup.join('')}</ul>`;
};

const markupDescription = text => {
  return `
    <p class="exercise_description">${text}</p>

  `;
};

const markupAddFavoritesBtn = () =>
  markupButton({
    text: 'Add to favorites',
    iconId: 'icon-heart',
  });

const markupRemoveFavoritesBtn = () =>
  markupButton({
    text: 'Remove from favorites',
    iconId: 'icon-trash',
  });

const markupGiveRatingBtn = () =>
  markupButton({
    text: 'Give a rating',
    className: 'ghost',
  });

const markupButton = ({ text, iconId, className = '' }) => `
  <button type="button" class="js-favorites button ${className}">
      <span>${text}</span>
      ${
        iconId
          ? `<svg class="btn-icon">
            <use href="/images/icons-sprite.svg#${iconId}" />
          </svg>`
          : ''
      }
    </button>
`;

export const closeModalExercise = () => {
  backdropRef.classList.remove('open');
  modalRef.classList.remove('open');
  closeButtonRef.removeEventListener('click', closeModalExercise);
  document.body.style.overflow = 'visible';
};

const openModalExercise = exercise => {
  renderModal(exercise);
  backdropRef.classList.add('open');
  modalRef.classList.add('open');
  closeButtonRef.addEventListener('click', closeModalExercise);
  document.body.style.overflow = 'hidden';
};

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModalExercise();
  }
});

backdropRef.addEventListener('click', event => {
  if (event.target === backdropRef) {
    closeModalExercise();
  }
});

// TODO: remove lines
// ! --------------------------------- Testing -------------------------------- */

const navHeaderUsername = document.querySelector('.header__user');

const markupTestBtn = `
  <button class="button" type="button" data-modal="modal-exercise">
    Show exercise
  </button>`;

navHeaderUsername.insertAdjacentHTML('beforeend', markupTestBtn);

const btnOpenModalExerciseRef = document.querySelector('[data-modal]');

const exercise = {
  _id: '64f389465ae26083f39b17a2',
  bodyPart: 'waist',
  equipment: 'body weight',
  gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0001.gif',
  name: '3/4 sit-up',
  target: 'abs',
  description:
    "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.",
  rating: 3.61,
  burnedCalories: 220,
  time: 3,
  popularity: 8322,
  isFavorite: true,
};

export const showModal = () => {
  openModalExercise(exercise);
};

btnOpenModalExerciseRef.addEventListener('click', event => {
  showModal();
});