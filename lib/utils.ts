import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Fungsi Utilitas 'cn' (Class Name)
 * Menggabungkan fungsionalitas 'clsx' dan 'tailwind-merge'.
 * * 1. clsx: Mengizinkan penggunaan logika kondisional untuk class (misal: { 'bg-red': isError }).
 * 2. tailwind-merge: Membersihkan konflik class Tailwind (misal: 'p-4 p-2' menjadi 'p-2').
 * * @param inputs Daftar class value yang ingin digabungkan
 * @returns String class yang sudah bersih dan digabung
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}