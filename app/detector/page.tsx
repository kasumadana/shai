import type { Metadata } from "next"
import DetectorClient from "./client"

export const metadata: Metadata = {
  title: "Cek Pesan", // Hasil: "Cek Pesan | Shai"
  description: "Analisis pesan mencurigakan untuk deteksi hoax dan penipuan menggunakan AI.",
}

export default function DetectorPage() {
  return <DetectorClient />
}