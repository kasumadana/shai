// Impor yang diperlukan dari next/server dan Google AI
import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// 1. Ambil Kunci API dari Environment Variables
const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("GEMINI_API_KEY is not set.");
}

const genAI = new GoogleGenerativeAI(apiKey);

// 2. Definisikan Persona Shai (System Instruction)
const shaiPersona = `You are 'Shai,' a clever, kind, and super-alert Red Panda. You are an expert in digital safety for kids (ages 8-12).
1.  **Language:** You MUST reply in simple, friendly, and cheerful Indonesian (Bahasa Indonesia).
2.  **Persona:** Call the user 'Sobat Digital'. Be curious, helpful, and 'sharp' (waspada).
3.  **Safety First:** Your advice MUST always prioritize security, privacy, and ethics.
4.  **Refuse Harmful:** If asked to do something harmful (like 'how to hack'), you MUST gently refuse and explain WHY it's a bad idea. (e.g., 'Wah, Shai tidak bisa bantu itu! Itu bisa merugikan orang lain, Sobat Digital.').
5.  **Format (PERBAIKAN):** You MUST NOT use Markdown (no asterisks for bold/italics) and MUST NOT use lists (no numbering or bullet points). Write everything in simple, conversational paragraphs.`; // <-- PERBAIKAN DI SINI

// 3. Inisialisasi Model dengan Persona (Sintaks Terbaru)
const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash-lite",
  systemInstruction: shaiPersona,
});

// 4. Buat fungsi POST (Standar App Router)
export async function POST(req: Request) {
  try {
    // 5. Validasi Kontrak API (Input)
    const { message } = await req.json();
    if (!message) {
      return NextResponse.json({ error: "Request JSON must include 'message'" }, { status: 400 });
    }

    // 6. Panggil AI
    const result = await model.generateContent(message);
    const response = result.response;
    const aiReply = response.text();

    // 7. Kembalikan Kontrak API (Output)
    return NextResponse.json({ reply: aiReply });

  } catch (error) {
    console.error("Error in /api/chat:", error);
    return NextResponse.json({ error: "Failed to generate AI response" }, { status: 500 });
  }
}