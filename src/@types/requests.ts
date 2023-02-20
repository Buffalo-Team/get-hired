import { UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';

export type QueryOptions<TData, TError = any> = Omit<
  UseQueryOptions<TData, TError>,
  'queryKey' | 'queryFn' | 'initialData'
> & {
  initialData?: () => undefined;
};

export type MutationOptions<TData = any, TError = any, TVariables = any, TContext = any> = Omit<
  UseMutationOptions<TData, TError, TVariables, TContext>,
  'mutationKey' | 'mutationFn'
>;
