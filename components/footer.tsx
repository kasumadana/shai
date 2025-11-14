// Isi untuk: components/footer.tsx

import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card' // Kita gunakan Card dari v0!

export function Footer() {
  return (
    <footer className="bg-[hsl(var(--shai-cream))] text-[hsl(var(--shai-brown))]">
      {/* 1. Pembatas Bentuk Gelombang Asimetris */}
      <div className="bg-transparent text-[hsl(var(--shai-cream))]">
        <svg
          viewBox="0 0 1440 120"
          fill="currentColor"
          className="block -mb-1"
        >
          <path d="M0,64 C240,112,480,112,720,64 S1200,16,1440,64 L1440,120 L0,120 Z"></path>
        </svg>
      </div>

      {/* 2. Konten Utama Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          
          {/* Kolom 1: Deskripsi Shai (Gaya Catatan) */}
          <Card className="bg-white shadow-lg transform -rotate-2 border-none">
            <CardContent className="p-6">
              <Image
                src="/shai-logo.png" // PASTIKAN NAMA FILE LOGO ANDA BENAR
                alt="Logo Shai"
                width={120}
                height={40}
                className="mb-4"
              />
              <p className="text-sm font-nunito">
                Shai adalah teman AI-mu, sebuah perisai digital yang dirancang untuk membantumu belajar tentang keamanan internet dengan cara yang aman dan menyenangkan.
              </p>
            </CardContent>
          </Card>

          {/* Kolom 2: Navigasi (Gaya Catatan) */}
          <Card className="bg-white shadow-lg transform rotate-1 border-none">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4 text-[hsl(var(--shai-rust))]">
                Jelajahi Shai
              </h3>
              <nav>
                <ul className="space-y-3 font-nunito">
                  <li><Link href="/" className="hover:text-[hsl(var(--shai-rust))] transition-colors">Beranda</Link></li>
                  <li><Link href="/chat" className="hover:text-[hsl(var(--shai-rust))] transition-colors">Tanya Shai</Link></li>
                  <li><Link href="/detector" className="hover:text-[hsl(var(--shai-rust))] transition-colors">Cek Pesan</Link></li>
                  <li><Link href="/adventure" className="hover:text-[hsl(var(--shai-rust))] transition-colors">Petualangan</Link></li>
                </ul>
              </nav>
            </CardContent>
          </Card>

          {/* Kolom 3: Maskot (Visual) */}
          <div className="flex justify-center items-center">
            <Image
              src="/shai-smile.png" // PASTIKAN NAMA FILE MASKOT ANDA BENAR
              alt="Maskot Shai si Panda Merah"
              width={240}
              height={240}
              className="hidden md:block" // Hanya tampil di desktop
            />
          </div>
        </div>

        {/* 3. Area Copyright */}
        <div className="text-center mt-16 pt-8 border-t border-[hsl(var(--shai-brown))] border-opacity-20">
          <p className="font-bold text-lg mb-1">Menjelajah Dunia Digital dengan Aman.</p>
          <p className="text-sm opacity-70">© 2025 Shai. Semua Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}