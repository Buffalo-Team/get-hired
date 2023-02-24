import Text from '~/components/Text';
import { styles } from './PageIcon.styles.css';
import { PageIconConfig } from './PageIcon.types';

type Props = Omit<PageIconConfig, 'id'>;

const PageIconView = ({ label, Icon, onClick }: Props): JSX.Element => (
  <div className={styles.pageIcon} onClick={onClick}>
    <Icon />
    <Text variant='menu' className={styles.label}>
      {label}
    </Text>
  </div>
);

export default PageIconView;
