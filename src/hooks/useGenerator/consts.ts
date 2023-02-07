import { add } from 'date-fns';
import { ApplicationStatus, ContractType, Currency } from '~/@types/common';

export const MIN_DATE = add(new Date(), { years: -2 });
export const SALARY_MIN = 4000;
export const SALARY_MAX = 20000;

export const COMPANIES = [
  'Microsoft',
  'Tesla',
  'Samsung Electronics',
  'Walt Disney Co',
  'Coca-Cola Co',
  'SpaceX',
  'Universal Pictures',
  'Marvel Studios',
  '20th Century Fox',
  'Apple',
  'Samsung Electronics',
];

export const ROLES = [
  'React Developer',
  'Python Developer',
  'Java Developer',
  'UI/UX Designer',
  'DevOps',
  'Fullstack Developer',
  'QA Engineer',
];

export const STATUSES = [
  ApplicationStatus.Accepted,
  ApplicationStatus.Archived,
  ApplicationStatus.Hired,
  ApplicationStatus.InProgress,
  ApplicationStatus.Rejected,
  ApplicationStatus.Sent,
];

export const CURRENCIES = [Currency.EUR, Currency.GBP, Currency.PLN, Currency.USD];
export const CONTRACT_TYPES = [
  ContractType.B2B,
  ContractType.ContractOfEmployment,
  ContractType.MandateContract,
];
