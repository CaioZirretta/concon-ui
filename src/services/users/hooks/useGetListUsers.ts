import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import { UsersService } from '@/services/users/services/getListUsers.service.ts';

export const useGetListUsers = (options?: UseQueryOptions) => {
  return useQuery({
    queryKey: ['get-list-users'],
    queryFn: () => UsersService.getListUsers(),
    ...options
  });
};
