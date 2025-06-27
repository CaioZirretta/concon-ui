import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.tsx';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu.tsx';
import { user } from '@/pages/users/mocks/user.mock.ts';
import { SidebarTrigger } from '@/components/ui/sidebar.tsx';
import { MailIcon } from 'lucide-react';

export function CCHeader() {
  return <header className="flex items-center justify-between fixed top-0 z-50 w-full px-6 py-3 bg-background shadow">
    <SidebarTrigger className="scale-150 cursor-pointer"></SidebarTrigger>

    <div className="flex items-center gap-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <MailIcon className="size-8 bg-accent p-1 rounded-sm cursor-pointer"></MailIcon>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Notificações</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem className="cursor-pointer"><span className="font-bold">2</span> Novas Reservas</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer"><span className="font-bold">1</span> Novo Anúncio</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer"><span className="font-bold">4</span> Pagamentos Pendentes</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="cursor-default">{user.name}</div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="size-12 cursor-pointer border-2">
            <AvatarImage></AvatarImage>
            <AvatarFallback>?</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem className="cursor-pointer">Perfil</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator/>
          <DropdownMenuGroup>
            <DropdownMenuItem className="cursor-pointer">Sair</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>

  </header>
}
