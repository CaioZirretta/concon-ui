import { type RouteObject } from 'react-router-dom';
import { CCEditUserPage } from '@/pages/users/components/edit-user/CCEditUserPage.tsx';
import { CCDetailsUserPage } from '@/pages/users/components/details-user/CCDetailsUserPage.tsx';
import { CCUsersPage } from '@/pages/users/CCUsersPage.tsx';
import { CCListUsersPage } from '@/pages/users/components/list-users/CCListUsersPage.tsx';

export const ccUserRoutes: RouteObject = {
  path: '/users',
  element: <CCUsersPage/>,
  children: [
    { index: true, element: <CCListUsersPage/> },
    { path: 'details/:id', element: <CCDetailsUserPage/> },
    { path: 'edit/:id', element: <CCEditUserPage/> },
  ]
};
