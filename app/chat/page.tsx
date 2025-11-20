import type { Metadata } from "next"
import ChatClient from "./client"

// Metadata Khusus Halaman Chat
// Judul "Tanya Shai" akan digabung dengan template layout menjadi "Tanya Shai | Shai"
export const metadata: Metadata = {
  title: "Tanya Shai",
  description: "Chatbot edukasi keamanan internet yang ramah anak.",
}

export default function ChatPage() {
  return <ChatClient />
}