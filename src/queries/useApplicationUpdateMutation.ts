import { useMutation } from '@tanstack/react-query';
import { Application } from '~/@types/common';
import { MutationOptions } from '~/@types/requests';
import useDatabase from '~/hooks/useDatabase';

interface UpdateVariables {
  id: number;
  data: Partial<Application>;
}

const useApplicationUpdateMutation = (
  options?: MutationOptions<Application, unknown, UpdateVariables>,
) => {
  const { applications } = useDatabase();

  return useMutation<Application, unknown, UpdateVariables>({
    mutationKey: ['APPLICATION_UPDATE'],
    mutationFn: ({ id, data }: UpdateVariables) => applications.updateById(id, data),
    ...options,
  });
};

export default useApplicationUpdateMutation;
