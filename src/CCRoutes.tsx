import { useRoutes } from 'react-router-dom';
import { CCHomePage } from '@/pages/home/CCHomePage.tsx';
import { CCNotFoundPage } from '@/pages/notfound/CCNotFoundPage.tsx';
import { CCUsersPage } from './pages/users/CCUsersPage';

export function CCRoutes() {
  return useRoutes([
    { path: '/', element: <CCHomePage /> },
    { path: '/home', element: <CCHomePage /> },
    { path: '/users', element: <CCUsersPage /> },
    { path: '*', element: <CCNotFoundPage /> }
  ]);
}
