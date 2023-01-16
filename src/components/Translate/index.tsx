import { useTranslation } from 'react-i18next';
import { defaultNS, namespaces } from '~/i18n/config';
import { TranslationKeys } from '~/i18n/translations/translations.types';

interface IProps {
  i18n: TranslationKeys; // TODO How to set proper type for this prop?
  ns?: typeof namespaces[number];
}

const Translate = ({ i18n, ns = defaultNS }: IProps) => {
  const { t } = useTranslation(ns);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <>{t(i18n)}</>;
};

export default Translate;
