import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enCommon from './translations/common/en';
import enApplications from './translations/applications/en';
import plCommon from './translations/common/pl';
import plApplications from './translations/applications/pl';

export type Namespaces = 'translation' | 'applications';

export const defaultNS: Namespaces = 'translation';

const namespaces: Namespaces[] = ['translation', 'applications'];

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
  ns: namespaces,
  interpolation: {
    escapeValue: false,
  },
});
