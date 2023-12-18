import"./index-883cc2a2.js";import"./index-de7e97ab.js";const e="/project-fitness-07/",r=[{name:"Sofia Protsiv",role:"Team Lead",desc:"",photo:`${e}images/team/teammate1.jpg`,email:"mailto:prochivsofia@gmail.com",linkedin:"https://www.linkedin.com/in/sofia-protsiv-9743a6201/",github:"https://github.com/SofiaProtsiv"},{name:"Olga Lukianets",role:"Scrum Master",desc:"",photo:`${e}images/team/teammate1.jpg`,email:"mailto:olgalukianets7@gmail.com",linkedin:"https://www.linkedin.com/in/olga-lukianets/",github:"https://github.com/Liasique"},{name:"Nikita Zeleniak",role:"Front-End Developer",desc:"",photo:`${e}images/team/teammate1.jpg`,email:"mailto:Zelenyaknikita0927@gmail.com",linkedin:"https://www.linkedin.com/in/zeleniak-nikita/",github:"https://github.com/NikitaZelenyak"},{name:"Mykhailo Startsev",role:"Front-End Developer",desc:"Developed an API for saving favorite cards in Firestore Database, implemented image optimization, and addressed website performance issues for optimal user experience.",photo:`${e}images/team/mykhailo-startsev.jpg`,email:"mailto:m.a.startsev@gmail.com",linkedin:"https://www.linkedin.com/in/m-startsev/",github:"https://github.com/MStartsev"},{name:"Ilya Bondarchuk",role:"Front-End Developer",desc:"",photo:"https://i.imgur.com/xmyjNiC.jpg",email:"mailto:hmlbond@gmail.com",linkedin:"https://www.linkedin.com/in/ilyabondarchuk/",github:"https://github.com/cod3provider"},{name:"Galamaga Yevgen",role:"Front-End Developer",desc:"Responsible for creating: footer, team page, scroll up button, subscription form and adjustment sending request to server.",photo:`${e}images/team/teammate-galamaga.jpg`,email:"mailto:evgeniygal@gmail.com",linkedin:"https://www.linkedin.com/in/yevgen-galamaga-964481187/",github:"https://github.com/EvgeniyGal"},{name:"Alex Smagin",role:"Front-End Developer",desc:"Responsible for creating: quotes component in home & favorites pages. This dynamic component delivers a fresh quote with its author daily.",photo:`${e}images/team/alex-smagin.jpg`,email:"mailto:alexsmagin1@gmail.com",linkedin:"https://www.linkedin.com/in/alex-smagin29/",github:"https://github.com/Alexandrbig1"},{name:"Artur Didur",role:"Front-End Developer",desc:"Responsible for creating: cards and pagination in home & favorites pages, which dynamically changes the cards depending on user choice.",photo:`${e}images/team/artur-didur.jpg`,email:"mailto:didur.art@gmail.com",linkedin:"https://www.linkedin.com/in/artur-didur-257a57204/",github:"https://github.com/Art-of-D"},{name:"Yuriy Staynov",role:"Front-End Developer",desc:"Responsible for exercise modal window and common styles for all modal windows (backdrop, transitions etc.)",photo:"https://imagedelivery.net/mt3p7ofMGq4rq6eZNqRFdw/449e49ff-9bcf-4312-e830-414b39df7900/public",email:"mailto:yuriystaynov@gmail.com",linkedin:"https://www.linkedin.com/in/yuriy-staynov-8a2832219/",github:"https://github.com/Yuriy-St"},{name:"Vladyslav Mykhalytsky",role:"Front-End Developer",desc:"",photo:`${e}images/team/teammate1.jpg`,email:"mailto:vmykhali666@gmail.com",linkedin:"https://www.linkedin.com/in/vladyslav-mykhalytskyi-b42250185/",github:"https://github.com/vmykhali666"}],c=document.querySelector(".team__list"),i="/project-fitness-07/";(function(){c.innerHTML=r.map(({name:a,role:t,desc:o,photo:s,github:n,email:l,linkedin:m})=>`
       <li class="team__list__item">
           <img class="team__list__item__img" src="${s}" alt="" />
           <div class="team__list__item__box">
           <h2 class="team__list__item__name">${a}</h2>
           <div class="team__list__item_deco"></div>
           <p class="team__list__item__role">${t}</p>
           <div class="team__list__item_deco"></div>
           <p class="team__list__item__description">${o}</p>
           <ul class="team__social__list">
             <li class="team__social__list__item">
               <a href="${l}" target="_blank" rel="noopener noreferrer">
                 <svg class="team__social__icon" aria-label="Email icon">
                   <use href="${i}images/icons-sprite.svg#email"></use>
                 </svg>
               </a>
             </li>
                <li class="team__social__list__item">
               <a href="${m}" target="_blank" rel="noopener noreferrer">
                 <svg class="team__social__icon" aria-label="Linkedin icon">
                   <use href="${i}images/icons-sprite.svg#icon-linkedin"></use>
                 </svg>
               </a>
             </li>
                <li class="team__social__list__item">
               <a href="${n}" target="_blank" rel="noopener noreferrer">
                 <svg class="team__social__icon" aria-label="Instagram icon">
                   <use href="${i}images/icons-sprite.svg#icon-github"></use>
                 </svg>
               </a>
             </li>
           </ul>
           </div>
         </li>`).join("")})();
