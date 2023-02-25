import { isEmpty } from 'lodash';
import { APPLICATIONS_LIST_QUERY_KEY, useApplicationsQuery } from './ApplicationsList.queries';
import ApplicationsListView from './ApplicationsList.view';
import EmptyState from '~/components/EmptyState';
import Loader from '~/components/Loader';
import { ApplicationStatus } from '~/@types/common';
import useApplicationUpdateMutation from '~/queries/useApplicationUpdateMutation';
import { useQueryClient } from '@tanstack/react-query';

const ApplicationsListController = (): JSX.Element => {
  const queryClient = useQueryClient();
  const { data, isLoading } = useApplicationsQuery();
  const { mutate: updateApplication } = useApplicationUpdateMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: APPLICATIONS_LIST_QUERY_KEY });
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
