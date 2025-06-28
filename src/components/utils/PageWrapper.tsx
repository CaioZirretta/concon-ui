import { useSidebar } from '@/components/ui/sidebar.tsx';
import { cn } from '@/lib/utils/utils.ts';
import type { ReactNode } from 'react';

export type PageWrapperProps = {
  children: ReactNode,
  className?: string
}

export function CCPageWrapper({ children, className }: PageWrapperProps) {
  const sidebar = useSidebar();
  return <section
    className={cn(className, 'mt-10 p-6 w-[calc(100vw-3rem)] overflow-y-scroll')}
    onClick={() => sidebar.setOpen(false)}
  >
    {children}
  </section>;
}
