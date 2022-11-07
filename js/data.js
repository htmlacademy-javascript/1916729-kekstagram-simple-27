import {getRandomArrayElement, getRandomInteger} from './utils.js';

const SIMILAR_PHOTO_COUNT = 25;

const LIKES_COUNT = {
  MIN: 15,
  MAX: 200,
};

const COMMENTS_LIKES = {
  MIN: 0,
  MAX: 200,
};

const DESCRIPTION = [
  '#пп, #правильноепитание, #спорт, #спортсмен, #спортивные_костюмы',
  '#свадьба, #свадьбамечты, #свадьбавуфе, #свадьбаподключ, #свадьба2018',
  '#розыгрыши, #розыгрышпризов, #розыгрыш2018, #розыгрыш2019, #розыгрышспб',
  '#лето2018, #лето, #лето2019, #лето2017, #летозимой, #лето2016, #летовзиму',
  '#осень2018, #осень, #осеньвгороде, #осеньвсаду, #осеньнаногтях, #осеньзима',
];

const createPicture = (index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  descriptions: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(LIKES_COUNT.MIN, LIKES_COUNT.MAX),
  comment: getRandomInteger(COMMENTS_LIKES.MIN, COMMENTS_LIKES.MAX),
});

const getPictures = () =>
  Array.from({ length: SIMILAR_PHOTO_COUNT },
    (_, index) => createPicture(index));

export {getPictures};
