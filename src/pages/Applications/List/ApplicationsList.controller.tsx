import { isEmpty } from 'lodash';
import { useApplicationsQuery } from './ApplicationsList.queries';
import ApplicationsListView from './ApplicationsList.view';
import EmptyState from '~/components/EmptyState';
import Loader from '~/components/Loader';

const ApplicationsListController = (): JSX.Element => {
  const { data, isLoading } = useApplicationsQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (!data || isEmpty(data)) {
    return <EmptyState />;
  }

  return <ApplicationsListView applications={data} />;
};

export default ApplicationsListController;
