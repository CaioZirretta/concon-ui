import { useRoutes } from 'react-router-dom';
import { HomePage } from '@/pages/home/HomePage.tsx';
import { NotFoundPage } from '@/pages/notfound/NotFoundPage.tsx';
import { userRoutes } from '@/pages/users/UserRoutes.tsx';

export function Routes() {
  return useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/home', element: <HomePage /> },
    userRoutes,
    { path: '*', element: <NotFoundPage /> }
  ]);
}
