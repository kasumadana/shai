import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    // Wrapper utama dengan tinggi minimal setara layar dan warna latar tema
    <main className="min-h-screen bg-soft-cream">
      
      {/* Navigasi Atas */}
      <Navbar />
      
      {/* Bagian Hero (Banner Utama) */}
      <HeroSection />
      
      {/* Bagian Daftar Fitur */}
      <FeaturesSection />

      {/* Kaki Halaman */}
      <Footer />
    </main>
  )
}