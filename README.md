# 🐼 Shai - Sahabat Aman Internet

**Shai** adalah platform edukasi interaktif berbasis web yang dirancang untuk membantu anak-anak Indonesia (usia 8-12 tahun) belajar tentang keamanan digital, privasi, dan etika internet. Dipandu oleh maskot panda merah yang ramah, Shai menggabungkan teknologi _Generative AI_ dengan pendekatan _gamification_ yang aman.

### 🏆 Konteks Proyek

Proyek ini dikembangkan untuk **Young Coder World Cup (YCWC) 2025**.

- **Tema:** "Secure AI for All"
- **Kategori:** Senior (15-18 tahun)
- **Fokus:** Solusi AI yang membantu manusia memecahkan masalah keamanan digital sejak usia dini.

---

## 🌟 Fitur Unggulan

### 1. 🤖 Tanya Shai (AI Chatbot)

Teman ngobrol virtual yang aman untuk anak-anak bertanya seputar dunia digital.

- **Teknologi:** Google Gemini 2.5 Flash Lite.
- **Keamanan:** Menggunakan _System Prompt_ khusus dengan persona "Shai" yang ramah, tidak menggunakan format markdown rumit, dan selalu memprioritaskan jawaban yang aman untuk anak.
- **Lokasi:** `/chat`

### 2. 🔍 Cek Pesan (Hoax Detector)

Alat deteksi dini untuk menganalisis pesan mencurigakan, SMS penipuan, atau berita bohong.

- **Cara Kerja:** Pengguna menempelkan teks, dan AI menganalisisnya untuk menentukan level bahaya (**AMAN**, **RAGU**, atau **BERBAHAYA**) beserta penjelasannya.
- **Teknologi:** Gemini JSON Mode untuk output terstruktur.
- **Lokasi:** `/detector`

### 3. 🗺️ Petualangan Shai (Interactive Scenarios)

Mini-game edukasi berbasis skenario dunia nyata (phishing, cyberbullying, privasi).

- **Fitur:** Menyajikan 3 skenario acak setiap sesi dari database skenario (`lib/scenarios.ts`).
- **Interaksi:** Memberikan umpan balik visual instan (Shai Senang/Sedih) berdasarkan pilihan pengguna.
- **Lokasi:** `/adventure`

---

## 🛠️ Tumpukan Teknologi (Tech Stack)

Proyek ini dibangun menggunakan teknologi web modern terbaru untuk performa maksimal:

| Kategori            | Teknologi           | Keterangan                                              |
| :------------------ | :------------------ | :------------------------------------------------------ |
| **Framework**       | **Next.js 16**      | App Router & Turbopack enabled                          |
| **Bahasa**          | **TypeScript**      | Type-safety untuk pengembangan yang robust              |
| **Styling**         | **Tailwind CSS v4** | Menggunakan konfigurasi CSS-first modern (`@theme`)     |
| **UI Library**      | **shadcn/ui**       | Komponen Radix UI yang kustomizable                     |
| **AI Model**        | **Google Gemini**   | `gemini-2.5-flash-lite` via SDK `@google/generative-ai` |
| **Font**            | **Nunito**          | Google Font yang ramah anak (Rounded)                   |
| **Package Manager** | **pnpm**            | Instalasi dependensi yang cepat dan efisien             |

---

## 🚀 Panduan Instalasi (Lokal)

Ikuti langkah ini untuk menjalankan proyek di komputer Anda:

### 1. Prasyarat

Pastikan Anda sudah menginstal **Node.js** (v18 atau lebih baru) dan **pnpm**.

### 2. Kloning & Instalasi

```bash
# Kloning repositori (jika belum)
git clone [https://github.com/username-anda/shai.git](https://github.com/username-anda/shai.git)

# Masuk ke folder proyek
cd Shai

# Instal paket dependensi
pnpm install
```

### 3\. Konfigurasi Environment Variable

Anda memerlukan API Key dari Google AI Studio.

1.  Buat file `.env.local` di root folder (sejajar dengan `package.json`).
2.  Tambahkan kode berikut:

<!-- end list -->

```env
GEMINI_API_KEY=masukkan_api_key_google_anda_disini
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4\. Jalankan Aplikasi

```bash
pnpm dev
```

Buka [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) di browser Anda.

---

## 📁 Struktur Proyek

Berikut adalah struktur folder utama yang digunakan dalam proyek ini:

```
Shai/
├── app/                    # App Router (Halaman & API)
│   ├── api/                # Serverless Functions (Backend)
│   │   ├── chat/           # Endpoint untuk Chatbot
│   │   └── checkHoax/      # Endpoint untuk Analisis Teks JSON
│   ├── adventure/          # Halaman Game (Client & Server separated)
│   ├── chat/               # Halaman Chat UI
│   ├── detector/           # Halaman Detektor
│   ├── globals.css         # Konfigurasi Tailwind v4 & Tema Global
│   ├── layout.tsx          # Root layout & Metadata
│   └── page.tsx            # Halaman Utama (Landing Page)
├── components/             # Komponen React UI
│   ├── ui/                 # Komponen Reusable (Button, Card, Toast, dll)
│   ├── feature-card.tsx    # Kartu fitur halaman depan
│   ├── feedback-modal.tsx  # Modal interaktif (Happy/Sad Shai)
│   ├── hero-section.tsx    # Banner utama
│   ├── navbar.tsx          # Navigasi responsif
│   └── footer.tsx          # Footer halaman
├── lib/                    # Utilitas & Data
│   ├── scenarios.ts        # Database statis skenario game
│   └── utils.ts            # Helper function (clsx/tailwind-merge)
├── public/                 # Aset Gambar Statis
│   ├── shai-logo.png       # Logo Aplikasi
│   ├── shai-wave.png       # Maskot Utama (Hero)
│   ├── shai-smile.png      # Maskot Footer
│   ├── shai-happy.png      # Feedback Benar
│   └── shai-sad.png        # Feedback Salah
└── next.config.mjs         # Konfigurasi Next.js
```

---

## 🎨 Catatan Desain (Tailwind v4)

Proyek ini menggunakan **Tailwind CSS v4**. Konfigurasi tema (warna, font) tidak lagi berada di `tailwind.config.js`, melainkan langsung diatur di dalam file **`app/globals.css`** menggunakan direktif `@theme`.

**Palet Warna Utama:**

- **Rust Orange:** `#d87a4a` (Warna Maskot/Aksi Utama)
- **Forest Green:** `#3d7a6b` (Warna Aksen/Aman)
- **Soft Cream:** `#faf5f0` (Background Hangat)

---

## 📝 Lisensi

Hak Cipta © 2025 Shai Project. Dibuat untuk kompetisi YCWC 2025.
