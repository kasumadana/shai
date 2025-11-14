"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { ScenarioCard } from "@/components/scenario-card"
import { FeedbackModal } from "@/components/feedback-modal"
import { Skeleton } from "@/components/ui/skeleton" // Impor Skeleton

// 1. Impor Tipe Data dan Fungsi dari 'database' kita
// Error TS2459 & TS2305 akan hilang karena kita sudah EXPORT tipenya
import type { Scenario, Choice } from "@/lib/scenarios"
import { getRandomScenarios } from "@/lib/scenarios"

// 2. Definisikan tipe data untuk feedback (kita tambahkan isCorrect)
interface FeedbackInfo {
  title: string;
  message: string;
  isCorrect: boolean; // Penting untuk styling modal
}

export default function AdventurePage() {
  // 3. State untuk menyimpan daftar skenario yang SUDAH diacak
  const [scenarios, setScenarios] = useState<Scenario[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // 4. State Anda yang sudah ada
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0)
  const [selectedFeedback, setSelectedFeedback] = useState<FeedbackInfo | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)

  // 5. Ambil skenario acak SAAT HALAMAN DIMUAT
  useEffect(() => {
    // Ambil 3 skenario acak dari database
    const randomScenarios = getRandomScenarios(3); // Anda bisa ubah angka ini
    setScenarios(randomScenarios);
    setIsLoading(false);
  }, []); // <-- Array kosong [] berarti ini hanya berjalan satu kali

  // 6. Logika Anda yang sudah ada (dengan penambahan 'isCorrect')
  const handleChoiceClick = (choice: Choice) => {
    setSelectedFeedback({
      title: choice.teksPilihan,
      message: choice.teksFeedback,
      isCorrect: choice.isCorrect, // Kirim status 'isCorrect' ke modal
    })
    setShowFeedback(true)
  }

  const handleNextScenario = () => {
    if (currentScenarioIndex < scenarios.length - 1) {
      setCurrentScenarioIndex(currentScenarioIndex + 1)
      setShowFeedback(false)
      setSelectedFeedback(null)
    }
  }

  const handlePreviousScenario = () => {
    if (currentScenarioIndex > 0) {
      setCurrentScenarioIndex(currentScenarioIndex - 1)
      setShowFeedback(false)
      setSelectedFeedback(null)
    }
  }

  // 7. Tampilkan Skeleton (Loading) selagi data acak disiapkan
  if (isLoading || scenarios.length === 0) {
    return (
      <div className="min-h-screen bg-soft-cream">
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-rust-orange mb-2">Petualangan Shai</h1>
            <p className="text-lg text-forest-green font-medium">
              Memuat petualangan acak...
            </p>
          </div>
          <Skeleton className="w-full h-[400px] rounded-3xl" />
        </main>
      </div>
    );
  }

  // 8. Tampilkan halaman setelah skenario acak siap
  const currentScenario = scenarios[currentScenarioIndex];

  return (
    <div className="min-h-screen bg-soft-cream">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-rust-orange mb-2">Petualangan Shai</h1>
          <p className="text-lg text-forest-green font-medium">
            Pilih pilihan yang tepat dan jadilah pahlawan digital!
          </p>
          <div className="mt-4 inline-block bg-warm-white px-6 py-2 rounded-full shadow-sm">
            <span className="text-sm font-semibold text-text-dark">
              Skenario {currentScenarioIndex + 1} dari {scenarios.length}
            </span>
          </div>
        </div>

        {/* Render ScenarioCard */}
        <ScenarioCard 
          scenario={currentScenario} 
          onChoiceClick={handleChoiceClick} 
        />

        {/* Navigation Buttons */}
        <div className="flex gap-4 justify-center mt-8">
          <button
            onClick={handlePreviousScenario}
            disabled={currentScenarioIndex === 0}
            className="px-6 py-3 bg-forest-green text-warm-white font-bold rounded-full hover:bg-forest-green-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Kembali
          </button>
          <button
            onClick={handleNextScenario}
            disabled={currentScenarioIndex === scenarios.length - 1}
            className="px-6 py-3 bg-rust-orange text-warm-white font-bold rounded-full hover:bg-rust-orange-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Lanjut
          </button>
        </div>
      </main>

      {/* Feedback Modal */}
      <FeedbackModal 
        isOpen={showFeedback} 
        feedback={selectedFeedback} // Kirim seluruh objek feedback
        onClose={() => setShowFeedback(false)} 
      />
    </div>
  )
}