import type { Metadata } from "next"
import AdventureClient from "./client"

export const metadata: Metadata = {
  title: "Petualangan", // Hasil: "Petualangan | Shai"
  description: "Mainkan skenario interaktif dan uji pengetahuan keamanan digitalmu.",
}

export default function AdventurePage() {
  return <AdventureClient />
}