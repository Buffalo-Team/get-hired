import { differenceInMinutes } from 'date-fns';
import { TFunction } from 'i18next';

const MINUTES_IN_HOUR = 60;
const MINUTES_IN_DAY = MINUTES_IN_HOUR * 24;

export default (t: TFunction, dateFrom: Date, dateTo: Date = new Date()) => {
  const minutes = differenceInMinutes(dateTo, dateFrom);

  const days = Math.round(minutes / MINUTES_IN_DAY);
  const hours = Math.round(minutes / MINUTES_IN_HOUR);

  if (days > 0) {
    return t('translation:numberOfDays', { count: days, defaultValue: '-' });
  }

  if (hours > 0) {
    return `${hours}h`;
  }

  return `${minutes}m`;
};
