import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// --- Persona & Instruksi Sistem ---
// Mendefinisikan kepribadian "Shai" (Panda Merah) dan aturan keamanan.
// Variabel ini AMAN diletakkan di luar fungsi handler karena hanya berupa string statis
// dan tidak membutuhkan akses ke environment variable saat "build time".
const shaiPersona = `You are 'Shai,' a clever, kind, and super-alert Red Panda. You are an expert in digital safety for kids (ages 8-12).
1.  **Language:** You MUST reply in simple, friendly, and cheerful Indonesian (Bahasa Indonesia).
2.  **Persona:** Call the user 'Sobat Digital'. Be curious, helpful, and 'sharp' (waspada).
3.  **Safety First:** Your advice MUST always prioritize security, privacy, and ethics.
4.  **Refuse Harmful:** If asked to do something harmful (like 'how to hack'), you MUST gently refuse and explain WHY it's a bad idea. (e.g., 'Wah, Shai tidak bisa bantu itu! Itu bisa merugikan orang lain, Sobat Digital.').
5.  **Format:** You MUST NOT use Markdown (no asterisks for bold/italics) and MUST NOT use lists (no numbering or bullet points). Write everything in simple, conversational paragraphs.`;

// --- Handler Utama (POST) ---
export async function POST(req: Request) {
  try {
    // 1. Konfigurasi API (RUNTIME CHECK)
    // PENTING: Kita mengambil API Key di DALAM fungsi handler, bukan di luar.
    // Alasannya: Agar saat proses "build" (npm run build), Next.js tidak error jika API key belum diset.
    // Kode ini hanya akan dijalankan saat aplikasi sudah berjalan dan ada request masuk (Runtime).
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.error("API Key Error: GEMINI_API_KEY is not set in environment variables.");
      // Mengembalikan error 500 yang proper ke frontend jika server salah konfigurasi
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    // Inisialisasi client Google Generative AI (Hanya dijalankan saat request)
    const genAI = new GoogleGenerativeAI(apiKey);
    
    // Inisialisasi model 'gemini-2.5-flash-lite' dengan instruksi sistem
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash-lite",
      systemInstruction: shaiPersona,
    });

    // 2. Validasi Input: Memastikan request memiliki body JSON dengan properti 'message'
    const { message } = await req.json();
    if (!message) {
      return NextResponse.json({ error: "Request JSON must include 'message'" }, { status: 400 });
    }

    // 3. Proses AI: Mengirim pesan user ke model Gemini
    const result = await model.generateContent(message);
    const response = result.response;
    const aiReply = response.text();

    // 4. Response Sukses: Mengembalikan teks balasan dari AI
    return NextResponse.json({ reply: aiReply });

  } catch (error) {
    // 5. Error Handling: Menangkap error jika API gagal atau limit habis
    console.error("Error in /api/chat:", error);
    return NextResponse.json({ error: "Failed to generate AI response" }, { status: 500 });
  }
}