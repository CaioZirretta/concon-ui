import { useSidebar } from '@/components/ui/sidebar.tsx';

export type RouteWrapperProps = {
  children: React.ReactNode,
  className?: string
}

export function RouteWrapper({ children, className }: RouteWrapperProps) {
  const sidebar = useSidebar();
  return <div className={className} onClick={()=> sidebar.setOpen(false)}>{children}</div>;
}
