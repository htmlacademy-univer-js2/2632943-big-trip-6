import dayjs from 'dayjs';

const humanizePointDate = (date) => date ? dayjs(date).format('MMM DD') : '';
const humanizePointTime = (date) => date ? dayjs(date).format('HH:mm') : '';

const getPointDuration = (dateFrom, dateTo) => {
  const from = dayjs(dateFrom);
  const to = dayjs(dateTo);
  const diffMinutes = to.diff(from, 'minute');

  const hours = Math.floor(diffMinutes / 60);
  const minutes = diffMinutes % 60;

  if (hours > 0) {
    return `${hours.toString().padStart(2, '0')}H ${minutes.toString().padStart(2, '0')}M`;
  }
  return `${minutes.toString().padStart(2, '0')}M`;
};

export {humanizePointDate, humanizePointTime, getPointDuration};
