export function createCardsSkeleton(amount) {
  let skeleton = '';
  for (let i = 0; i < amount; i += 1) {
    skeleton += `
    <li class="exercises__skeleton-loader">
      <div class="card">
        <div class="cover-image-skeleton"></div>
      </div>
    </li>
    `;
  }
  return skeleton;
}

export const addMarkupToHtml = (currentElement, addElement) => {
  currentElement.innerHTML = addElement;
};