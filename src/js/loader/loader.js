const loader = document.querySelector('.loader');
const content = document.querySelector('.content-wrapper');
export function handleShowLoader() {
  loader.classList.remove('hide');
}

export function handleHideLoader() {
  loader.classList.add('hide');
  content.classList.remove('hide');
}