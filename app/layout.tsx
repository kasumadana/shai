import type React from "react"
import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// --- Konfigurasi Font ---
// Menggunakan font 'Nunito' yang memiliki kesan bulat, bersahabat, dan ramah anak.
// 'subsets' latin memastikan karakter standar termuat dengan cepat.
const _nunito = Nunito({ 
  subsets: ["latin"], 
  variable: "--font-nunito" 
})

// --- Metadata Global (Root) ---
// Konfigurasi ini mengatur bagaimana website muncul di Google, Tab Browser, dan Media Sosial.
export const metadata: Metadata = {
  // 1. MetadataBase (SANGAT PENTING):
  // Menetapkan URL dasar untuk menyelesaikan semua link relatif (seperti gambar OG).
  // Tanpa ini, Next.js akan bingung saat membuat link gambar untuk sosmed.
  // Menggunakan environment variable untuk produksi, atau localhost untuk development.
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),

  // 2. Judul & Template
  title: {
    default: "Shai - Sahabat Aman Internet", // Judul default jika halaman tidak punya judul sendiri
    template: "%s | Shai" // Template otomatis. "%s" akan diganti dengan judul halaman anak (misal: "Tanya Shai")
  },
  description: "Game edukasi interaktif untuk anak-anak belajar keamanan digital bersama maskot Panda Merah.",

  // 3. Ikon (Favicon)
  // Menggunakan array untuk mendukung berbagai format. SVG dihapus sesuai permintaan.
  icons: {
    icon: [
      { url: "/icon-64x64.png", sizes: "64x64", type: "image/png" },
    ],
    apple: "/apple-icon.png", // Ikon khusus saat user menambahkan web ke layar utama iPhone/iPad
  },

  // 4. Open Graph (Tampilan saat link dibagikan di WhatsApp/Facebook)
  openGraph: {
    title: "Shai - Yuk Belajar Aman di Internet!",
    description: "Bantu Shai si Panda Merah melawan hoax dan penipuan di dunia maya.",
    url: "/",
    siteName: "Shai Project",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/shai-wave.png", // Gambar ini otomatis digabung dengan metadataBase menjadi URL lengkap
        width: 800,
        height: 600,
        alt: "Shai si Panda Merah melambaikan tangan",
      },
    ],
  },

  // 5. Twitter Card (Tampilan saat link dibagikan di Twitter/X)
  twitter: {
    card: "summary_large_image",
    title: "Shai - Sahabat Aman Internet",
    description: "Belajar digital safety seru untuk anak-anak!",
    images: ["/shai-wave.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      {/* Menerapkan class font ke body agar tersedia di seluruh aplikasi.
          bg-soft-cream: Memberikan warna latar standar aplikasi.
      */}
      <body className={`${_nunito.className} font-sans antialiased bg-soft-cream`}>
        
        {/* Render konten halaman di sini */}
        {children}
        
        {/* Komponen Analytics Vercel (Untuk melacak jumlah pengunjung, opsional) */}
        <Analytics />
      </body>
    </html>
  )
}