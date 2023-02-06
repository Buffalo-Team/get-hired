import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enCommon from './translations/en/common';
import enApplications from './translations/en/applications';
import plCommon from './translations/pl/common';
import plApplications from './translations/pl/applications';

export const defaultNS = 'translation';

export const resources = {
  en: {
    translation: enCommon,
    applications: enApplications,
  },
  pl: {
    translation: plCommon,
    applications: plApplications,
  },
} as const;

i18n.use(initReactI18next).init({
  defaultNS,
  resources,
  lng: 'en',
  fallbackLng: 'en',
  ns: ['translation', 'applications'],
  interpolation: {
    escapeValue: false,
  },
});
