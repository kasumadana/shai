"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { ScenarioCard } from "@/components/scenario-card"
import { FeedbackModal } from "@/components/feedback-modal"
import { Skeleton } from "@/components/ui/skeleton"

// Mengimpor tipe data dan fungsi helper dari library skenario
import type { Scenario, Choice } from "@/lib/scenarios"
import { getRandomScenarios } from "@/lib/scenarios"

// Interface lokal untuk state feedback
interface FeedbackInfo {
  title: string;
  message: string;
  isCorrect: boolean; // Diperlukan untuk menentukan ekspresi maskot (senang/sedih)
}

export default function AdventureClient() {
  // --- State Management ---
  const [scenarios, setScenarios] = useState<Scenario[]>([]); // Menyimpan daftar skenario aktif
  const [isLoading, setIsLoading] = useState(true);           // Indikator loading saat inisialisasi
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0); // Indeks soal yang sedang dikerjakan
  const [selectedFeedback, setSelectedFeedback] = useState<FeedbackInfo | null>(null); // Data untuk modal feedback
  const [showFeedback, setShowFeedback] = useState(false);    // Kontrol visibilitas modal

  // --- Effect: Inisialisasi Game ---
  // Berjalan sekali saat komponen di-mount (halaman dibuka).
  // Mengambil 3 skenario acak agar game selalu terasa baru.
  useEffect(() => {
    const randomScenarios = getRandomScenarios(3);
    setScenarios(randomScenarios);
    setIsLoading(false);
  }, []);

  // --- Event Handlers ---

  // Menangani saat user memilih jawaban
  const handleChoiceClick = (choice: Choice) => {
    setSelectedFeedback({
      title: choice.teksPilihan,
      message: choice.teksFeedback,
      isCorrect: choice.isCorrect,
    })
    setShowFeedback(true) // Tampilkan modal hasil
  }

  // Pindah ke soal berikutnya
  const handleNextScenario = () => {
    if (currentScenarioIndex < scenarios.length - 1) {
      setCurrentScenarioIndex(currentScenarioIndex + 1)
      setShowFeedback(false)
      setSelectedFeedback(null)
    }
  }

  // Kembali ke soal sebelumnya
  const handlePreviousScenario = () => {
    if (currentScenarioIndex > 0) {
      setCurrentScenarioIndex(currentScenarioIndex - 1)
      setShowFeedback(false)
      setSelectedFeedback(null)
    }
  }

  // --- Render Loading State ---
  // Menampilkan skeleton loading jika data skenario belum siap
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

  // Mendapatkan data skenario saat ini berdasarkan index
  const currentScenario = scenarios[currentScenarioIndex];

  return (
    <div className="min-h-screen bg-soft-cream">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Bagian */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-rust-orange mb-2">Petualangan Shai</h1>
          <p className="text-lg text-forest-green font-medium">
            Pilih pilihan yang tepat dan jadilah pahlawan digital!
          </p>
          {/* Indikator Progres (Contoh: Skenario 1 dari 3) */}
          <div className="mt-4 inline-block bg-warm-white px-6 py-2 rounded-full shadow-sm">
            <span className="text-sm font-semibold text-text-dark">
              Skenario {currentScenarioIndex + 1} dari {scenarios.length}
            </span>
          </div>
        </div>

        {/* Komponen Kartu Soal */}
        <ScenarioCard 
          scenario={currentScenario} 
          onChoiceClick={handleChoiceClick} 
        />

        {/* Tombol Navigasi (Next/Prev) */}
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

      {/* Modal Feedback (Muncul setelah memilih jawaban) */}
      <FeedbackModal 
        isOpen={showFeedback} 
        feedback={selectedFeedback}
        onClose={() => setShowFeedback(false)} 
      />
    </div>
  )
}