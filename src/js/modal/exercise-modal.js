import {
  strCapitalizeAllFirstChar,
  strCapitalizeSentence,
  strSplitCamelCase,
} from '../helpers/stringHelper';

import { starRating } from '../star-rating';

import { toggleFavorit, favoritesDB } from '../favoritesDB';

const backdropRef = document.querySelector('.js-backdrop');
const modalRef = document.querySelector('.modalExercise');
const closeButtonRef = modalRef.querySelector('.x-button');
const imgWrapperRef = modalRef.querySelector('.modalExercise__img-wrapper');
const contentWrapperRef = modalRef.querySelector('.exercise-content');
const buttonBoxRef = modalRef.querySelector('.button-box');

const BASE_URL = import.meta.env.BASE_URL;
const MAX_RATING = 5;

let toggleFavoritEvent;

const renderModal = exercise => {
  const { gifUrl, name, rating, _id, isFavorite, description } = exercise;
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
  btnBoxRender(isFavorite);
};

const getDetails = exercise => ({
  bodyPart: exercise.bodyPart,
  equipment: exercise.equipment,
  rating: exercise.rating,
  burnedCalories: exercise.burnedCalories,
  time: exercise.time,
  popular: exercise.popularity,
});

const btnBoxRender = (isFavorite = false) => {
  buttonBoxRef.innerHTML = '';

  isFavorite
    ? buttonBoxRef.insertAdjacentHTML('beforeend', markupRemoveFavoritesBtn())
    : buttonBoxRef.insertAdjacentHTML('beforeend', markupAddFavoritesBtn());
  buttonBoxRef.insertAdjacentHTML('beforeend', markupGiveRatingBtn());
};

const markupTitle = title => {
  return `
    <h3 class="title">${strCapitalizeAllFirstChar(title)}</h3>
  `;
};

const markupRating = rating => {
  const markup = [];
  const value = Math.round(rating * 10) / 10;
  markup.push(`<li class="rating__item value">${value}</li>`);
  const percent = Math.round((rating / MAX_RATING) * 100);
  const iconStar = `${BASE_URL}images/icons-sprite.svg#icon-star`;
  markup.push(`<li ${starRating(percent)}</li>`);

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
    const capValue = strCapitalizeSentence(value);
    markup.push(`
      <li class="exercise_details-item">
        <p class="detail-name">${keyName}</p>
        <p class="detail-value">${capValue}</p>
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
    className: 'js-toggle-favorite',
  });

const markupRemoveFavoritesBtn = () =>
  markupButton({
    text: 'Remove from favorites',
    iconId: 'icon-trash',
    className: 'js-toggle-favorite',
  });

const markupGiveRatingBtn = () =>
  markupButton({
    text: 'Give a rating',
    className: 'js-give-rating ghost',
  });

const markupButton = ({ text, iconId, className = '' }) => {
  let iconMarkup;
  if (iconId) {
    iconMarkup = `
      <svg class="btn-icon">
        <use href=${BASE_URL}images/icons-sprite.svg#${iconId} />
      </svg>
    `;
  }

  return `
    <button id="js-toggle-favorit" type="button" class="button ${className}">
      <span>${text}</span>
      ${iconId ? iconMarkup : ''}
    </button>
  `;
};

const closeModalExercise = () => {
  backdropRef.classList.remove('open');
  modalRef.classList.remove('open');
  closeButtonRef.removeEventListener('click', closeModalExercise);
  document.body.style.overflow = 'visible';

  const toggleID = 'js-toggle-favorit';
  try {
    const toggleBtn = document.getElementById(toggleID);
    toggleBtn.removeEventListener('click', toggleFavoritEvent);
  } catch (error) {
    console.error(`${toggleID} not found!`);
  }
};

const openModalExercise = async exercise => {
  const { _id } = exercise;

  exercise.isFavorite = await favoritesDB.idIsFavorite(_id);
  renderModal(exercise);

  backdropRef.classList.add('open');
  modalRef.classList.add('open');
  closeButtonRef.addEventListener('click', closeModalExercise);
  document.body.style.overflow = 'hidden';

  toggleFavoritEvent = toggleFavorit(exercise);
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

export { openModalExercise, btnBoxRender, closeModalExercise };
