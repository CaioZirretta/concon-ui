import { CCRoutes } from '@/CCRoutes.tsx';
import { CCHeader } from '@/components/layout/header/CCHeader.tsx';
import { CCSidebar } from '@/components/layout/sidebar/CCSidebar.tsx';
import { SidebarProvider } from '@/components/ui/sidebar.tsx';
import { BrowserRouter } from 'react-router-dom';
import { CCPageWrapper } from './components/utils/PageWrapper';

export function App() {
  return (
    <BrowserRouter>
      <SidebarProvider className="fixed w-fit" defaultOpen={false}>
        <CCHeader/>
        <CCSidebar/>

        <CCPageWrapper>
          <CCRoutes></CCRoutes>
        </CCPageWrapper>
      </SidebarProvider>
    </BrowserRouter>
  );
}
