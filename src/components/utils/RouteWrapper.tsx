import { useSidebar } from '@/components/ui/sidebar.tsx';
import { cn } from '@/lib/utils/utils.ts';

export type RouteWrapperProps = {
  children: React.ReactNode,
  className?: string
}

export function RouteWrapper({ children, className }: RouteWrapperProps) {
  const sidebar = useSidebar();
  return <section className={cn(className, 'mt-10')} onClick={()=> sidebar.setOpen(false)}>{children}</section>;
}
