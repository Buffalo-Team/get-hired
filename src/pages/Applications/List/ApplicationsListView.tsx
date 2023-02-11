import { Application } from '~/@types/common';
import ApplicationTile from '~/components/ApplicationTile';
import EmptyState from '~/components/EmptyState';
import Loader from '~/components/Loader';
import { styles } from './styles.css';

interface Props {
  applications?: Application[];
  isLoading: boolean;
  isEmpty: boolean;
}

const ApplicationsListView = ({ applications, isLoading, isEmpty }: Props) => {
  return (
    <div className={styles.root}>
      <div className={styles.options}>TODO: Options</div>
      <main className={styles.list}>
        {isEmpty && <EmptyState />}
        {isLoading && <Loader />}
        {!!applications &&
          applications.map((application) => (
            <ApplicationTile
              key={application.id}
              companyName={application.companyName}
              roleName={application.roleName}
              status={application.status}
              salary={{
                from: application.salaryRange.from,
                to: application.salaryRange.to,
              }}
              linkToOffer={application.linkToOffer}
              createdAt={application.createdAt}
            />
          ))}
      </main>
    </div>
  );
};

export default ApplicationsListView;
