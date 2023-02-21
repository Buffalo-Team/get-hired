import { QueryKey, useQuery } from '@tanstack/react-query';
import { Application } from '~/@types/common';
import useDatabase from '~/hooks/useDatabase';

export const APPLICATIONS_LIST_QUERY_KEY: QueryKey = ['APPLICATIONS_LIST'];

export const useApplicationsQuery = () => {
  const { applications } = useDatabase();

  return useQuery<Application[]>({
    queryKey: APPLICATIONS_LIST_QUERY_KEY,
    queryFn: () => applications.get(),
  });
};
