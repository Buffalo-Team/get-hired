import Text from '~/components/Text';
import useI18n from '~/hooks/useI18n';
import styles from './styles.css';

interface Props {
  href: string;
}

const Link = ({ href }: Props) => {
  const { t } = useI18n('applications');

  return (
    <a href={href}>
      <Text variant='small' className={styles.link}>
        {t('linkToOffer')}
      </Text>
    </a>
  );
};

export default Link;
