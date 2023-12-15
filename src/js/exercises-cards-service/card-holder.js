import {showFavoriteCards, showInitialCards, showWorkoutCards, cleanerCardWrapper} from "../templates/exercise-cards";
import {getData, checkExerciseParams, checkWorkoutParams} from "./cards-service"
import { addWorkoutClass, deleteWorkoutClass } from "./class-changer";
import ApiService from "../api-service";
import { cleanerPages, showPages } from "../templates/pages";
import { checkCard, checkWorkoutCard, checkPage } from "./checker";

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
const listen = {
    cardsLinks: null,
    pageLinks: null,
    workoutLinks: null,
    
}


async function cardsHandler(){
    const element = document.querySelector('.exercise-cards__section');
    element.offsetHeight;
    const fetch = new ApiService();
    let data;
    let connection;
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
                data = await getData(connection);

                cleanerCardWrapper();
                cleanerPages();
                showWorkoutCards(data);
                showPages(currentPage, fetch.maxPages);
 
                listenPages(endPoint);
                listenWorkoutCards();
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
    listen.cardsLinks = document.querySelector('.js-cards');
    if (listen.cardsLinks) {
        listen.cardsLinks.addEventListener("click", targetHandler);
    } else {
        console.error("Element with class 'js-cards' not found.");
    }
   
}

function targetHandler(evt){
    const result = checkCard(evt);
    if (result != null || undefined || NaN)
    if (params.filter === "Muscles"){
        endPoint = 2;
        params.muscles = result;
    } else if (params.filter === "Bodypart"){
        endPoint = 2;
        params.bodypart = result;
    } else if(params.filter === "Equipment"){
        endPoint = 2;
        params.equipment = result;
    }
    listen.cardsLinks.removeEventListener("click", targetHandler);
    currentPage = 1;
    cardsHandler();
   
}


function listenPages(){
    listen.pageLinks = document.querySelector('.js-pages');
    if (listen.pageLinks) {
        listen.pageLinks.addEventListener("click", pagesHandler);
    } else {
        console.error("Element with class 'js-pages' not found.");
    }
}

function pagesHandler(evt){
   const clickedPage = checkPage(evt);
    if (currentPage != clickedPage && clickedPage != null || undefined || NaN){
        currentPage = +clickedPage;
        cardsHandler();
    }

}

function listenWorkoutCards(){
    listen.workoutLinks = document.querySelector('.js-cards');
    if (listen.workoutLinks) {
        listen.workoutLinks.addEventListener("click", workoutHandler);
    } else {
        console.error("Element with class 'js-cards' not found for workout.");
    }
}

function workoutHandler(evt){
    const clickedWorkoutCards = checkWorkoutCard(evt);
    if (clickedWorkoutCards != null || undefined || NaN){
        //Here must be some logic for modul that get key
    }
}


cardsHandler();