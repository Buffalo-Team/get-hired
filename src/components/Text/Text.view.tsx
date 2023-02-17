import { styles } from './Text.styles.css';
import classNames from 'classnames';
import { ReactNode } from 'react';

export interface Props {
  children: ReactNode;
  variant?: keyof typeof styles.variant;
  className?: string;
}

const Text = ({ variant = 'normal', className, children }: Props) => {
  return (
    <div className={classNames(styles.text, styles.variant[variant], className)}>{children}</div>
  );
};

export default Text;
