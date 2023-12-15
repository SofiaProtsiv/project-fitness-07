import { team, icons } from './db';

const teamList = document.querySelector('.team__list');

(function addTeam() {
  // const { iconGithub, iconEmail, iconLinkedin } = icons;
  teamList.innerHTML = team
    .map(
      ({ name, role, desc, photo, github, email, linkedin }) =>
        `
       <li class="team__list__item">
           <img class="team__list__item__img" src="${photo}" alt="" />
           <h3 class="team__list__item__name">${name}</h3>
           <p class="team__list__item__role">${role}</p>
           <ul class="team__social__list">
             <li class="team__social__list__item">
               <a href="${email}" target="_blank" rel="noopener noreferrer">
                 <svg class="team__social__icon" aria-label="Email icon">
                   <use href="/images/icons-sprite.svg#email"></use>
                 </svg>
               </a>
             </li>
                <li class="team__social__list__item">
               <a href="${linkedin}" target="_blank" rel="noopener noreferrer">
                 <svg class="team__social__icon" aria-label="Linkedin icon">
                   <use href="/images/icons-sprite.svg#icon-linkedin"></use>
                 </svg>
               </a>
             </li>
                <li class="team__social__list__item">
               <a href="${github}" target="_blank" rel="noopener noreferrer">
                 <svg class="team__social__icon" aria-label="Instagram icon">
                   <use href="/images/icons-sprite.svg#icon-github"></use>
                 </svg>
               </a>
             </li>
           </ul>
         </li>`
    )
    .join('');
})();

// addTeam();

/* Show More */

// const btnShow = document.querySelectorAll('.more');

// btnShow.forEach(function (el) {
//   if (!el) return;
//   el.addEventListener('click', showMore);
// });

// function showMore(event) {
//   const openCard = document.querySelector(
//     '.team__cards__card-container.show-more'
//   );

//   const card = event.target.closest('.team__cards__card-container');

//   if (!card) return;

//   if (card.classList.contains('show-more')) {
//     card.classList.remove('show-more');
//   } else {
//     card.classList.add('show-more');
//   }

//   if (openCard) {
//     openCard.classList.remove('show-more');
//   }
// }

// /* Social Hover */
// const icon = document.querySelectorAll('.icon');

// icon.forEach(function (el) {
//   if (!el) return;
//   el.addEventListener('mouseenter', followCursor);
// });

// function followCursor(event) {
//   const pointer = event.currentTarget
//       .closest('.team__cards__card-container')
//       .querySelector('.pointer'),
//     index = event.currentTarget.dataset.index,
//     sizeIcon = 60 * index + 25;

//   pointer.style.transform = `translateX(${sizeIcon}px)`;
// }
