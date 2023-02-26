import classNames from 'classnames';
import { ReactNode } from 'react';
import { styles } from './Button.styles.css';

export interface Props {
  children: ReactNode;
  onClick: () => void;
  fullWidth?: boolean;
  variant?: keyof typeof styles.variant;
}

const Button = ({ variant = 'default', fullWidth, children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={classNames(styles.button, styles.variant[variant], {
        [styles.fullWidth]: fullWidth,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
