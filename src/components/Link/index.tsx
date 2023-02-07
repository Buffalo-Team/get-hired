import { useTranslation } from 'react-i18next';
import Text from '~/components/Text';
import styles from './styles.css';

interface Props {
  href: string;
}

const Link = ({ href }: Props) => {
  const { t } = useTranslation('applications');

  return (
    <a href={href}>
      <Text variant='small' className={styles.link}>
        {t('linkToOffer')}
      </Text>
    </a>
  );
};

export default Link;
