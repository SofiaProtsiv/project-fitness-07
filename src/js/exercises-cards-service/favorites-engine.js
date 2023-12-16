import { pageFilter,cardsHandler } from "./card-holder";

export function startFavorite(){
  if (window.location.href.includes("/favorite")){
    pageFilter.endPoint = 1;
    cardsHandler();
  } else{
    cardsHandler();
  }
}
