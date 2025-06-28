import { cn } from '@/lib/utils/utils.ts';
import type { ReactNode } from 'react';

type CCDetailsUserFieldProps = {
  fieldName: string,
  fieldValue?: string,
  className?: string,
  children?: ReactNode
}

export function CCDetailsUserField({ fieldName, fieldValue, className, children }: CCDetailsUserFieldProps) {
  return <div className={cn(className, 'flex flex-col gap-2 w-[33%]')}>
    <span className="font-bold text-lg">{fieldName}</span>
    {children ?? <span>{fieldValue}</span>}
  </div>;
}
