import { TFunction } from 'i18next';
import { isNil, isString, isUndefined } from 'lodash';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { InterpolatedTranslationKey, TranslationKey } from './Translate.types';
import { commonTranslationKeys, profileTranslationKeys } from './translations/translationKeys';

type Keys = keyof typeof commonTranslationKeys | keyof typeof profileTranslationKeys;

type TranslatedText = {
  text: string;
};

type TranslatableText = TranslationKey | InterpolatedTranslationKey | TranslatedText;

type TRANSLATE_RESULT<T> = T extends undefined ? undefined : string;

type TranslateFunction = <T extends TranslatableText | undefined>(
  translatableText: T,
) => TRANSLATE_RESULT<T>;

const isTranslatedText = (text: TranslatableText | undefined): text is TranslatedText => {
  if (isNil(text)) {
    return false;
  }
  const casted = text as TranslatedText;
  return !isUndefined(casted.text);
};

const isInterpolatedTranslationKey = (
  text: TranslatableText | undefined,
): text is InterpolatedTranslationKey => {
  if (isNil(text)) {
    return false;
  }
  const casted = text as InterpolatedTranslationKey;
  return !isUndefined(casted.key);
};

const translateText = <T extends TranslatableText | undefined>(
  translatableText: T,
  t: TFunction,
): TRANSLATE_RESULT<T> => {
  if (isTranslatedText(translatableText)) {
    return translatableText.text as TRANSLATE_RESULT<T>;
  }
  if (isString(translatableText)) {
    return t(translatableText, `Translation not found: ${translatableText}`) as TRANSLATE_RESULT<T>;
  }

  if (isInterpolatedTranslationKey(translatableText)) {
    const { key, interpolationMap } = translatableText;
    return t(key as Keys, interpolationMap) as TRANSLATE_RESULT<T>;
  }
  return undefined as TRANSLATE_RESULT<T>;
};

const useTranslate = () => {
  const { t } = useTranslation();
  return useCallback<TranslateFunction>(
    (translatableText) => translateText(translatableText, t),
    [t],
  );
};

type TranslateProps = {
  children: TranslatableText;
};

export const Translate = ({ children }: TranslateProps): JSX.Element => {
  const translate = useTranslate();
  return <>{translate(children)}</>;
};
