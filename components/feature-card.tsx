import Link from "next/link"
import { MessageCircle, Magnet as Magnifier, Compass } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon: "chat" | "detector" | "adventure" // Membatasi pilihan ikon agar sesuai desain
  href: string
  rotationDirection: "left" | "right"     // Mengatur arah kemiringan kartu
  delay?: number                          // Untuk efek animasi muncul bertahap
}

export function FeatureCard({ title, description, icon, href, rotationDirection, delay = 0 }: FeatureCardProps) {
  // Peta ikon berdasarkan prop 'icon'
  const icons = {
    chat: <MessageCircle className="w-16 h-16" />,
    detector: <Magnifier className="w-16 h-16" />,
    adventure: <Compass className="w-16 h-16" />,
  }

  // Menentukan kelas CSS untuk rotasi (miring ke kiri atau kanan)
  // Memberikan efek 'scrapbook' yang tidak kaku
  const rotationClass = rotationDirection === "left" ? "hover:-rotate-2 -rotate-1" : "hover:rotate-2 rotate-1"

  // Peta warna latar belakang ikon
  const bgColors = {
    chat: "bg-rust-orange",
    detector: "bg-forest-green",
    adventure: "bg-rust-orange-light",
  }

  return (
    <Link href={href}>
      {/* Container Luar: Menangani hover dan animasi rotasi */}
      <div
        className={`group cursor-pointer h-full transition-all duration-300 transform ${rotationClass} hover:shadow-xl hover:scale-105`}
        style={{
          animationDelay: `${delay}ms`, // Delay animasi masuk
        }}
      >
        {/* Container Dalam: Menangani styling kartu (border, background, rounded corners) */}
        <div className="bg-warm-white rounded-3xl p-8 shadow-lg border-4 border-soft-cream-dark/20 relative overflow-hidden h-full flex flex-col justify-between min-h-80">
          
          {/* Elemen Dekoratif: Lingkaran di pojok kanan atas */}
          <div className={`absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-10 ${bgColors[icon]}`} />

          {/* Ikon Fitur dengan latar belakang kotak berwarna */}
          <div
            className={`${bgColors[icon]} w-20 h-20 rounded-2xl flex items-center justify-center mb-4 text-white shadow-md group-hover:shadow-lg transition-shadow relative z-10`}
          >
            {icons[icon]}
          </div>

          {/* Konten Teks: Judul & Deskripsi */}
          <div className="relative z-10 flex-1 flex flex-col">
            <h3 className="text-2xl font-black text-text-dark mb-3 group-hover:text-rust-orange transition-colors">
              {title}
            </h3>
            <p className="text-base text-text-dark/70 leading-relaxed font-medium flex-1">{description}</p>
          </div>

          {/* Tombol Panah (Call to Action) */}
          <div className="mt-6 inline-flex items-center gap-2 font-bold text-rust-orange group-hover:gap-4 transition-all">
            <span>Jelajahi</span>
            <span className="text-xl">→</span>
          </div>
        </div>
      </div>
    </Link>
  )
}