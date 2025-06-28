import { useRoutes } from 'react-router-dom';
import { CCHomePage } from '@/pages/home/CCHomePage.tsx';
import { CCNotFoundPage } from '@/pages/notfound/CCNotFoundPage.tsx';
import { ccUserRoutes } from '@/pages/users/CCUserRoutes.tsx';

export function CCRoutes() {
  return useRoutes([
    { path: '/', element: <CCHomePage /> },
    { path: '/home', element: <CCHomePage /> },
    ccUserRoutes,
    { path: '*', element: <CCNotFoundPage /> }
  ]);
}
