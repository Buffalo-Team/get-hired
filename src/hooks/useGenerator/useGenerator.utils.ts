export const getRandomDate = (startDate: Date, endDate: Date): Date => {
  return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
};

export const getRandomArrayItem = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

export const getRandomInt = (min: number, max: number): number => {
  const ceilMin = Math.ceil(min);
  const floorMax = Math.floor(max);
  return Math.floor(Math.random() * (floorMax - ceilMin + 1) + ceilMin);
};

export const roundTo = (value: number, threshold: 1 | 10 | 100 | 1000): number =>
  Math.round(value / threshold) * threshold;
