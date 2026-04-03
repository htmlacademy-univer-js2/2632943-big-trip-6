import dayjs from 'dayjs';

const filter = {
  'everything': (points) => points,
  'future': (points) => points.filter((point) => dayjs().isBefore(dayjs(point.dateFrom))),
  'present': (points) => points.filter((point) => dayjs().isAfter(dayjs(point.dateFrom)) && dayjs().isBefore(dayjs(point.dateTo))),
  'past': (points) => points.filter((point) => dayjs().isAfter(dayjs(point.dateTo))),
};

export {filter};
