import { useState } from 'react';
import type { ListedUser } from '@/pages/users/types/User.type.ts';
import { userList } from '@/pages/users/mocks/user.mock.ts';
import { useNavigate } from 'react-router-dom';

export const useListUsersPage =  () => {
  const [users, setUsers] = useState<ListedUser[]>(userList);
  const navigate = useNavigate();

  function toggleActive(id: string) {
    return () => setUsers(users.map(user => user.id === id ? { ...user, isActive: !user.isActive } : user));
  }

  function navigateTo(path: string, id?: string) {
    return () => navigate(path, { state: id });
  }

  return { users, toggleActive, navigateTo };
}
