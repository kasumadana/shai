import Link from "next/link"

export function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Left: Text Content */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-black text-text-dark leading-tight text-balance">
            Selamat Datang, <span className="text-rust-orange">Pahlawan Digital!</span>
          </h1>

          <p className="text-xl text-text-dark/80 leading-relaxed font-medium">
            Ayo belajar aman di internet bersama Shai! Jelajahi dunia digital dengan pengetahuan dan keterampilan yang
            tepat untuk tetap aman dan cerdas.
          </p>

          <div className="flex gap-4 pt-4">
            <Link href="/adventure">
              <button className="px-8 py-4 bg-rust-orange hover:bg-rust-orange-dark text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg">
                Mulai Petualangan
              </button>
            </Link>

            <Link href="/#fitur">
              <button className="px-8 py-4 bg-white border-3 border-forest-green text-forest-green font-bold rounded-full hover:bg-forest-green/5 transition-all">
                Pelajari Lebih
              </button>
            </Link>
          </div>
        </div>

        {/* Right: Mascot Illustration */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-96">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-rust-orange/20 to-forest-green/20 rounded-full blur-3xl" />

            {/* Shai mascot image */}
            <img
              src="/shai-wave.png"   // pastikan file ada di folder public/images
              alt="Shai Mascot"
              className="w-full h-full object-contain relative z-10 drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
