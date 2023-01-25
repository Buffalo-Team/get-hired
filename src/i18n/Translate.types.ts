export type TranslationKey = string;

export type TranslationInterpolationMap = { [key: string]: unknown };

export type InterpolatedTranslationKey = {
  key: TranslationKey;
  interpolationMap: TranslationInterpolationMap;
};
