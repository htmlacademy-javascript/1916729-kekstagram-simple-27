import {isEscapePressed} from './utils.js';
import {resetEffects} from './effect.js';
import {resetScale} from './scale.js';
import {sendData} from './network.js';
import {openSuccessPopup, openErrorPopup} from './popup.js';

const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const uploadFileInput = document.querySelector('.img-upload__input');
const body = document.querySelector('body');
const cancelButton = document.querySelector('#upload-cancel');
const submitButton = form.querySelector('#upload-submit');
const commentField = document.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text__error',
});

const isTextFieldFocused = () =>
  document.activeElement === commentField;

const onModalEscKeydown = (evt) => {
  if (isEscapePressed(evt) && !document.querySelector('. error')) {
    evt.preventDefault();
    closeModal();
  }
};

const onCancelButtonClick = () => {
  closeModal();
};

const openModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onModalEscKeydown);
  cancelButton.addEventListener('click', onCancelButtonClick);
};

function closeModal() {
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalEscKeydown);
  cancelButton.removeEventListener('click', onCancelButtonClick);
  uploadFileInput.value = '';
  resetScale();
  resetEffects();
  pristine.reset();
  form.reset();
}

const blockSubmitButton = () => {
  submitButton.disabled = true;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
};

const onSuccess = () => {
  openSuccessPopup();
  closeModal();
};

const onError = () => {
  openErrorPopup();
};

const initForm = () => {
  uploadFileInput.addEventListener('change', () => {
    openModal();
  });
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    blockSubmitButton();
    sendData(onSuccess, onError, new FormData(evt.target))
      .then(() => {
        unblockSubmitButton();
      });
  });
};

export {initForm, closeModal, isTextFieldFocused};
