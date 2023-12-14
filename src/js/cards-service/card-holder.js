import {showFavoriteCards, showInitialCards, showWorkoutCards, cleanerCardWrapper} from "../templates/exercise-cards";
import {getData, checkExerciseParams, checkWorkoutParams} from "./cards-service"
import { addWorkoutClass, deleteWorkoutClass } from "./class-changer";
import ApiService from "../api-service";
import { cleanerPages, showPages } from "../templates/pages";
import { checkPage } from "./check-page";
import { checkCard } from "./check-card";

window.addEventListener('resize', cardsHandler);

//Default parameteres for search
let params = {
    filter: "Muscles",
    bodypart: "",
    keyword: "",
    muscles: "",
    equipment: "",
};

let currentPage = 1;
let endPoint = 3;

async function cardsHandler(){

    const fetch = new ApiService();
    let data;
    let connection;
    console.log(endPoint);
    try{
        switch (endPoint){
            // If the endpoint has /favorites do the next
            case 1:
                //Тут повинна бути логіка отримання даних з позначкою фейворітс
                
                showFavoriteCards(data);
                break;
            // If the endpoint has /exercise do the next
            case 2:
                addWorkoutClass();

                connection = checkWorkoutParams(currentPage, endPoint, fetch, params, connection);
                console.log(params);
                data = await getData(connection);
                cleanerCardWrapper();
                cleanerPages();
                showWorkoutCards(data);
                showPages(currentPage, fetch.maxPages);

                listenCards();
                listenPages(endPoint);
                break;
            // If the endpoint has /filter do the next
            case 3:
                deleteWorkoutClass();

                connection = checkExerciseParams(currentPage, endPoint, fetch, params, connection);
                data = await getData(connection);
    
                cleanerCardWrapper();
                cleanerPages();

                showInitialCards(data);
                showPages(currentPage, fetch.maxPages);

                listenCards();
                listenPages(endPoint);
                break;
            
        }
    } catch(error){
        console.log("Error: ", error);
    }
}

function listenCards(){
    const cardsLinks = document.querySelector('.exercise-cards__wrapper');
    if (cardsLinks) {
        cardsLinks.addEventListener("click", targetHandler);
    } else {
        console.error("Element with class 'exercise-cards__wrapper' not found.");
    }
}

function targetHandler(evt){
    endPoint = 2;
    params.muscles = checkCard(evt);
    cardsHandler();
}


function listenPages(){
    const pageLinks = document.querySelector('.exercise-cards__guard');
    if (pageLinks) {
        pageLinks.addEventListener("click", pagesHandler);
    } else {
        console.error("Element with class 'exercise-cards__guard' not found.");
    }
}

function pagesHandler(evt){
   const clickedPage = checkPage(evt);
    if (currentPage != clickedPage){
        currentPage = +clickedPage;

        cardsHandler();
    }

}

cardsHandler();