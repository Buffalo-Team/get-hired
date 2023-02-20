import ApplicationStatus from '~/components/ApplicationStatus';
import { styles } from './StatusOption.styles.css';
import { ApplicationStatus as ApplicationStatusEnum } from '~/@types/common';
import theme from '~/theme';
import classNames from 'classnames';

export interface Props {
  status: ApplicationStatusEnum;
  withAside?: boolean;
  withRightSpacing?: boolean;
}

const StatusOption = ({ status, withAside, withRightSpacing }: Props) => {
  return (
    <div
      className={classNames(styles.root, {
        [styles.rightSpacing]: withRightSpacing,
        [styles.leftSpacing]: !withAside,
      })}
    >
      {withAside && (
        <aside className={styles.aside} style={{ backgroundColor: theme.palette.status[status] }} />
      )}
      <ApplicationStatus status={status} />
    </div>
  );
};

export default StatusOption;
