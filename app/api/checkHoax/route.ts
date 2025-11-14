// Impor yang diperlukan
import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// 1. Ambil Kunci API
const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("GEMINI_API_KEY is not set.");
}

const genAI = new GoogleGenerativeAI(apiKey);

// 2. Definisikan Prompt Tugas (PERBAIKAN: Diterjemahkan ke Bahasa Indonesia)
const hoaxTaskPrompt = `Analisis teks berikut untuk tanda-tanda hoax, scam, atau phishing.
Level 'severity' harus salah satu dari: 'AMAN', 'HATI-HATI', atau 'BERBAHAYA'.
'explanation' (penjelasan) harus dalam Bahasa Indonesia dan berupa satu kalimat sederhana.`;

// 3. Inisialisasi Model dengan Paksa JSON (Sintaks Terbaru)
const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash-lite",
  // Ini adalah "sihir"-nya:
  generationConfig: {
    responseMimeType: "application/json", // Memaksa AI selalu membalas dengan JSON
  },
  // PERBAIKAN: Instruksi sistem juga diterjemahkan
  systemInstruction: `Anda adalah mesin analisis hoax berbahasa Indonesia. Respons Anda WAJIB berupa objek JSON yang valid dan HANYA JSON, yang cocok dengan skema ini:
  { "severity": "string", "explanation": "string" }.
  'explanation' (penjelasan) WAJIB dalam Bahasa Indonesia.
  ${hoaxTaskPrompt}`,
});

// 4. Buat fungsi POST
export async function POST(req: Request) {
  try {
    // 5. Validasi Kontrak API (Input)
    const { text } = await req.json();
    if (!text) {
      return NextResponse.json({ error: "Request JSON must include 'text'" }, { status: 400 });
    }

    // 6. Panggil AI (Hanya kirim teksnya, AI sudah tahu formatnya)
    const result = await model.generateContent(text);
    const response = result.response;
    const jsonString = response.text();
    
    // 7. Kembalikan Kontrak API (Output)
    return NextResponse.json(JSON.parse(jsonString));

  } catch (error) {
    console.error("Error in /api/checkHoax:", error);
    return NextResponse.json({ error: "Failed to analyze text" }, { status: 500 });
  }
}