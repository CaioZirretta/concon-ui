import { BrowserRouter } from 'react-router-dom';
import { CCHeader } from '@/components/layout/header/CCHeader.tsx';
import { SidebarProvider } from '@/components/ui/sidebar.tsx';
import { CCSidebar } from '@/components/layout/sidebar/CCSidebar.tsx';
import { CCRoutes } from '@/CCRoutes.tsx';
import { RouteWrapper } from '@/components/utils/RouteWrapper.tsx';

export function App() {
  return (
    <BrowserRouter>
      <SidebarProvider className="fixed w-fit" defaultOpen={false}>
        <CCHeader/>
        <CCSidebar/>

        <RouteWrapper className="pt-10">
          <CCRoutes></CCRoutes>
        </RouteWrapper>
      </SidebarProvider>
    </BrowserRouter>
  );
}
