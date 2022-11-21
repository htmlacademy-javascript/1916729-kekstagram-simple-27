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

export {getRandomArrayElement, getRandomInteger, isEscapePressed};
