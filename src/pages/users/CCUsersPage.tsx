import { CCPageTitle } from '@/components/typography/CCPageTittle.tsx';
import { Outlet } from 'react-router-dom';

export function CCUsersPage() {
  return <>
    <CCPageTitle>Usuários</CCPageTitle>

    <Outlet />
  </>;
}
