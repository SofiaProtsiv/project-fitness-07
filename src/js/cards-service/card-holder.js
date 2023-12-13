import {showFavoriteCards, showInitialCards, showWorkoutCards, cleanerCardWrapper} from "../templates/exercise-cards";
import { updateViewPort } from "./update-view-port";
import { addWorkoutClass, deleteWorkoutClass } from "./class-changer";
import ApiService from "../api-service";
import { cleanerPages, showPages } from "../templates/pagination";

window.addEventListener('resize', cardsHadler);

//Parameteres for future search
let params = {
    filter: "Muscles",
    page: 1,
    limit:9
}

async function cardsHadler(){
    const endPoint = checkEndPoint();
    let data;
    let connection;
    let fetch;
    switch (endPoint){
        case 1:
            //Тут повинна бути логіка отримання даних з позначкою фейворітс
            
            showFavoriteCards();
            break;
        case 2:
            addWorkoutClass();
            fetch = new ApiService();
            connection = getConnection(endPoint).fetchExercise();
            data = await getData(connection);
            showWorkoutCards(data);
            showPages(fetch.pageCounter, fetch.maxPages);
            break;
        case 3:
            deleteWorkoutClass();

            fetch = new ApiService();
            connection = getConnection(endPoint, fetch).fetchMuscles();
            data = await getData(connection);
            
            cleanerCardWrapper();
            cleanerPages();
            showInitialCards(data);
            showPages(fetch.pageCounter, fetch.maxPages);
            break;
    }
}

//It`s looking what end point and viewSize is, then give a number of cards to show
function calculateObjects(endPoint, viewSize){
    if (viewSize >= 768){
        if (endPoint != 3){
            return 10;
        }
        return 12;
    } else if (viewSize < 768){
        if (endPoint == 1){
            return 10;
        } else if (endPoint == 2){
            return 8
        }
        return 9;
    }
}

//Check does end point has key words in url
function checkEndPoint(url = window.location.href){
    if (url.includes("/favorites")){
        return 1;
    } else if (url.includes("/exercises")){
        return 2;
    } else{
        return 3;
    }
}

function getConnection(endPoint, fetch){
    const viewSize = updateViewPort();
    const perPage = calculateObjects(endPoint, viewSize);
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

cardsHadler();