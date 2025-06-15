import { useRoutes } from 'react-router-dom';
import { HomePage } from '@/pages/home/HomePage.tsx';
import { CCNotFound } from '@/components/utils/CCNotFound.tsx';

export function CCRoutes() {
  return useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '*', element: <CCNotFound /> }
  ]);
}
