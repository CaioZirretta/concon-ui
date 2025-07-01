import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table.tsx';
import { userList } from '@/pages/users/mocks/user.mock.ts';
import { CheckIcon, EllipsisIcon, XIcon } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu.tsx';
import { useNavigate } from 'react-router-dom';
import type { UserList } from '@/pages/users/types/User.type.ts';
import { useState } from 'react';
import { capitalizar } from '@/lib/utils/utils.ts';
import { CCListUsersFooter } from '@/pages/users/components/list-users/components/CCListUsersFooter.tsx';

export function CCListUsersPage() {
  const [users, setUsers] = useState<UserList[]>(userList);
  const navigate = useNavigate();

  function toggleActive(id: string) {
    return () => setUsers(users.map(user => user.id === id ? { ...user, isActive: !user.isActive } : user));
  }

  function navigateTo(path: string, id?: string) {
    return () => navigate(path, { state: id });
  }

  return <div>
    <Table className="w-full">
      <TableHeader>
        <TableRow>
          <TableHead >Nome</TableHead>
          <TableHead>E-mail</TableHead>
          <TableHead>Permissões</TableHead>
          <TableHead className="text-center">Ativo</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map(user => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell><a href={'mailto:' + user.email} type='email'>{user.email}</a></TableCell>
            <TableCell>{capitalizar(user.roles[0])}</TableCell>
            <TableCell className="flex align-center justify-center">
              {user.isActive ?
                <CheckIcon className="text-chart-2" size={20}/> :
                <XIcon className="text-destructive" size={20}/>
              }
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <EllipsisIcon className="size-4 cursor-pointer text-primary"></EllipsisIcon>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuGroup>
                    <DropdownMenuItem onClick={navigateTo(`details/${user.id}`, user.id)}>Detalhes</DropdownMenuItem>
                    <DropdownMenuItem onClick={navigateTo(`edit/${user.id}`, user.id)}>Editar</DropdownMenuItem>
                    <DropdownMenuItem onClick={toggleActive(user.id)}>{user.isActive ? 'Inativar' : 'Ativar'}</DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>

    <CCListUsersFooter/>
  </div>;
}
