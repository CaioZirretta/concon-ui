import type { ReactNode } from 'react';
import { cn } from '@/lib/utils/utils.ts';

type CCDetailsUserLineProps = {
  children: ReactNode
  className?: string,
}

export function CCDetailsUserLine({children, className}: CCDetailsUserLineProps) {
  return <div className={cn(className, 'w-fit flex gap-16 mt-8 max-w-[60%]')}>{children}</div>
}
