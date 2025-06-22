import { useRoutes } from 'react-router-dom';
import { HomePage } from '@/pages/home/HomePage.tsx';
import { CCNotFoundPage } from '@/pages/notfound/CCNotFoundPage.tsx';

export function CCRoutes() {
  return useRoutes([
    { path: '/home', element: <HomePage /> },
    { path: '*', element: <CCNotFoundPage /> }
  ]);
}
