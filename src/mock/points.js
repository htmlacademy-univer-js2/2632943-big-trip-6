import {getRandomInteger, getRandomValue} from '../utils/utils.js';
import {mockDestinations} from './destinations.js';
import {mockOffers, TYPES} from './offers.js';

const generatePoint = (id) => {
  const type = getRandomValue(TYPES);
  const destination = getRandomValue(mockDestinations);
  const offersByType = mockOffers.find((offer) => offer.type === type).offers;

  const selectedOffers = [];
  if (offersByType.length > 0) {
    const offerCount = getRandomInteger(0, offersByType.length);
    for (let i = 0; i < offerCount; i++) {
      selectedOffers.push(offersByType[i].id);
    }
  }

  const startDate = new Date();
  startDate.setDate(startDate.getDate() + getRandomInteger(-3, 3));
  startDate.setHours(getRandomInteger(0, 23), getRandomInteger(0, 59));

  const endDate = new Date(startDate);
  endDate.setHours(endDate.getHours() + getRandomInteger(1, 4), endDate.getMinutes() + getRandomInteger(0, 59));

  return {
    id: id.toString(),
    basePrice: getRandomInteger(100, 2000),
    dateFrom: startDate.toISOString(),
    dateTo: endDate.toISOString(),
    destination: destination.id,
    isFavorite: Boolean(getRandomInteger(0, 1)),
    offers: selectedOffers,
    type
  };
};

const getMockPoints = () => Array.from({length: 4}, (_, index) => generatePoint(index));

export { getMockPoints };
