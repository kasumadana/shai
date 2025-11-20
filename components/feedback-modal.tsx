"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"

// Interface Props: Data yang dibutuhkan komponen ini
interface FeedbackModalProps {
  isOpen: boolean         // Mengontrol apakah modal terbuka/tertutup
  onClose: () => void     // Fungsi yang dipanggil saat modal ditutup
  feedback: { 
    title: string;        // Judul (biasanya teks pilihan user)
    message: string;      // Pesan feedback/edukasi
    isCorrect: boolean;   // Status benar/salah untuk styling
  } | null
}

export function FeedbackModal({ isOpen, onClose, feedback }: FeedbackModalProps) {
  // Jika tidak ada data feedback, jangan render apapun untuk mencegah error
  if (!feedback) return null 

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-warm-white rounded-3xl shadow-lg border-4 border-rust-orange/20">

        <DialogHeader>
          
          {/* Gambar Maskot Dinamis: Shai Senang jika Benar, Sedih jika Salah */}
          <div className="flex justify-center mb-4">
            <Image
              src={feedback.isCorrect ? "/shai-happy.png" : "/shai-sad.png"}
              alt={feedback.isCorrect ? "Shai Senang" : "Shai Sedih"}
              width={100}
              height={100}
            />
          </div>

          {/* Judul Feedback */}
          <DialogTitle className="text-center text-xl font-bold text-text-dark">
            {feedback.title}
          </DialogTitle>
          
          {/* Deskripsi / Penjelasan Edukatif */}
          <DialogDescription className="text-center text-base text-text-dark font-nunito pt-2">
            {feedback.message}
          </DialogDescription>

        </DialogHeader>
        
        <DialogFooter className="sm:justify-center">
          {/* Tombol Tutup dengan styling dinamis sesuai status isCorrect */}
          <Button 
            onClick={onClose}
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