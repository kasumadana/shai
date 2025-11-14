"use client"

import { useState } from "react"
import { AlertTriangle, CheckCircle2, AlertCircle } from "lucide-react"
import Navbar from "@/components/navbar"

interface AnalysisResult {
  severity: "AMAN" | "RAGU" | "BERBAHAYA"
  explanation: string
}

export default function DetectorPage() {
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [error, setError] = useState("")

  const handleAnalyzeSubmit = async () => {
    if (!message.trim()) {
      setError("Harap masukkan pesan terlebih dahulu")
      return
    }

    setError("")
    setIsLoading(true)
    setResult(null)

    try {
      const response = await fetch("/api/checkHoax", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: message }),
      })

      if (!response.ok) {
        throw new Error("Gagal menganalisis pesan")
      }

      const data: AnalysisResult = await response.json()
      setResult(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Terjadi kesalahan saat menganalisis")
    } finally {
      setIsLoading(false)
    }
  }

  // Determine severity styling
  const getSeverityStyles = (severity: string) => {
    switch (severity) {
      case "AMAN":
        return { bg: "bg-green-100", text: "text-green-800", icon: CheckCircle2, label: "✓ Pesan Aman" }
      case "RAGU":
        return { bg: "bg-yellow-100", text: "text-yellow-800", icon: AlertCircle, label: "⚠ Cek Lebih Lanjut" }
      case "BERBAHAYA":
        return { bg: "bg-red-100", text: "text-red-800", icon: AlertTriangle, label: "✗ Berbahaya!" }
      default:
        return { bg: "bg-gray-100", text: "text-gray-800", icon: AlertCircle, label: "Tidak Diketahui" }
    }
  }

  const severityStyle = result ? getSeverityStyles(result.severity) : null

  return (
    <div className="min-h-screen bg-soft-cream">
      {/* Global Navbar */}
      <Navbar />

      <main className="max-w-2xl mx-auto px-6 py-8 pt-24">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-text-dark mb-2">Cek Pesan Mencurigakan</h1>
          <p className="text-text-dark opacity-75">Tempel pesan atau teks yang ingin kamu periksa keamanannya</p>
        </div>

        {/* Input Section */}
        <div className="bg-warm-white rounded-3xl p-6 shadow-md mb-6">
          <textarea
            value={message}
            onChange={(e) => {
              setMessage(e.target.value)
              setError("")
            }}
            placeholder="Tempel pesan mencurigakan di sini..."
            className="w-full h-40 p-4 border-2 border-rust-orange rounded-2xl font-sans text-text-dark resize-none focus:outline-none focus:ring-2 focus:ring-rust-orange-light bg-soft-cream placeholder:text-text-dark placeholder:opacity-50"
          />

          {/* Error Message */}
          {error && <p className="text-red-600 text-sm mt-3">{error}</p>}

          {/* Analyze Button */}
          <button
            onClick={handleAnalyzeSubmit}
            disabled={isLoading}
            className="w-full mt-6 bg-rust-orange hover:bg-rust-orange-dark disabled:bg-rust-orange-dark disabled:opacity-60 text-warm-white font-bold py-4 px-6 rounded-2xl transition duration-200 text-lg"
          >
            {isLoading ? "Menganalisis..." : "Analisis Sekarang!"}
          </button>
        </div>

        {/* Result Section */}
        {result && severityStyle && (
          <div className={`${severityStyle.bg} rounded-3xl p-6 shadow-md border-2 border-current`}>
            <div className="flex items-start gap-4">
              <severityStyle.icon className={`${severityStyle.text} flex-shrink-0 mt-1`} size={24} />
              <div className="flex-1">
                <h2 className={`${severityStyle.text} font-bold text-lg mb-2`}>{severityStyle.label}</h2>
                <p className={`${severityStyle.text} opacity-90 leading-relaxed`}>{result.explanation}</p>
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!result && !isLoading && (
          <div className="text-center text-text-dark opacity-50">
            <p className="text-lg">Hasil analisis akan muncul di sini</p>
          </div>
        )}
      </main>
    </div>
  )
}
