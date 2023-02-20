import { values } from 'lodash';
import { Application, ApplicationStatus } from '~/@types/common';
import ApplicationTile from '~/components/ApplicationTile';
import { styles } from './ApplicationsList.styles.css';

interface Props {
  applications: Application[];
  onStatusChange: (applicationId: number, newStatus: ApplicationStatus) => void;
}

const ApplicationsListView = ({ applications, onStatusChange }: Props) => {
  return (
    <div className={styles.root}>
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
            availableStatuses={values(ApplicationStatus)}
            onStatusChange={(newStatus) => {
              onStatusChange(application.id, newStatus);
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
