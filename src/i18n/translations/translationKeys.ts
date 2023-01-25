import { createScopedTranslationKeys } from '../translationHelper';
import { translations } from './en/translations';

export const commonTranslationKeys = createScopedTranslationKeys(
  translations,
  'common',
) as typeof translations.common;
export const profileTranslationKeys = createScopedTranslationKeys(
  translations,
  'profile',
) as typeof translations.profile;
