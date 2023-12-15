const paginationContainer = document.querySelector(".js-pages");

function showPages(currentPage, totalPages) {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        const pageClass = i === currentPage ? "exercise-cards__wrapper-page exercise-cards__current-page" : "exercise-cards__wrapper-page js-pages";
        pages.push(`

        <div class="${pageClass}" data-page="${i}">
            <a class="exercise-cards__page" href="" >
                ${i}
            </a>
        </div>
        `);
    }

    for (const page of pages) {
        paginationContainer.insertAdjacentHTML("beforeend", page);
    }
}



function cleanerPages(){
    paginationContainer.innerHTML = "";
}

export {showPages, cleanerPages};