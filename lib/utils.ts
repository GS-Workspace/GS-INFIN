import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(num: number, locale?: string) {
  return num.toLocaleString(locale ?? 'en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  })
}
