import { BrowserRouter } from 'react-router-dom';
import { CCHeader } from '@/components/layout/header/CCHeader.tsx';
import { SidebarProvider } from '@/components/ui/sidebar.tsx';
import { CCSidebar } from '@/components/layout/sidebar/CCSidebar.tsx';
import { CCRoutes } from '@/CCRoutes.tsx';

export function App() {
  return (
    <BrowserRouter>
      <SidebarProvider className="fixed w-fit" defaultOpen={false}>
        <CCHeader/>
        <CCSidebar/>
      </SidebarProvider>

      <div className="pt-10 pl-12">
        <CCRoutes></CCRoutes>
      </div>
    </BrowserRouter>
  );
}
