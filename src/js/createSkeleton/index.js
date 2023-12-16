export function createCardsSkeleton(amount, element) {
  let skeleton = '';
  for (let i = 0; i < amount; i += 1) {
    if (element.classList.contains('workout-cards__wrapper')) {
      skeleton += `
      <li class="exercises__skeleton-loader">
        // TODO add markup
      </li>
      `;
      } else {
      skeleton += `
      <li class="exercises__skeleton-loader">
        <div class="card">
          <div class="cover-image-skeleton"></div>
        </div>
      </li>
      `;
    }
  }
  return skeleton;
}

export const addMarkupToHtml = (currentElement, addElement) => {
  currentElement.innerHTML = addElement;
};