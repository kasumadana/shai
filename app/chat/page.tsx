"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import Image from "next/image"

interface Message {
  id: string
  type: "user" | "ai"
  text: string
  timestamp: Date
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "ai",
      text: "Halo! Aku Shai, temanmu yang siap membantu! Apa yang ingin kamu ketahui tentang keamanan internet hari ini? 🌟",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      text: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setLoading(true)

    const typingMessage: Message = {
      id: "typing",
      type: "ai",
      text: "Shai sedang mengetik...",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, typingMessage])

    try {
      // (Logika fetch Anda sudah benar)
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      })

      if (!response.ok) {
        throw new Error("Failed to get response from Shai")
      }

      const data = await response.json()

      setMessages((prev) =>
        prev
          .filter((msg) => msg.id !== "typing")
          .concat({
            id: Date.now().toString(),
            type: "ai",
            text: data.reply,
            timestamp: new Date(),
          }),
      )
    } catch (error) {
      console.error("Chat error:", error)

      setMessages((prev) =>
        prev
          .filter((msg) => msg.id !== "typing")
          .concat({
            id: Date.now().toString(),
            type: "ai",
            text: "Maaf, sepertinya ada masalah. Coba lagi nanti ya! 😊",
            timestamp: new Date(),
          }),
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="flex flex-col h-screen bg-soft-cream">
      <Navbar />

      <div className="flex flex-col flex-1 min-h-0 max-w-4xl mx-auto w-full">
        {/* Messages Container (Kode Anda sudah benar) */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
              <div className="flex items-end gap-2 max-w-xs md:max-w-md lg:max-w-lg">
                
                {message.type === "ai" && (
                  <div className="w-8 h-8 rounded-full flex-shrink-0">
                    <Image
                      src="/icon-64x64.png" // Mengarah ke public/icon-64x64.png
                      alt="Avatar Shai"
                      width={32}  // w-8 = 32px
                      height={32} // h-8 = 32px
                      className="rounded-full"
                    />
                  </div>
                )}

                <div
                  className={`rounded-3xl px-4 py-3 font-sans text-sm md:text-base leading-relaxed ${
                    message.type === "user"
                      ? "bg-forest-green text-warm-white rounded-br-none"
                      : "bg-warm-white text-text-dark border-2 border-rust-orange/50 rounded-bl-none shadow-sm"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Form (Kode Anda sudah benar) */}
        <div className="border-t border-rust-orange/20 bg-warm-white p-4">
          <form onSubmit={handleChatSubmit} className="max-w-4xl mx-auto flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading}
              placeholder="Tanya apa ke Shai..."
              className="flex-1 rounded-full bg-soft-cream border-2 border-forest-green px-4 py-3 font-sans text-text-dark placeholder-text-dark/50 focus:outline-none focus:ring-2 focus:ring-rust-orange disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="bg-rust-orange hover:bg-rust-orange-dark text-warm-white font-sans font-bold rounded-full px-6 py-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Kirim
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}