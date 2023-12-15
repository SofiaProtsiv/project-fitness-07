import ApiService from "../api-service";
import { params, pageFilter, cardsHandler} from "../exercises-cards-service/card-holder";

const inputEl = document.querySelector(".search__input");
const categoriesListEl = document.querySelector(".filters__list")

const fetch = new ApiService();

setCategoriesIntoMarkup()

async function setCategoriesIntoMarkup() {
  const data = await fetch.fetchFilters();

  const categories = [...new Set(data.map(({ filter }) => filter))]

  const categoriesItemsMarkup = categories.map((category, index) => {
    const categoryId = category.toLowerCase().split(" ").join("-")
    if (index === 0) {
      return `<li id=${categoryId} class="filters__item active">${category}</li>`
    }
    return `<li id=${categoryId} class="filters__item">${category}</li>`
  }).join("")

  categoriesListEl.insertAdjacentHTML("afterbegin", categoriesItemsMarkup)
}

function handleInput(e) {
  const query = e.target.value.toLowerCase().trim();
  console.log(query)
}

function handleCategories(e) {
  const categoryEl = e.target;
  const categoryId = e.target.id;

[...categoriesListEl.children].forEach((item) => {
  item.classList.remove("active")
  })
  
  categoryEl.classList.add("active")
  params.filter = categoryId.includes("-") ? (categoryId.charAt(0).toUpperCase() + categoryId.slice(1)).replace("-", '%20') : categoryId.charAt(0).toUpperCase() + categoryId.slice(1);
  pageFilter.currentPage = 1;
  cardsHandler();
}

inputEl.addEventListener("input", handleInput)
categoriesListEl.addEventListener("click", handleCategories)