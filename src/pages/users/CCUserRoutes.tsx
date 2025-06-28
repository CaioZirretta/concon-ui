import { type RouteObject } from 'react-router-dom';
import { CCEditUserPage } from '@/pages/users/edit-user/CCEditUserPage.tsx';
import { CCDetailsUserPage } from '@/pages/users/details-user/CCDetailsUserPage.tsx';
import { CCUsersPage } from '@/pages/users/CCUsersPage.tsx';
import { CCListUsersPage } from '@/pages/users/list-users/CCListUsersPage.tsx';

export const ccUserRoutes: RouteObject = {
  path: '/users',
  element: <CCUsersPage/>,
  children: [
    { index: true, element: <CCListUsersPage/> },
    { path: 'details/:id', element: <CCDetailsUserPage/> },
    { path: 'edit/:id', element: <CCEditUserPage/> },
  ]
};
