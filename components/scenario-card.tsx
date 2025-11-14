"use client"

// 1. Impor Tipe Data yang sudah di-EXPORT dari 'database' 
import type { Scenario, Choice } from "@/lib/scenarios"

// 2. Definisikan props agar sesuai dengan tipe yang diimpor
interface ScenarioCardProps {
  scenario: Scenario
  onChoiceClick: (choice: Choice) => void
}

export function ScenarioCard({ scenario, onChoiceClick }: ScenarioCardProps) {
  return (
    <div className="space-y-8">

      {/* Narrative Box - Scrapbook Style (Ini  pertahankan) */}
      <div className="bg-warm-white rounded-3xl shadow-md p-8 border-4 border-rust-orange/20 transform hover:-rotate-1 transition-transform">
        <p className="text-lg sm:text-xl text-text-dark leading-relaxed font-medium">{scenario.narasi}</p>
      </div>

      {/* Choice Buttons (Ini  pertahankan) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* 4. Tipe 'choice' dan 'index' didefinisikan untuk perbaiki error TS7006 */}
        {scenario.pilihan.map((choice: Choice, index: number) => (
          <button
            key={choice.id}
            onClick={() => onChoiceClick(choice)}
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