import { type RouteObject } from 'react-router-dom';
import { EditUserPage } from '@/pages/users/components/edit-user/EditUserPage.tsx';
import { DetailsUserPage } from '@/pages/users/components/details-user/DetailsUserPage.tsx';
import { UsersPage } from '@/pages/users/UsersPage.tsx';
import { ListUsersPage } from '@/pages/users/components/list-users/ListUsersPage.tsx';

export const userRoutes: RouteObject = {
  path: '/users',
  element: <UsersPage/>,
  children: [
    { index: true, element: <ListUsersPage/> },
    { path: 'details/:id', element: <DetailsUserPage/> },
    { path: 'edit/:id', element: <EditUserPage/> },
  ]
};
