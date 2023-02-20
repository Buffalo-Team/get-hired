import { isEmpty } from 'lodash';
import { useApplicationsQuery } from './ApplicationsList.queries';
import ApplicationsListView from './ApplicationsList.view';
import EmptyState from '~/components/EmptyState';
import Loader from '~/components/Loader';
import { ApplicationStatus } from '~/@types/common';
import useApplicationUpdateMutation from '~/queries/useApplicationUpdateMutation';

const ApplicationsListController = (): JSX.Element => {
  const { data, isLoading, refetch } = useApplicationsQuery();
  const { mutate: updateApplication } = useApplicationUpdateMutation({
    onSuccess: () => {
      refetch();
    },
  });

  const onStatusChange = (applicationId: number, newStatus: ApplicationStatus) => {
    updateApplication({ id: applicationId, data: { status: newStatus } });
  };

  if (isLoading) {
    return <Loader />;
  }

  if (!data || isEmpty(data)) {
    return <EmptyState />;
  }

  return <ApplicationsListView applications={data} onStatusChange={onStatusChange} />;
};

export default ApplicationsListController;
