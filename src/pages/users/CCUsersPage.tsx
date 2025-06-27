import { CCUserRoutes } from '@/pages/users/CCUserRoutes.tsx';
import { CCPageTitle } from '@/components/typography/CCPageTittle.tsx';

export function CCUsersPage() {
  return <>
    <CCPageTitle>Usuários</CCPageTitle>
    
    <CCUserRoutes />
  </>;
}
