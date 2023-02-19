import ApplicationStatus from '~/components/ApplicationStatus';
import { styles } from './StatusOption.styles.css';
import { ApplicationStatus as ApplicationStatusEnum } from '~/@types/common';
import theme from '~/theme';

export interface Props {
  status: ApplicationStatusEnum;
  withAside?: boolean;
}

const StatusOption = ({ status, withAside }: Props) => {
  return (
    <div className={styles.root}>
      <aside
        className={styles.aside}
        style={{ backgroundColor: withAside ? theme.palette.status[status] : 'transparent' }}
      />
      <ApplicationStatus status={status} />
    </div>
  );
};

export default StatusOption;
