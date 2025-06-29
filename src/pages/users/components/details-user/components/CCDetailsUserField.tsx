import { cn } from '@/lib/utils/utils.ts';
import type { ReactNode } from 'react';

type CCDetailsUserFieldProps = {
  fieldName: string,
  fieldValue?: string,
  className?: string,
  children?: ReactNode
}

export function CCDetailsUserField({ fieldName, fieldValue, className, children }: CCDetailsUserFieldProps) {
  return <div className={cn(className, 'flex flex-col gap-2 max-w-44 break-after-all')}>
    <span className="font-regular text-lg">{fieldName}</span>
    {children ?? <span className="font-light">{fieldValue}</span>}
  </div>;
}
