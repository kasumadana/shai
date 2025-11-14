"use client"

import { Heart, X } from "lucide-react"

interface FeedbackModalProps {
  isOpen: boolean
  feedback: { title: string; message: string } | null
  onClose: () => void
}

export function FeedbackModal({ isOpen, feedback, onClose }: FeedbackModalProps) {
  if (!isOpen || !feedback) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-warm-white rounded-3xl shadow-2xl max-w-md w-full p-8 animate-in fade-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-soft-cream transition-colors"
        >
          <X className="w-6 h-6 text-text-dark" />
        </button>

        {/* Shai Avatar */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-rust-orange to-rust-orange-light rounded-full flex items-center justify-center shadow-lg">
            <Heart className="w-10 h-10 text-white fill-white" />
          </div>
        </div>

        {/* Feedback Title */}
        <h3 className="text-center text-lg font-bold text-rust-orange mb-4">Pilihan: {feedback.title}</h3>

        {/* Feedback Message */}
        <p className="text-center text-text-dark leading-relaxed mb-8 text-base">{feedback.message}</p>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full bg-forest-green text-warm-white font-bold py-3 rounded-2xl hover:bg-forest-green-dark transition-colors"
        >
          Lanjut
        </button>
      </div>
    </div>
  )
}
