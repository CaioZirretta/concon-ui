import { cn } from '@/lib/utils/utils.ts';
import type { ReactNode } from 'react';

type DetailsUserFieldProps = {
  fieldName: string,
  fieldValue?: string,
  className?: string,
  children?: ReactNode
}

export function DetailsUserField({ fieldName, fieldValue, className, children }: DetailsUserFieldProps) {
  return <div className={cn(className, 'flex flex-col gap-2 max-w-44 break-after-all')}>
    <span className="font-regular text-lg">{fieldName}</span>
    {children ?? <span className="font-light">{fieldValue}</span>}
  </div>;
}
