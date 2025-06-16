import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem, useSidebar
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

type MenuItem = {
  title: string;
  icon: React.ReactNode;
  path: string;
}

export function CCSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const sidebar = useSidebar();

  const menuItems: MenuItem[] = [
    { title: 'Início', icon: <HouseIcon/>, path: '/home' },
    { title: 'Usuários', icon: <UsersIcon/>, path: '/users' },
    { title: 'Unidades', icon: <Building2Icon/>, path: '/units' },
    { title: 'Moradores', icon: <BookUserIcon/>, path: '/residents' },
    { title: 'Colaboradores', icon: <UsersIcon/>, path: '/employees' },
    { title: 'Área Comum', icon: <DrumIcon/>, path: '/commonarea' },
    { title: 'Visitantes', icon: <BookUserIcon/>, path: '/visitors' },
    { title: 'Anúncios', icon: <SquareChartGantt/>, path: '/ads' },
    { title: 'Serviços', icon: <FenceIcon/>, path: '/services' },
    { title: 'Financeiro', icon: <BanknoteIcon/>, path: '/financial' },
    { title: 'Comunicação', icon: <MessagesSquareIcon/>, path: '/communication' },
  ];

  function isActivePath(path: string): boolean {
    return location.pathname.startsWith(path);
  }

  function navigateTo(path: string) {
    navigate(path);
    sidebar.setOpen(false);
  }

  return (
    <Sidebar variant="sidebar" collapsible="icon"
             // onMouseEnter={() => sidebar.setOpen(true)} onMouseLeave={() => sidebar.setOpen(false)}
    >
      <SidebarHeader>Teste</SidebarHeader>
      <SidebarContent className="pt-8">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                {menuItems.map((item) => (
                  <SidebarMenuButton
                    key={item.title}
                    className="cursor-pointer"
                    isActive={isActivePath(item.path)}
                    onClick={() => navigateTo(item.path)}
                  >
                    {item.icon}
                    <h2>{item.title}</h2>
                  </SidebarMenuButton>
                ))}
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter/>
    </Sidebar>
  );
}
