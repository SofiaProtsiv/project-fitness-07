import { updateViewPort } from './update-view-port';
import { addMarkupToHtml, createCardsSkeleton } from '../createSkeleton/index.js';


const list = document.querySelector('.js-cards');

//It`s looking what endpoint and viewSize is, then give a number of cards to show
function calculateObjects(endPoint, viewSize) {
  if (viewSize >= 768) {
    if (endPoint != 3) {
      if (!list.classList.contains('workout-cards__wrapper')) {
        addMarkupToHtml(list, createCardsSkeleton(10));
      }
      return 10;
    }
    if (!list.classList.contains('workout-cards__wrapper')) {
      addMarkupToHtml(list, createCardsSkeleton(12));
    }
    return 12;
  } else if (viewSize < 768) {
    if (endPoint == 1) {
      if (!list.classList.contains('workout-cards__wrapper')) {
        addMarkupToHtml(list, createCardsSkeleton(10));
      }
      return 10;
    } else if (endPoint == 2) {
      if (!list.classList.contains('workout-cards__wrapper')) {
        addMarkupToHtml(list, createCardsSkeleton(8));
      }
      return 8;
    }
  }
  if (!list.classList.contains('workout-cards__wrapper')) {
    addMarkupToHtml(list, createCardsSkeleton(9));
  }
  return 9;
}


function areParamsDifferent(params) {
    const defaultParams = {
        filter: "Body%20parts",
        bodypart: "",
        keyword: "",
        muscles: "",
        equipment: "",
    };
    for (const key in params) {
        if (params.hasOwnProperty(key) && params[key] !== defaultParams[key]) {
            return true;
        }
    }

  return false;
}

function checkWorkoutParams(currentPage, endPoint, fetch, params, connection) {
  if (areParamsDifferent(params)) {
    fetch.bodyPart = params.bodypart;
    fetch.keyword = params.keyword;
    fetch.muscles = params.muscles;
    fetch.equipment = params.equipment;
    connection = getConnection(currentPage, endPoint, fetch).fetchFilteredExercises();
  } else {

    connection = getConnection(currentPage, endPoint, fetch).fetchExercise();
  }
  return connection;
}

function checkExerciseParams(currentPage, endPoint, fetch, params, connection) {
  if (areParamsDifferent(params)) {
    fetch.filter = params.filter;
    connection = getConnection(currentPage, endPoint, fetch).fetchMuscles();
  } else {
    connection = getConnection(currentPage, endPoint, fetch).fetchMuscles();
  }
  return connection;
}

function getConnection(currentPage, endPoint, fetch) {
  const viewSize = updateViewPort();
  const perPage = calculateObjects(endPoint, viewSize);
  fetch.pageCounter = currentPage;
  fetch.limit = perPage;
  return fetch;
}

function getData(promise) {
  return promise
  .then(result => {
    return result;
  })
  .catch(error => {
    console.error('Error in getData:', error);
    throw error;
  });
}

function getFiltersFromPage(params){
    const filters = document.querySelector(".filters__list .active");

    if (filters) {
        const id = filters.id;
        params.filter = id.includes("-") ? (id.charAt(0).toUpperCase()
         + id.slice(1)).replace("-", '%20')
        : id.charAt(0).toUpperCase() + id.slice(1);
    } else {
        console.error("No child elements found in filters.");
    }
}
export {getData, getConnection, checkExerciseParams, checkWorkoutParams, areParamsDifferent, calculateObjects, getFiltersFromPage};