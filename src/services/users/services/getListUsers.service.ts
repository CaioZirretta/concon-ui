import { userList } from '@/pages/users/mocks/user.mock.ts';
import type { ListedUser } from '@/pages/users/types/User.type.ts';

export const UsersService = {
  getListUsers: (): Promise<ListedUser[]> => {
    return Promise.resolve(userList);
  }
}
