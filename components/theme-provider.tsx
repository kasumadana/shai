"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

/**
 * Komponen ThemeProvider
 * ----------------------
 * Membungkus aplikasi dengan 'next-themes' untuk menangani pergantian tema (Light/Dark/System).
 * Komponen ini digunakan di `app/layout.tsx`.
 * * @param children - Komponen anak yang akan dibungkus (biasanya seluruh halaman).
 * @param props - Properti tambahan konfigurasi tema.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}