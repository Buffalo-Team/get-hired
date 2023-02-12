import classNames from 'classnames';
import Text from '../Text';
import { styles } from './ApplicationTile.styles.css';
import getFormattedTimeDifference from '~/utils/getFormattedTimeDifference';
import { ApplicationStatus as ApplicationStatusEnum } from '~/@types/common';
import ApplicationStatus from '~/components/ApplicationStatus';
import Link from '~/components/Link/Link.view';
import useI18n from '~/hooks/useI18n';

interface Props {
  companyName: string;
  roleName: string;
  status: ApplicationStatusEnum;
  salary: {
    from: number;
    to: number;
  };
  linkToOffer: string;
  createdAt: Date;
  className?: string;
}

const ApplicationTile = ({
  companyName,
  roleName,
  status,
  salary,
  linkToOffer,
  createdAt,
  className,
}: Props) => {
  const { t } = useI18n('applications');

  return (
    <div className={classNames(styles.root, className)}>
      <aside className={classNames(styles.aside, styles[status])} />
      <main className={styles.main}>
        <div className={styles.row}>
          <Text variant='medium'>{companyName}</Text>

          <ApplicationStatus status={status} />
        </div>
        <div className={styles.row}>
          <Text>{roleName}</Text>
          <Text variant='large' className={styles.salary}>
            {t('salary', { from: salary.from, to: salary.to })}
          </Text>
        </div>
        <div className={styles.row}>
          <Link href={linkToOffer} />
          <Text variant='small'>{getFormattedTimeDifference(t, createdAt)}</Text>
        </div>
      </main>
    </div>
  );
};

export default ApplicationTile;
