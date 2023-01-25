import {
  InterpolatedTranslationKey,
  TranslationInterpolationMap,
  TranslationKey,
} from './Translate.types';

type TranslationObject = {
  [key: string]: string | TranslationObject;
};

type ProxyTranslationObjectValue = [Array<string>, TranslationObject];

const createNestedLevelProxyHandler = {
  get: (value: ProxyTranslationObjectValue, prop: string): string | ProxyTranslationObjectValue => {
    const [previousResult, target] = value;
    const result = [...previousResult, prop];
    if (typeof target[prop] === 'string') {
      return result.join(':');
    }
    return new Proxy(
      [result, target[prop] as TranslationObject] as ProxyTranslationObjectValue,
      createNestedLevelProxyHandler,
    );
  },
};

export const createScopedTranslationKeys = <T extends TranslationObject>(
  translations: T,
  entry: keyof T,
): T[keyof T] => {
  const scopedTranslations = translations[entry];
  if (typeof scopedTranslations !== 'object') {
    throw new Error('Translations must be an object');
  }

  return new Proxy(scopedTranslations, {
    get: (target: TranslationObject, prop: string): string | ProxyTranslationObjectValue => {
      if (typeof target[prop] === 'string') {
        return `${String(entry)}:${prop}`;
      }
      return new Proxy(
        [[entry, prop], target[prop] as TranslationObject] as ProxyTranslationObjectValue,
        createNestedLevelProxyHandler,
      );
    },
  }) as T[keyof T];
};

export const createInterpolatedTranslationKey = (
  key: TranslationKey,
  interpolationMap: TranslationInterpolationMap,
): InterpolatedTranslationKey => {
  return {
    key: key,
    interpolationMap: interpolationMap,
  };
};
