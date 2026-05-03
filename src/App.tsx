import { Routes } from '@/Routes.tsx';
import { CCHeader } from '@/components/layout/header/CCHeader.tsx';
import { CCSidebar } from '@/components/layout/sidebar/CCSidebar.tsx';
import { SidebarProvider } from '@/components/ui/sidebar.tsx';
import { BrowserRouter } from 'react-router-dom';
import { CCPageWrapper } from './components/utils/PageWrapper';

export function App() {
  return (
    <BrowserRouter>
      <SidebarProvider defaultOpen={false}>
        <CCHeader/>
        <CCSidebar/>

        <CCPageWrapper>
          <Routes></Routes>
        </CCPageWrapper>
      </SidebarProvider>
    </BrowserRouter>
  );
}
