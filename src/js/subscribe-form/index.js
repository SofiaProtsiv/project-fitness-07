import isEmailRight from '../helpers/email-checker';
import ApiService from '../api-service/index';

const subscribeForm = {
  form: document.querySelector('.footer__form'),
  emailInput: document.querySelector('.footer__form__input'),
  message: document.querySelector('.footer__form__message'),
  btn: document.querySelector('.footer__form__btn'),
};

subscribeForm.form.addEventListener('submit', handlerFormSubmit);

async function handlerFormSubmit(ev) {
  ev.preventDefault();

  const email = ev.target.elements.email.value.trim().toLowerCase();

  if (isEmailRight(email)) {
    subscribeForm.message.classList.add('full_hidden');

    try {
      const fetch = new ApiService();
      fetch.email = email;
      await fetch.subscribe();
      subscribeForm.message.textContent = '✅ Thank you for you subscription';
      subscribeForm.message.classList.remove(
        'full_hidden',
        'footer__form__message_waring'
      );
      subscribeForm.message.classList.add('footer__form__message_ok');
      console.log('ok');
      ev.target.reset();
    } catch (error) {
      subscribeForm.message.textContent =
        '⚠️ This email address was previously added';
      subscribeForm.message.classList.remove(
        'full_hidden',
        'footer__form__message_ok'
      );
      subscribeForm.message.classList.add('footer__form__message_warning');
    }
  } else {
    subscribeForm.message.textContent = '⚠️ Your email has wrong format';
    subscribeForm.message.classList.remove(
      'full_hidden',
      'footer__form__message_ok'
    );
    subscribeForm.message.classList.add('footer__form__message_warning');
  }
}

subscribeForm.emailInput.addEventListener('input', handlerEmailInput);

function handlerEmailInput(ev) {
  ev.target.value.trim()
    ? (subscribeForm.btn.disabled = false)
    : (subscribeForm.btn.disabled = true);
}

subscribeForm.emailInput.addEventListener('focus', handlerEmailFocus);

function handlerEmailFocus() {
  subscribeForm.message.classList.add('full_hidden');
}
