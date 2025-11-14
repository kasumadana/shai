"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface FeedbackModalProps {
  isOpen: boolean
  onClose: () => void
  feedback: { 
    title: string; 
    message: string;
    isCorrect: boolean; // <-- Pastikan ini ada
  } | null
}

export function FeedbackModal({ isOpen, onClose, feedback }: FeedbackModalProps) {
  // Jika tidak ada feedback, jangan render modal-nya
  if (!feedback) return null 

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-warm-white rounded-3xl shadow-lg border-4 border-rust-orange/20">

        <DialogHeader>
          
          {/* Gambar Maskot Dinamis */}
          <div className="flex justify-center mb-4">
            <Image
              // Logika dinamis untuk mengganti gambar
              src={feedback.isCorrect ? "/shai-happy.png" : "/shai-sad.png"}
              alt={feedback.isCorrect ? "Shai Senang" : "Shai Sedih"}
              width={100}
              height={100}
            />
          </div>

          {/* Judul (Pilihan Pengguna) */}
          <DialogTitle className="text-center text-xl font-bold text-text-dark">
            {feedback.title}
          </DialogTitle>
          
          {/* Deskripsi (Feedback Teks) */}
          <DialogDescription className="text-center text-base text-text-dark font-nunito pt-2">
            {feedback.message}
          </DialogDescription>

        </DialogHeader>
        
        {/* Tombol Footer */}
        <DialogFooter className="sm:justify-center">
          <Button 
            onClick={onClose}
            // (Opsional) Terapkan styling dinamis pada tombol juga
            className={`px-6 py-3 font-bold rounded-full transition-colors ${
              feedback.isCorrect 
                ? 'bg-forest-green text-warm-white hover:bg-forest-green-dark' 
                : 'bg-rust-orange text-warm-white hover:bg-rust-orange-dark'
            }`}
          >
            Mengerti
          </Button>
        </DialogFooter>

      </DialogContent>
    </Dialog>
  )
}