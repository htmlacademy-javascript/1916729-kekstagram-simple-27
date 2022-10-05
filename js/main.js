// https://learn.javascript.ru/task/random-int-min-max

function randomInteger(min, max) {
  let random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
}
console.log('Случайное число ' + randomInteger(0, 100));


let checkStringLength = function (currentString, minLenght, maxLength) {
  return currentString.length >= minLenght && currentString.length <= maxLength;
};
console.log(checkStringLength('Проверяемая строка больше 20ти символов',
 20, 140));

