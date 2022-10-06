// https://learn.javascript.ru/task/random-int-min-max

function randomInteger(min, max) {
  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
}
randomInteger();


const checkStringLength = function (currentString, minLenght, maxLength) {
  return currentString.length >= minLenght && currentString.length <= maxLength;
};
checkStringLength(20,10,20);
