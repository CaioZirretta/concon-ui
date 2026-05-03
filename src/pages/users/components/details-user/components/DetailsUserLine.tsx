import type { ReactNode } from 'react';
import { cn } from '@/lib/utils/utils.ts';

type DetailsUserLineProps = {
  children: ReactNode
  className?: string,
}

export function DetailsUserLine({children, className}: DetailsUserLineProps) {
  return <div className={cn(className, 'flex-wrap w-full flex gap-x-12 gap-y-8 mt-4 bg-accent p-4 rounded-xl')}>{children}</div>
}
