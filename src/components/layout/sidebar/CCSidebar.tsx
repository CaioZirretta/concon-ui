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
  FenceIcon,
  HouseIcon,
  MessagesSquareIcon,
  SquareChartGantt,
  UsersIcon
} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export function CCSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  function isActivePath(path: string): boolean {
    return location.pathname === path;
  }

  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader>Teste</SidebarHeader>
      <SidebarContent className="pt-8">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="cursor-pointer" isActive={isActivePath('/')} onClick={() => navigate('/')}>
                  <HouseIcon/>
                  <h2>Início</h2>
                </SidebarMenuButton>
                <SidebarMenuButton className="cursor-pointer" isActive={isActivePath('/users')} onClick={() => navigate('/users')}>
                  <UsersIcon/> <h2>Usuários</h2>
                </SidebarMenuButton>
                <SidebarMenuButton className="cursor-pointer" isActive={isActivePath('/units')} onClick={() => navigate('/units')}>
                  <Building2Icon/> <h2>Unidades</h2>
                </SidebarMenuButton>
                <SidebarMenuButton className="cursor-pointer" isActive={isActivePath('/residents')} onClick={() => navigate('/residents')}>
                  <BookUserIcon/> <h2>Moradores</h2>
                </SidebarMenuButton>
                <SidebarMenuButton className="cursor-pointer" isActive={isActivePath('/employees')} onClick={() => navigate('/employees')}>
                  <UsersIcon/> <h2>Colaboradores</h2>
                </SidebarMenuButton>
                <SidebarMenuButton className="cursor-pointer" isActive={isActivePath('/common-area')} onClick={() => navigate('/common-area')}>
                  <DrumIcon/> <h2>Área Comum</h2>
                </SidebarMenuButton>
                <SidebarMenuButton className="cursor-pointer" isActive={isActivePath('/visitors')} onClick={() => navigate('/visitors')}>
                  <BookUserIcon/> <h2>Visitantes</h2>
                </SidebarMenuButton>
                <SidebarMenuButton className="cursor-pointer" isActive={isActivePath('/ads')} onClick={() => navigate('/ads')}>
                  <SquareChartGantt/> <h2>Anúncios</h2>
                </SidebarMenuButton>
                <SidebarMenuButton className="cursor-pointer" isActive={isActivePath('/services')} onClick={() => navigate('/services')}>
                  <FenceIcon/> <h2>Serviços</h2>
                </SidebarMenuButton>
                <SidebarMenuButton className="cursor-pointer" isActive={isActivePath('/financial')} onClick={() => navigate('/financial')}>
                  <BanknoteIcon/> <h2>Financeiro</h2>
                </SidebarMenuButton>
                <SidebarMenuButton className="cursor-pointer" isActive={isActivePath('/communication')} onClick={() => navigate('/communication')}>
                  <MessagesSquareIcon/> <h2>Comunicação</h2>
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
