import { FeatureCard } from "./feature-card"

export function FeaturesSection() {
  const features = [
    {
      title: "Tanya Shai",
      description:
        "Tanyakan apa saja kepada Shai tentang keamanan internet. Dapatkan jawaban ramah dan mudah dipahami!",
      icon: "chat" as const,
      href: "/chat",
      rotationDirection: "left" as const,
    },
    {
      title: "Cek Pesan",
      description: "Periksa apakah pesan atau link yang kamu terima aman. Deteksi phishing dan konten mencurigakan!",
      icon: "detector" as const,
      href: "/detector",
      rotationDirection: "right" as const,
    },
    {
      title: "Petualangan Shai",
      description: "Ikuti misi seru dan pelajaran interaktif. Raih lencana dan tunjukkan keahlian digital mu!",
      icon: "adventure" as const,
      href: "/adventure",
      rotationDirection: "left" as const,
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24" id="fitur">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-text-dark mb-4 text-balance">
          Fitur Seru Menanti <span className="text-forest-green">Pahlawan</span> Seperti Mu!
        </h2>
        <p className="text-lg text-text-dark/70 font-medium max-w-2xl mx-auto">
          Pilih salah satu petualangan di bawah untuk mulai belajar keamanan internet dengan cara yang menyenangkan.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={feature.title} {...feature} delay={index * 100} />
        ))}
      </div>
    </section>
  )
}
