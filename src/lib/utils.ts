import { type ClassValue,clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatTimeLeft(milliseconds: number): string {
  const seconds = Math.ceil(milliseconds / 1000);
  
  if (seconds >= 60) {
    const minutes = Math.ceil(seconds / 60);
    return `${minutes} minute${minutes === 1 ? '' : 's'} left`;
  }
  
  return `${seconds} second${seconds === 1 ? '' : 's'} left`;
}
