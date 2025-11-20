import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      
      {/* 1. Pemisah Bentuk Gelombang (SVG Wave Separator) */}
      {/* Memberikan transisi halus antara konten halaman dan footer */}
      <div className="bg-soft-cream text-secondary">
        <svg
          viewBox="0 0 1440 120"
          fill="currentColor"
          className="block -mb-1"
        >
          <path d="M0,64 C240,112,480,112,720,64 S1200,16,1440,64 L1440,120 L0,120 Z"></path>
        </svg>
      </div>

      {/* 2. Konten Grid Utama */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          
          {/* Kolom 1: Info Shai (dalam kartu miring ke kiri) */}
          <Card className="bg-card shadow-lg transform -rotate-2 border-none">
            <CardContent className="p-6">
              <Image
                src="/shai-logo.png"
                alt="Logo Shai"
                width={120}
                height={40}
                className="mb-4"
              />
              <p className="text-sm font-nunito text-card-foreground">
                Shai adalah teman AI-mu, sebuah perisai digital yang dirancang untuk membantumu belajar tentang keamanan internet dengan cara yang aman dan menyenangkan.
              </p>
            </CardContent>
          </Card>

          {/* Kolom 2: Menu Navigasi (dalam kartu miring ke kanan) */}
          <Card className="bg-card shadow-lg transform rotate-1 border-none">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4 text-primary">
                Jelajahi Shai
              </h3>
              <nav>
                <ul className="space-y-3 font-nunito text-card-foreground">
                  <li><Link href="/" className="hover:text-primary transition-colors">Beranda</Link></li>
                  <li><Link href="/chat" className="hover:text-primary transition-colors">Tanya Shai</Link></li>
                  <li><Link href="/detector" className="hover:text-primary transition-colors">Cek Pesan</Link></li>
                  <li><Link href="/adventure" className="hover:text-primary transition-colors">Petualangan</Link></li>
                </ul>
              </nav>
            </CardContent>
          </Card>

          {/* Kolom 3: Maskot Shai (Hanya tampil di desktop) */}
          <div className="flex justify-center items-center">
            <Image
              src="/shai-smile.png" 
              alt="Maskot Shai si Panda Merah"
              width={240}
              height={240}
              className="hidden md:block" 
            />
          </div>
        </div>

        {/* 3. Hak Cipta */}
        <div className="text-center mt-16 pt-8 border-t border-primary/10 text-muted-foreground">
          <p className="font-bold text-lg mb-1 text-primary">Menjelajah Dunia Digital dengan Aman.</p>
          <p className="text-sm">© 2025 Shai. Semua Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}