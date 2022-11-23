import {isTextFieldFocused, hideModal} from './form.js';
// https://learn.javascript.ru/task/random-int-min-max
const getRandomInteger = function (min, max) {
  if (min >= max) {
    return NaN;
  }
  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
};

function isEscapePressed (evt) {
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    hideModal();
  }
}

const getRandomArrayElement = (array) =>
  array[getRandomInteger(0, array.length - 1)];

const ALERT_SHOW_TIME = 5000;

const showAlert = () => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.background = 'red';
  alertContainer.style.margin = 'auto';

  alertContainer.textContent = 'Не удалось загрузить данные. Попробуйте снова.';

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const successSubmitHandler = () => {
  const successPopup = document.querySelector('#success')
    .content
    .querySelector('.success')
    .cloneNode(true);
  document.body.appendChild(successPopup);
  const closeSuccessButton = document.querySelector('.success__button');

  closeSuccessButton.addEventListener('click', () => {
    successPopup.remove();
  }, {once: true});

  document.addEventListener('keydown', (evt) => {
    if (isEscapePressed(evt)) {
      successPopup.remove();
    }
  }, {once: true});

  document.addEventListener('click', (evt) => {
    if (evt.target.id !== 'success') {
      successPopup.remove();
    }
  }, {once: true});
};

const errorSubmitHandler = () => {
  const errorPopup = document.querySelector('#error')
    .content
    .querySelector('.error')
    .cloneNode(true);
  document.body.appendChild(errorPopup);
  const closeErrorButton = errorPopup.querySelector('.error__button');

  closeErrorButton.addEventListener('click', () => {
    errorPopup.remove();
  }, {once: true});

  document.addEventListener('keydown', (evt) => {
    if (isEscapePressed(evt)) {
      errorPopup.remove();
    }
  }, {once: true});

  document.addEventListener('click', (evt) => {
    if (evt.target.id !== 'error') {
      errorPopup.remove();
    }
  }, {once: true});
};

export {getRandomArrayElement, getRandomInteger,
  isEscapePressed, showAlert, successSubmitHandler, errorSubmitHandler};
