const paginationContainer = document.querySelector(".exercise-cards__guard");

function showPages(currentPage, totalPages) {
    
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        const pageClass = i === currentPage ? "exercise-cards__wrapper-page exercise-cards__current-page" : "exercise-cards__wrapper-page";
        pages.push(`

        <div class="${pageClass}">
            <a class="exercise-cards__page" href="" data-page="${i}">
                ${i}
            </a>
        </div>
        `);
    }

    for (const page of pages) {
        paginationContainer.insertAdjacentHTML("beforeend", page);
    }
    

    const pageLinks = paginationContainer.querySelectorAll('.exercise-cards__page');
    pageLinks.forEach(pageLink => {
        pageLink.addEventListener('click', function (event) {
            event.preventDefault();
            const selectedPage = parseInt(event.currentTarget.getAttribute('data-page'));
            console.log(`Selected page: ${selectedPage}`);
        });
    });
}

function cleanerPages(){
    paginationContainer.innerHTML = "";
}

export {showPages, cleanerPages};