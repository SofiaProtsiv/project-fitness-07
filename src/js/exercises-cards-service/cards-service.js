import { updateViewPort } from "./update-view-port";
import { addMarkupToHtml, createCardsSkeleton } from '../createSkeleton.js';

const list = document.querySelector('.js-cards');
//It`s looking what endpoint and viewSize is, then give a number of cards to show
function calculateObjects(endPoint, viewSize){
    if (viewSize >= 768){
        if (endPoint != 3){
          addMarkupToHtml(list, createCardsSkeleton(10));
          return 10;
        }
        addMarkupToHtml(list, createCardsSkeleton(12));
        return 12;
    } else if (viewSize < 768){
        if (endPoint == 1){
          return 10;
        } else if (endPoint == 2){
          addMarkupToHtml(list, createCardsSkeleton(8));
          return 8
        }
        addMarkupToHtml(list, createCardsSkeleton(9));
        return 9;
    }
}


function areParamsDifferent(params) {
    const defaultParams = {
        filter: "Muscles",
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

function checkWorkoutParams(currentPage, endPoint, fetch, params, connection){
    if (areParamsDifferent(params)){
        fetch.bodyPart = params.bodypart;
        fetch.keyword = params.keyword;
        fetch.muscles = params.muscles;
        fetch.equipment = params.equipment;
        connection = getConnection(currentPage, endPoint, fetch).fetchFilteredExercises();
    } else{

        connection = getConnection(currentPage, endPoint, fetch).fetchExercise();
    }
    return connection;
}

function checkExerciseParams(currentPage, endPoint,fetch, params, connection){
    if (areParamsDifferent(params)){
        fetch.filter = params.filter;
        connection = getConnection(currentPage, endPoint, fetch).fetchFilteredExercises();
    } else{
        connection = getConnection(currentPage, endPoint, fetch).fetchMuscles();
    }
    return connection;
}

function getConnection(currentPage, endPoint, fetch){
    const viewSize = updateViewPort();
    const perPage = calculateObjects(endPoint, viewSize);
    fetch.pageCounter = currentPage;
    fetch.limit = perPage;
    return fetch;
}

function getData(promise){
    return promise
            .then(result => {
                return result;
            })
            .catch(error => {
                console.error('Error in getData:', error);
                throw error;
            });
}

export {getData, getConnection, checkExerciseParams, checkWorkoutParams, areParamsDifferent, calculateObjects};