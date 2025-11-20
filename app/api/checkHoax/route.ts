import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// --- Definisi Tugas AI ---
// Instruksi spesifik agar AI bertindak sebagai analis keamanan teks.
// String ini aman diletakkan di luar handler karena statis.
const hoaxTaskPrompt = `Analisis teks berikut untuk tanda-tanda hoax, scam, atau phishing.
Level 'severity' harus salah satu dari: 'AMAN', 'HATI-HATI', atau 'BERBAHAYA'.
'explanation' (penjelasan) harus dalam Bahasa Indonesia dan berupa satu kalimat sederhana.`;

// --- Handler Utama (POST) ---
export async function POST(req: Request) {
  try {
    // 1. Konfigurasi API (RUNTIME CHECK)
    // Sama seperti di route chat, inisialisasi dilakukan DI DALAM fungsi handler
    // untuk mencegah error "GEMINI_API_KEY is not set" saat proses build aplikasi.
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.error("API Key Error: GEMINI_API_KEY is not set.");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    // --- Inisialisasi Model dengan JSON Mode ---
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash-lite",
      // PENTING: generationConfig ini memaksa AI mengembalikan format JSON murni, bukan teks bebas.
      generationConfig: {
        responseMimeType: "application/json",
      },
      // Skema JSON yang diharapkan didefinisikan di systemInstruction agar AI patuh.
      systemInstruction: `Anda adalah mesin analisis hoax berbahasa Indonesia. Respons Anda WAJIB berupa objek JSON yang valid dan HANYA JSON, yang cocok dengan skema ini:
      { "severity": "string", "explanation": "string" }.
      'explanation' (penjelasan) WAJIB dalam Bahasa Indonesia.
      ${hoaxTaskPrompt}`,
    });

    // 2. Validasi Input
    const { text } = await req.json();
    if (!text) {
      return NextResponse.json({ error: "Request JSON must include 'text'" }, { status: 400 });
    }

    // 3. Proses AI: Mengirim teks mencurigakan ke model
    const result = await model.generateContent(text);
    const response = result.response;
    const jsonString = response.text();
    
    // 4. Parsing & Response: Mengubah string JSON dari AI menjadi objek JavaScript asli
    // Karena kita menggunakan JSON Mode, kita bisa langsung parse string hasilnya dengan aman.
    return NextResponse.json(JSON.parse(jsonString));

  } catch (error) {
    console.error("Error in /api/checkHoax:", error);
    return NextResponse.json({ error: "Failed to analyze text" }, { status: 500 });
  }
}