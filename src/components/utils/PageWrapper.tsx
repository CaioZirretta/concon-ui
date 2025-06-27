import { useSidebar } from '@/components/ui/sidebar.tsx';
import { cn } from '@/lib/utils/utils.ts';

export type PageWrapperProps = {
  children: React.ReactNode,
  className?: string
}

export function CCPageWrapper({ children, className }: PageWrapperProps) {
  const sidebar = useSidebar();
  return <section className={cn(className, 'mt-10 p-6')} onClick={()=> sidebar.setOpen(false)}>{children}</section>;
}
