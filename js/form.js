import {isEscapePressed} from './utils.js';
import {resetEffects} from './effect.js';
import {resetScale} from './scale.js';

const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const cancelButton = document.querySelector('#upload-cancel');
const fileField = document.querySelector('#upload-file');
const commentField = document.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text__error',
});

const showModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', isEscapePressed);
};

const hideModal = () => {
  form.reset();
  resetScale();
  resetEffects();
  pristine.reset();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', isEscapePressed);
};

const isTextFieldFocused = () =>
  document.activeElement === commentField;

const onCancelButtonClick = () => {
  hideModal();
};

const onFileInputChange = () => {
  showModal();
};

function validateDescription (value) {
  return value.length >= 20 && value.length <= 140;
}

pristine.addValidator(
  commentField,
  validateDescription,
  'От 20 до 140 символов'
);

const onFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

fileField.addEventListener('change', onFileInputChange);
cancelButton.addEventListener('click', onCancelButtonClick);
form.addEventListener('submit', onFormSubmit);

export {isTextFieldFocused, hideModal};
