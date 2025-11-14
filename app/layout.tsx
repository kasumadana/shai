import type React from "react"
import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" })

export const metadata: Metadata = {
  title: "Shai - Belajar Aman di Internet",
  description: "Aplikasi edukasi interaktif untuk anak-anak belajar digital safety dengan maskot Panda Merah yang lucu",
  icons: {
    icon: [
      {
        url: "/icon-64x64.png", // pastikan file ada di folder public/
        type: "image/png",
        sizes: "64x64",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`${_nunito.className} font-sans antialiased bg-soft-cream`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
