import { isEmpty } from 'lodash';
import { useApplicationsQuery } from './queries';
import ApplicationsListView from './ApplicationsListView';

const ApplicationsListController = (): JSX.Element => {
  const { data, isLoading } = useApplicationsQuery();

  return <ApplicationsListView applications={data} isLoading={isLoading} isEmpty={isEmpty(data)} />;
};

export default ApplicationsListController;
