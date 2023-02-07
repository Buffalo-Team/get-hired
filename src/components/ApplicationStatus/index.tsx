import { ApplicationStatus as ApplicationStatusEnum } from '~/@types/common';
import styles from './styles.css';
import theme from '~/theme';
import useI18n from '~/hooks/useI18n';

interface Props {
  status: ApplicationStatusEnum;
}

const ApplicationStatus = ({ status }: Props) => {
  const { t } = useI18n('applications');

  return (
    <span className={styles.root}>
      <div className={styles.dot} style={{ backgroundColor: theme.palette.status[status] }} />
      <div>{t(`status.${status}`)}</div>
    </span>
  );
};

export default ApplicationStatus;
