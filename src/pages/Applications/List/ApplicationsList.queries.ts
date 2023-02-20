import { useQuery } from '@tanstack/react-query';
import { Application } from '~/@types/common';
import useDatabase from '~/hooks/useDatabase';

export const useApplicationsQuery = () => {
  const { applications } = useDatabase();

  return useQuery<Application[]>({
    queryKey: ['APPLICATIONS_LIST'],
    queryFn: () => applications.get(),
  });
};
