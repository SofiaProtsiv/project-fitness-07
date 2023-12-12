function heroImgResizer() {
  window.addEventListener('resize', function() {
    const width = window.innerWidth;
    const heroImage = document.querySelector('.hero__img');

    if (width < 768) {
      heroImage.src = '../../images/hero/women-mob1x.jpg';
      heroImage.srcset = '../../images/hero/women-mob2x.jpg 2x';
    }
    if (768 <= width) {
      heroImage.src = '../../images/hero/women-tab1x.jpg';
      heroImage.srcset = '../../images/hero/women-tab2x.jpg 2x';
    }
    if (1440 <= width){
      heroImage.src = '../../images/hero/women-desk1x.jpg';
      heroImage.srcset = '../../images/hero/women-desk2x.jpg 2x';
    }
  });
}

export default heroImgResizer;