"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  // State untuk mengontrol visibilitas menu dropdown pada tampilan mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    // Navbar sticky agar tetap terlihat saat di-scroll, dengan border bawah khas tema Shai
    <nav className="sticky top-0 z-50 bg-warm-white shadow-sm border-b-4 border-rust-orange/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo & Identitas Brand (Kiri) */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image src="/shai-logo.png" alt="Shai Logo" width={120} height={40} priority className="h-auto" />
          </Link>

          {/* Tautan Navigasi Desktop (Tengah/Kanan) - Disembunyikan di Mobile */}
          <ul className="hidden md:flex gap-8 items-center">
            <li>
              <Link href="/" className="text-text-dark font-semibold hover:text-rust-orange transition-colors">
                Beranda
              </Link>
            </li>
            <li>
              <Link href="/chat" className="text-text-dark font-semibold hover:text-rust-orange transition-colors">
                Tanya Shai
              </Link>
            </li>
            <li>
              <Link href="/detector" className="text-text-dark font-semibold hover:text-rust-orange transition-colors">
                Cek Pesan
              </Link>
            </li>
            <li>
              <Link href="/adventure" className="text-text-dark font-semibold hover:text-rust-orange transition-colors">
                Petualangan
              </Link>
            </li>
          </ul>

          {/* Tombol Menu Hamburger (Hanya Muncul di Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full bg-rust-orange/10 hover:bg-rust-orange/20 transition-colors"
              aria-label="Toggle menu"
            >
              {/* Ikon berubah antara Menu (garis tiga) dan X (silang) tergantung state */}
              {isMenuOpen ? <X className="w-6 h-6 text-text-dark" /> : <Menu className="w-6 h-6 text-text-dark" />}
            </button>
          </div>
        </div>

        {/* Menu Dropdown Mobile (Render Kondisional) */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-rust-orange/10">
            <ul className="flex flex-col gap-3 pt-4">
              <li>
                <Link
                  href="/"
                  className="block text-text-dark font-semibold hover:text-rust-orange transition-colors py-2"
                  // Menu otomatis menutup saat link diklik
                  onClick={() => setIsMenuOpen(false)}
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/chat"
                  className="block text-text-dark font-semibold hover:text-rust-orange transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tanya Shai
                </Link>
              </li>
              <li>
                <Link
                  href="/detector"
                  className="block text-text-dark font-semibold hover:text-rust-orange transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cek Pesan
                </Link>
              </li>
              <li>
                <Link
                  href="/adventure"
                  className="block text-text-dark font-semibold hover:text-rust-orange transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Petualangan
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar