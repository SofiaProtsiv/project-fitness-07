import { createUser, signIn, signOut, db } from '../firebase-service';

const userButton = document.querySelector('.user-icon');
const authModal = document.querySelector('.authModal__backdrop');
const closeButton = document.querySelector('.authModal__button-close');
const authForm = document.querySelector('.authForm');
const actionText = document.querySelector('.action__text');
const btnChangeForm = document.querySelector('.action__button');
const usernameFieldset = document.querySelector(".authForm__fieldset.username")
const title = document.querySelector('.authForm__title');
const userName = document.querySelector('.header__username');
const headerGroup = document.querySelector('.header_main_nav');
const btnLogOut = document.querySelector('.button-logout');

let isRegMode = true;

const closeModal = () => {
  authModal.classList.remove('open');
  closeButton.removeEventListener('click', closeModal);
  userButton.addEventListener('click', openModal);
  document.body.style.overflow = 'visible';
};

const openModal = () => {
  authModal.classList.add('open');
  closeButton.addEventListener('click', closeModal);
  userButton.removeEventListener('click', openModal);
  document.body.style.overflow = 'hidden';
};

const resetForm = () => {
  authForm.reset();
};

const handleSubmit = async (event) => {
  event.preventDefault();

  const formData = [...authForm.elements].reduce((formData, element) => {
    if (element.name) {
      formData[element.name] = element.value;
    }
    return formData;
  }, {});

  if (isRegMode) {
    await createUser(formData);
  }

  await signIn(formData);
  resetForm();
  const currentUserName = (await db.auth().currentUser)?.displayName;
  userName.textContent = currentUserName;
  closeModal();
};

const changeForm = () => {
  if (isRegMode) {
    btnChangeForm.textContent = 'Registration';
    usernameFieldset.classList.add('hidden');
    btnChangeForm.setAttribute('data-action', 'log_in');
    title.textContent = 'Log in';
    actionText.textContent = "Don't have an account?";
    resetForm();
    isRegMode = false;
  } else {
    btnChangeForm.textContent = 'Log in';
    btnChangeForm.setAttribute('data-action', 'reg');
    usernameFieldset.classList.remove('hidden');
    title.textContent = 'Registration';
    actionText.textContent = 'Already have an account?';
    resetForm();
    isRegMode = true;
  }
};

const checkCurrentUser = async () => {
  await db.auth().onAuthStateChanged((user) => {
    if (user) {
      userName.textContent = user.displayName;
      userName.classList.remove('hidden');
      userButton.classList.add('hidden');
      headerGroup.classList.add('visible');
      btnLogOut.classList.add('visible');
    } else {
      userButton.classList.remove('hidden');
      btnLogOut.classList.remove('visible');
      headerGroup.classList.remove('visible');
    }
  });
};

const handleSignOut = async () => {
  await signOut();
  btnLogOut.classList.add('hidden');
  userName.classList.add('hidden');
};

userButton.addEventListener('click', openModal);
authForm.addEventListener('submit', handleSubmit);
btnChangeForm.addEventListener('click', changeForm);
btnLogOut.addEventListener('click', handleSignOut);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

authModal.addEventListener('click', (event) => {
  if (event.target === authModal) {
    closeModal();
  }
});


checkCurrentUser();