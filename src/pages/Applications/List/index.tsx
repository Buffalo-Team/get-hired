import ApplicationTile from '~/components/ApplicationTile';
import Loader from '~/components/Loader';
import { useApplicationsQuery } from './queries';
import { styles } from './styles.css';

const ApplicationsList = () => {
  const { data, isLoading } = useApplicationsQuery();

  return (
    <div className={styles.root}>
      <div className={styles.options}>TODO: Options</div>
      <main className={styles.list}>
        {isLoading && <Loader />}
        {!isLoading &&
          data!.map((application) => (
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

export default ApplicationsList;
