import uniqueRandomArray from 'unique-random-array';
import lorNames from './lor-names.json';

const getRandomItem = uniqueRandomArray(lorNames);

module.exports = {
  all: lorNames,
  random: random
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    const randomItems = [];
    for (let i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}
