import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enCommon from './translations/en/common';
import enProfile from './translations/en/profile';
import plCommon from './translations/pl/common';
import plProfile from './translations/pl/profile';

export const namespaces = ['translation', 'profile'] as const;

export const defaultNS = 'translation';

export const resources = {
  en: {
    translation: enCommon,
    profile: enProfile,
  },
  pl: {
    translation: plCommon,
    profile: plProfile,
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
