import classNames from 'classnames';
import { ReactNode } from 'react';
import { styles } from './Button.styles.css';

export interface Props {
  children: ReactNode;
  onClick: () => void;
  fullWidth?: boolean;
}

const Button = ({ fullWidth, children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={classNames(styles.button, { [styles.fullWidth]: fullWidth })}
    >
      {children}
    </button>
  );
};

export default Button;
