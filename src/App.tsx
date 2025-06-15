import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from '@/pages/home/HomePage.tsx';
import { CCHeader } from '@/components/layout/header/CCHeader.tsx';
import { SidebarProvider } from '@/components/ui/sidebar.tsx';
import { CCSidebar } from '@/components/layout/sidebar/CCSidebar.tsx';

export function App() {
  return (
    <BrowserRouter>
      <SidebarProvider className="fixed w-fit" defaultOpen={false}>
        <CCHeader/>

        <CCSidebar/>
      </SidebarProvider>

      <div className="pt-10 pl-12">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
