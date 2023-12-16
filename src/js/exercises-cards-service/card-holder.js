import {
  showFavoriteCards,
  showInitialCards,
  showWorkoutCards,
  cleanerCardWrapper,
} from '../templates/exercise-cards';
import {
  getData,
  checkExerciseParams,
  checkWorkoutParams,
  getFiltersFromPage
} from './cards-service';
import { addWorkoutClass, deleteWorkoutClass, addFavoriteClass, deleteFavoriteClass, hiddenEmptyParag, unhiddenEmptyParag, addStringFavoriteParagEmpty, addStringEmptyParag} from './class-worker';
import ApiService from '../api-service';
import { cleanerPages, showPages } from '../templates/pages';
import { checkCard, checkWorkoutCard, checkPage } from './checker';
import { favoritesDB } from '../favoritesDB';
import { openModalExercise } from '../modal/exercise-modal';
import adaptHeight from './height-adapter-js';
import { update } from 'lodash';
import { updateViewPort } from './update-view-port';

window.addEventListener('resize', cardsHandler);

//Default parameteres for search
let params = {
  filter: 'Muscles',
  bodypart: '',
  keyword: '',
  muscles: '',
  equipment: '',
};

const pageFilter = {
  currentPage: 1,
  endPoint: 3,
};

const listen = {
  cardsLinks: null,
  pageLinks: null,
  workoutLinks: null,
};

//There are 3 endpoints: 1 - favorites, 2 - exercises (target of search), 3 - filter

async function cardsHandler() {
  const element = document.querySelector('.exercise-cards__section');
  element.offsetHeight;
  const fetch = new ApiService();
  let data;
  let connection;
  getFiltersFromPage(params, pageFilter);
  hiddenEmptyParag();
  adaptHeight(pageFilter.endPoint, updateViewPort());
  try {
    switch (pageFilter.endPoint) {
      // If the endpoint has /favorites do the next
      case 1:
        addFavoriteClass();
        deleteWorkoutClass();
        data = await favoritesDB.get();
        showFavoriteCards(data);
        break;
      // If the endpoint has /exercise do the next
      case 2:
        addWorkoutClass();
        deleteFavoriteClass();
        connection = checkWorkoutParams(
          pageFilter.currentPage,
          pageFilter.endPoint,
          fetch,
          params,
          connection
        );
        data = await getData(connection);

        cleanerCardWrapper();
        cleanerPages();
        showWorkoutCards(data);
        showPages(pageFilter.currentPage, fetch.maxPages);

        listenPages(pageFilter.endPoint);
        listenWorkoutCards();
        break;
      // If the endpoint has /filter do the next
      case 3:
        deleteWorkoutClass();
        deleteFavoriteClass();
        connection = checkExerciseParams(
          pageFilter.currentPage,
          pageFilter.endPoint,
          fetch,
          params,
          connection
        );
        data = await getData(connection);
        cleanerCardWrapper();
        cleanerPages();

        showInitialCards(data);
        showPages(pageFilter.currentPage, fetch.maxPages);

        listenCards();
        listenPages(pageFilter.endPoint);
        break;
    }
  } catch (error) {
    console.log('Error: ', error);
    if (pageFilter.endPoint === 1){
      addStringFavoriteParagEmpty();
    } else{
      addStringEmptyParag();
    }
    unhiddenEmptyParag();
  }
}

function listenCards() {
  listen.cardsLinks = document.querySelector('.js-cards');
  if (listen.cardsLinks) {
    listen.cardsLinks.addEventListener('click', targetHandler);
  } else {
    console.error("Element with class 'js-cards' not found.");
  }
}

function targetHandler(evt) {
  const result = checkCard(evt);
  changeToValidUrl(result);
  if (result != null || undefined || NaN)
    if (params.filter === 'Muscles') {
      pageFilter.endPoint = 2;
      params.muscles = result;
    } else if (params.filter === 'Body%20parts') {
      pageFilter.endPoint = 2;
      params.bodypart = result;
    } else if (params.filter === 'Equipment') {
      pageFilter.endPoint = 2;
      params.equipment = result;
    }
  listen.cardsLinks.removeEventListener('click', targetHandler);
  pageFilter.currentPage = 1;
  cardsHandler();
}

function changeToValidUrl(string){
  return string.includes(" ") ? string.replace(" ", "%20") : string;
}

function listenPages() {
  listen.pageLinks = document.querySelector('.js-pages');
  if (listen.pageLinks) {
    listen.pageLinks.addEventListener('click', pagesHandler);
  } else {
    console.error("Element with class 'js-pages' not found.");
  }
}

function pagesHandler(evt) {
  const clickedPage = checkPage(evt);
  if (
    (pageFilter.currentPage != clickedPage && clickedPage != null) ||
    undefined ||
    NaN
  ) {
    pageFilter.currentPage = +clickedPage;
    cardsHandler();
  }
}

function listenWorkoutCards() {
  listen.workoutLinks = document.querySelector('.js-cards');
  if (listen.workoutLinks) {
    listen.workoutLinks.addEventListener('click', workoutHandler);
  } else {
    console.error("Element with class 'js-cards' not found for workout.");
  }
}

async function workoutHandler(evt) {
  const exerciseId = checkWorkoutCard(evt);
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

    exercise.isFavorite = favoritesDB.getObjectById(exerciseId);
    openModalExercise(exercise);
  } catch (error) {
    console.error(error);
  }
}

export { params, pageFilter, cardsHandler };