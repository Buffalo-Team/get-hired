import Text from '~/components/Text';
import useI18n from '~/hooks/useI18n';

const Loader = () => {
  const { t } = useI18n();

  return <Text>{t('loading')}</Text>;
};

export default Loader;
