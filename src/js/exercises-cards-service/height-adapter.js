const section = document.querySelector(".exercise-cards__section");

export default function adaptHeight(endPoint, viewPort){
    if ((viewPort  >= 375 && viewPort < 768) && endPoint != 3){
        section.style.height = "1320px";
    } else if (viewPort > 768 && endPoint != 3){
        section.style.height = "900px";
    } else {
        section.style.height = "";
    }
}