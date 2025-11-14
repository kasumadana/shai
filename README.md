# 🐼 Proyek Shai

Shai adalah sebuah portal _website_ edukasi interaktif yang dirancang untuk mempersiapkan anak-anak Indonesia (usia 8-12 tahun) menghadapi era AI yang aman. Nama Shai adalah gabungan dari "Shield" (Perisai) dan "AI", mencerminkan misinya sebagai perisai AI yang ramah dan protektif.

Proyek ini dibangun dengan tema visual **"Cozy Digital Storybook"** dan dipandu oleh maskot panda merah yang bersahabat.

### Konteks Lomba

Proyek ini dibuat untuk Lomba **Young Coder World Cup (YCWC) 2025**.

- **Tema Lomba:** "Secure AI for All".pdf]
- **Jenjang:** Senior (15-18 tahun)
- **Topik Jenjang:** "How AI Can Help Humans to Solve Problems?".pdf]

---

## 🚀 Fitur Utama

Shai memiliki tiga fitur inti yang ditenagai oleh AI untuk menciptakan pengalaman belajar yang aman dan interaktif:

### 1\. 🤖 Tanya Shai (AI Chatbot)

Sebuah _chatbot_ aman di mana anak-anak dapat bertanya apa saja tentang keamanan digital (misal: "Apa itu _phishing_?").

- Ditenagai oleh Google Gemini Pro.
- Memiliki _system prompt_ yang ketat untuk selalu menjawab sebagai "Shai" (persona panda merah).
- Menggunakan bahasa Indonesia yang sederhana dan ramah anak.
- Diprogram secara eksplisit untuk **tidak** menggunakan format Markdown (seperti `*bold*` atau _list_ angka) agar jawaban selalu bersih dan mudah dibaca.

### 2\. 🗺️ Petualangan Shai (Simulator Skenario)

Sebuah _mini-game_ interaktif yang menyajikan skenario keamanan digital di dunia nyata.

- Berisi **15+ skenario** unik yang mencakup _phishing_, _hoax_, privasi data, dan etika AI.
- Menampilkan **3 skenario acak** setiap kali halaman dikunjungi untuk _replay value_ yang tinggi.
- Sistem _feedback_ visual interaktif menggunakan modal yang menampilkan gambar `shai-happy.png` untuk jawaban benar dan `shai-sad.png` untuk jawaban salah.

### 3\. 🔍 Cek Pesan (Analisis Hoax)

Alat praktis di mana pengguna dapat menyalin-tempel (copy-paste) pesan _chat_ atau teks yang mencurigakan.

- AI akan menganalisis teks tersebut untuk mencari tanda-tanda bahaya.
- Memberikan respons JSON yang terstruktur: `severity` ("AMAN", "HATI-HATI", atau "BERBAHAYA") dan `explanation` (penjelasan singkat).
- _Prompt_ dirancang khusus untuk selalu memberikan penjelasan dalam **Bahasa Indonesia**.

---

## 🛠️ Tumpukan Teknologi (Tech Stack)

- **Framework:** Next.js 14 (App Router)
- **Frontend:** React, Tailwind CSS
- **UI:** shadcn/ui
- **Backend:** Next.js API Routes (Vercel Serverless Functions)
- **AI:** Google Gemini Pro
- **Package Manager:** pnpm
- **Deployment:** Vercel

---

## 🏁 Menjalankan Secara Lokal (Getting Started)

Berikut adalah cara untuk menjalankan proyek ini di laptop Anda.

### 1\. Prasyarat

- Node.js (v18 atau lebih baru)
- `pnpm` terinstal secara global (`npm install -g pnpm`)

### 2\. Kloning Repositori

```bash
git clone https://[URL-REPOSITORI-ANDA]
cd Shai
```

### 3\. Instal Dependensi

Proyek ini menggunakan `pnpm`.

```bash
pnpm install
```

### 4\. Atur Variabel Lingkungan

Anda harus memiliki Kunci API Google Gemini.

1.  Buat file baru di _root_ proyek (sejajar `package.json`) bernama `.env.local`.

2.  Buka file tersebut dan tambahkan Kunci API Anda:

    ```.env
    GEMINI_API_KEY=KUNCI_API_GEMINI_ANDA_DI_SINI
    ```

    _(File ini sudah ada di `.gitignore` sehingga tidak akan terunggah ke GitHub)._

### 5\. Jalankan Server Development

```bash
pnpm dev
```

Buka [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) di _browser_ Anda.

---

## 📁 Struktur Proyek

```
/Shai/
├── /app/                   # Halaman Frontend (App Router)
│   ├── /adventure/         # Halaman Petualangan
│   ├── /chat/              # Halaman Chatbot
│   ├── /detector/          # Halaman Cek Pesan
│   ├── /api/               # Endpoint API Backend (Serverless)
│   │   ├── /chat/
│   │   │   └── route.ts    # Backend Logika "Tanya Shai"
│   │   └── /checkHoax/
│   │       └── route.ts    # Backend Logika "Cek Pesan"
│   ├── layout.tsx          # Layout utama
│   └── page.tsx            # Halaman utama (Homepage)
│
├── /components/            # Komponen React UI
│   ├── /ui/                # Komponen shadcn/ui
│   ├── navbar.tsx          # Navbar kustom
│   ├── hero-section.tsx    # Hero section kustom
│   ├── scenario-card.tsx   # Kartu skenario
│   ├── feedback-modal.tsx  # Modal feedback (Shai-happy/sad)
│   └── footer.tsx          # Footer kustom
│
├── /lib/                   # Logika & utilitas
│   ├── scenarios.ts        # "Database" untuk 15+ skenario petualangan
│   └── utils.ts            # Utilitas Tailwind
│
└── /public/                # Aset statis (gambar, ikon, font)
    ├── shai-mascot.png
    ├── shai-logo.png
    ├── shai-happy.png
    └── shai-sad.png
```

---

## 🚀 Deployment

Proyek ini dirancang untuk _deployment_ instan di **Vercel**.

1.  Impor repositori GitHub Anda ke Vercel.
2.  Vercel akan otomatis mendeteksi Next.js dan `pnpm`.
3.  **Langkah Terpenting:** Pergi ke **Settings -\> Environment Variables** di proyek Vercel Anda dan tambahkan `GEMINI_API_KEY` Anda.
4.  Klik **Deploy**.
