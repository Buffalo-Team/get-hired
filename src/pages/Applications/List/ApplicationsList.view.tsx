import { Application } from '~/@types/common';
import ApplicationTile from '~/components/ApplicationTile';
import { styles } from './ApplicationsList.styles.css';

interface Props {
  applications: Application[];
}

const ApplicationsListView = ({ applications }: Props) => {
  return (
    <div className={styles.root}>
      <div className={styles.options}>TODO: Options</div>
      <main className={styles.list}>
        {applications.map((application) => (
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
