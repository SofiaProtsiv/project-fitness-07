import { signOut, db } from '../firebase-service';

const headerGroup = document.querySelector('.header__nav-authorized');
const authLinkEl = document.querySelector(".header__nav__item.auth")
const btnLogOut = document.querySelector('.header__logout_btn');


export const checkCurrentUser = async () => {
  await db.auth().onAuthStateChanged(user => {
    if (user) {
      console.log("check")
      // userName.textContent = user.displayName;
      // userName.classList.remove('hidden');
      authLinkEl.classList.add('hidden');
      headerGroup.classList.add('visible');
      btnLogOut.classList.add('visible');
    } else {
            console.log("check")
      authLinkEl.classList.remove('hidden');
      btnLogOut.classList.remove('visible');
      headerGroup.classList.remove('visible');
    }
  });
};

export const handleSignOut = async () => {
  await signOut();
  btnLogOut.classList.add('hidden');
  window.location.replace('/')
  // userName.classList.add('hidden');
};

btnLogOut.addEventListener('click', handleSignOut);

checkCurrentUser();
