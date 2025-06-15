import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar.tsx';
import {
  BanknoteIcon,
  BookUserIcon,
  Building2Icon,
  DrumIcon,
  FenceIcon, HouseIcon,
  MessagesSquareIcon,
  SquareChartGantt,
  UsersIcon
} from 'lucide-react';

export function CCSidebar() {
  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader>Teste</SidebarHeader>
      <SidebarContent className="pt-8">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="cursor-pointer" isActive={true}>
                  <HouseIcon/>
                  <h2>Início</h2>
                </SidebarMenuButton>
                <SidebarMenuButton className="cursor-pointer">
                  <UsersIcon/>
                  <h2>Usuários</h2>
                </SidebarMenuButton>
                <SidebarMenuButton className="cursor-pointer">
                  <Building2Icon/>
                  <h2>Unidades</h2>
                </SidebarMenuButton>
                <SidebarMenuButton className="cursor-pointer">
                  <BookUserIcon/>
                  <h2>Moradores</h2>
                </SidebarMenuButton>
                <SidebarMenuButton className="cursor-pointer">
                  <UsersIcon/>
                  <h2>Colaboradores</h2>
                </SidebarMenuButton>
                <SidebarMenuButton className="cursor-pointer">
                  <DrumIcon/>
                  <h2>Área Comum</h2>
                </SidebarMenuButton>
                <SidebarMenuButton className="cursor-pointer">
                  <BookUserIcon/>
                  <h2>Visitantes</h2>
                </SidebarMenuButton>
                <SidebarMenuButton className="cursor-pointer">
                  <SquareChartGantt/>
                  <h2>Anúncios</h2>
                </SidebarMenuButton>
                <SidebarMenuButton className="cursor-pointer">
                  <FenceIcon/>
                  <h2>Serviços</h2>
                </SidebarMenuButton>
                <SidebarMenuButton className="cursor-pointer">
                  <BanknoteIcon/>
                  <h2>Financeiro</h2>
                </SidebarMenuButton>
                <SidebarMenuButton className="cursor-pointer">
                  <MessagesSquareIcon/>
                  <h2>Comunicação</h2>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter/>
    </Sidebar>
  );
}
