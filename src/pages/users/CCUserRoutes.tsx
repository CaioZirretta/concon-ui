import { useRoutes } from 'react-router-dom';
import { CCEditUserPage } from '@/pages/users/edit-user/CCEditUserPage.tsx';
import { CCNotFoundPage } from '@/pages/notfound/CCNotFoundPage.tsx';
import { CCListUsersPage } from '@/pages/users/list-users/CCListUsersPage.tsx';

export function CCUserRoutes() {
  return useRoutes([
    { path: '/', element: <CCListUsersPage /> },
    { path: '/edit/:id', element: <CCEditUserPage /> },
    { path: '*', element: <CCNotFoundPage /> }
  ])
}
