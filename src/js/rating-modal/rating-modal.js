const ratingInputs = document.querySelectorAll('.rating-stars input');
const ratingCount = document.querySelector('.rating-count');

  ratingInputs.forEach(input => {
    input.addEventListener('change', () => {
      console.log('Selected rating:', input.value);
      ratingCount.value = input.value; 
    });
  });

// class ModalWindowController {
//     #rootElement = null;
//     #rootDisplayProperty = "block";

//     #subWindowElement = null;

//     constructor(modalRootEl) {
//         this.#rootElement = modalRootEl;
        
//     }

//     showModalWindow() {

//     }

//     hideModalWindow() {
//         if (this.#rootElement != null) {

//         }
//     }

//     setSubWindow(subWindowElement) {
//         this.#subWindowElement = subWindowElement;
//     }
// }