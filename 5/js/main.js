const SIMILAR_PHOTO_COUNT = 25;

const LikesCount = {
  MIN: 15,
  MAX: 200,
};

const comment = {
  minCommentLikes: 0,
  maxCommentLikes: 200,
};

const descriptions = [
  '#пп, #правильноепитание, #спорт, #спортсмен, #спортивные_костюмы, #спортвмассы',
  '#свадьба, #свадьбамечты, #свадьбавуфе, #свадьбаподключ, #свадьба2018, #свадьбагода',
  '#розыгрыши, #розыгрышпризов, #розыгрыш2018, #розыгрыш2019, #розыгрышспб, #розыгрышденег',
  '#лето2018, #лето, #лето2019, #лето2017, #летозимой, #лето2016, #летовзиму, #летонадаче',
  '#осень2018, #осень, #осеньвгороде, #осеньвсаду, #осеньнаногтях, #осеньзима, #осеньзолотая',
];

// https://learn.javascript.ru/task/random-int-min-max
const getRandomInteger = function (min, max) {
  if (min >= max) {
    return NaN;
  }
  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
};

const isStringLengthValid = (currentString, minLength, maxLength) =>
  currentString.length >= minLength && currentString.length <= maxLength;

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  descriptions: descriptions[getRandomInteger(0, descriptions.length - 1)],
  likes: getRandomInteger(LikesCount.MIN, LikesCount.MAX),
  comment: getRandomInteger(comment.minCommentLikes, comment.maxCommentLikes),
});

const similarPOST = () =>
  Array.from({ length: SIMILAR_PHOTO_COUNT },
    (_, index) => createPicture(index + 1));

similarPOST();
isStringLengthValid('', 10);
