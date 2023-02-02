import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enCommon from './translations/en/common';
import enProfile from './translations/en/profile';
import enApplications from './translations/en/applications';
import plCommon from './translations/pl/common';
import plProfile from './translations/pl/profile';
import plApplications from './translations/pl/applications';

export const defaultNS = 'translation';

export const resources = {
  en: {
    translation: enCommon,
    profile: enProfile,
    applications: enApplications,
  },
  pl: {
    translation: plCommon,
    profile: plProfile,
    applications: plApplications,
  },
} as const;

i18n.use(initReactI18next).init({
  defaultNS,
  resources,
  lng: 'en',
  fallbackLng: 'en',
  ns: ['translation', 'profile', 'applications'],

  interpolation: {
    escapeValue: false,
  },
});
