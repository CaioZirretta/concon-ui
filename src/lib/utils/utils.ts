import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalizar(valor: string): string {
  if(!valor) return '';
  return valor.charAt(0).toUpperCase() + valor.slice(1);
}
