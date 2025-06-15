import { useRoutes } from 'react-router-dom';
import { HomePage } from '@/pages/home/HomePage.tsx';
import { CCNotFound } from '@/components/utils/CCNotFound.tsx';

export function CCRoutes() {
  const routes = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '*', element: <CCNotFound /> }
  ])

  return routes;
}
