import {getRandomInteger, getRandomValue} from '../utils/utils.js';

const DESCRIPTIONS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat.',
  'Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus.'
];

const CITIES = ['Amsterdam', 'Chamonix', 'Geneva', 'Paris', 'London', 'Berlin'];

const generateDescription = () => {
  const sentenceCount = getRandomInteger(1, 5);
  let description = '';
  for (let i = 0; i < sentenceCount; i++) {
    description += `${getRandomValue(DESCRIPTIONS) } `;
  }
  return description.trim();
};

const generatePictures = () => {
  const pictureCount = getRandomInteger(1, 5);
  const pictures = [];
  for (let i = 0; i < pictureCount; i++) {
    pictures.push({
      src: `https://loremflickr.com/248/152?random=${getRandomInteger(1, 1000)}`,
      description: getRandomValue(DESCRIPTIONS)
    });
  }
  return pictures;
};

const mockDestinations = CITIES.map((city, index) => ({
  id: index.toString(),
  description: generateDescription(),
  name: city,
  pictures: generatePictures()
}));

export { mockDestinations };
