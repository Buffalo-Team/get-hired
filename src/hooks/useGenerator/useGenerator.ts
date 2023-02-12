import { useState } from 'react';
import useDatabase from '~/hooks/useDatabase';
import {
  COMPANIES,
  CONTRACT_TYPES,
  CURRENCIES,
  MIN_DATE,
  ROLES,
  SALARY_MAX,
  SALARY_MIN,
  STATUSES,
} from './useGenerator.consts';
import { getRandomArrayItem, getRandomDate, getRandomInt, roundTo } from './useGenerator.utils';

interface GeneratorConfig {
  quantities: {
    applications: number;
  };
}

const useGenerator = () => {
  const { dropDatabase, applications } = useDatabase();
  const [isGenerated, setIsGenerated] = useState<boolean>(false);

  const generateOneApplication = (): void => {
    const salaryFrom = roundTo(getRandomInt(SALARY_MIN, SALARY_MAX), 100);
    const salaryTo = salaryFrom + getRandomInt(2, 6) * 1000;

    applications.insert({
      applicationDate: getRandomDate(MIN_DATE, new Date()),
      companyName: getRandomArrayItem(COMPANIES),
      roleName: getRandomArrayItem(ROLES),
      status: getRandomArrayItem(STATUSES),
      linkToOffer: 'https://www.google.pl',
      salaryRange: {
        from: salaryFrom,
        to: salaryTo,
        currency: getRandomArrayItem(CURRENCIES),
        contractType: getRandomArrayItem(CONTRACT_TYPES),
      },
    });
  };

  const generateApplications = (quantity: number): void => {
    for (let i = 0; i < quantity; i++) {
      generateOneApplication();
    }
  };

  const generateDatabase = (config: GeneratorConfig): void => {
    if (!isGenerated) {
      dropDatabase();
      generateApplications(config.quantities.applications);
      setIsGenerated(true);
    }
  };

  return {
    isGenerated,
    generateDatabase,
  };
};

export default useGenerator;
