import useI18n from '~/hooks/useI18n';

const EmptyState = () => {
  const { t } = useI18n();

  return <div>{t('nothingToShow')}</div>;
};

export default EmptyState;
