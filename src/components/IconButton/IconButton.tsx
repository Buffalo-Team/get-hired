import classNames from 'classnames';
import { styles } from './IconButton.styles.css';

type Props = {
  className?: string;
  children: JSX.Element;
  onClick?: () => void;
};

const IconButton = ({ className, children, onClick }: Props): JSX.Element => {
  return (
    <button className={classNames(className, styles.iconButton)} onClick={onClick}>
      {children}
    </button>
  );
};

export default IconButton;
