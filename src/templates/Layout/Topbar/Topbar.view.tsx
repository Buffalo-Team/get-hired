import classNames from 'classnames';
import Text from '~/components/Text';
import { styles } from './Topbar.styles.css';

interface Props {
  title?: string;
  isVisible: boolean;
}

const TopbarView = ({ title, isVisible }: Props): JSX.Element => {
  return (
    <nav className={classNames(styles.topbar, { [styles.topbarHidden]: !isVisible })}>
      {title && <Text className={styles.title}>{title}</Text>}
    </nav>
  );
};

export default TopbarView;
