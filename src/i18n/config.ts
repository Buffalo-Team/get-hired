import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translations as enTranslations } from './translations/en/translations';
import { translations as plTranslations } from './translations/pl/translations';

export const defaultNS = 'translation';

export const resources = {
  en: enTranslations,
  pl: plTranslations,
} as const;

i18n.use(initReactI18next).init({
  defaultNS,
  resources,
  lng: 'en',
  fallbackLng: 'en',
  ns: ['translation', 'profile'],

  interpolation: {
    escapeValue: false,
  },
});
