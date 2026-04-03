import {getRandomInteger} from '../utils/utils.js';

const TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];
const TITLES = ['Upgrade to comfort class', 'Order Uber', 'Add luggage', 'Book tickets', 'Add meal', 'Choose seats'];

const mockOffers = TYPES.map((type) => {
  const offersCount = getRandomInteger(0, 5);
  const offers = [];
  for (let i = 0; i < offersCount; i++) {
    offers.push({
      id: `${type}-${i}`,
      title: TITLES[i % TITLES.length],
      price: getRandomInteger(10, 200)
    });
  }
  return {
    type,
    offers
  };
});

export { mockOffers, TYPES };
