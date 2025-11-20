"use client"

// Import tipe data dari library sentral
import type { Scenario, Choice } from "@/lib/scenarios"

interface ScenarioCardProps {
  scenario: Scenario;                  // Data skenario tunggal
  onChoiceClick: (choice: Choice) => void; // Fungsi callback saat tombol diklik
}

export function ScenarioCard({ scenario, onChoiceClick }: ScenarioCardProps) {
  return (
    <div className="space-y-8">

      {/* Kotak Narasi (Cerita) dengan gaya visual miring/scrapbook */}
      <div className="bg-warm-white rounded-3xl shadow-md p-8 border-4 border-rust-orange/20 transform hover:-rotate-1 transition-transform">
        <p className="text-lg sm:text-xl text-text-dark leading-relaxed font-medium">{scenario.narasi}</p>
      </div>

      {/* Grid Tombol Pilihan Jawaban */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {scenario.pilihan.map((choice: Choice, index: number) => (
          <button
            key={choice.id}
            onClick={() => onChoiceClick(choice)}
            // Styling dinamis: warna berbeda tiap tombol (pola 3 warna) & rotasi acak
            className={`p-6 rounded-3xl font-bold text-center transition-all hover:scale-105 active:scale-95 shadow-md text-warm-white ${
              index % 3 === 0
                ? "bg-rust-orange hover:bg-rust-orange-dark"
                : index % 3 === 1
                ? "bg-forest-green hover:bg-forest-green-dark"
                : "bg-rust-orange-light hover:bg-rust-orange"
            }`}
            style={{
              transform: `rotate(${index % 2 === 0 ? "-1.5deg" : "1deg"})`,
            }}
          >
            {choice.teksPilihan}
          </button>
        ))}
      </div>
    </div>
  )
}