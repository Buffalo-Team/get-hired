import enCommon from './en/common';
import enProfile from './en/profile';

export type TranslationKeys = keyof typeof enCommon | keyof typeof enProfile;
