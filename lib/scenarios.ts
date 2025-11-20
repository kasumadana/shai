// --- Definisi Tipe Data (Interfaces) ---

// Struktur data untuk satu pilihan jawaban
export interface Choice {
  id: string;
  teksPilihan: string;  // Teks yang muncul di tombol
  teksFeedback: string; // Penjelasan yang muncul setelah memilih
  isCorrect: boolean;   // Menentukan apakah pilihan ini benar (aman) atau salah
}

// Struktur data untuk satu skenario permainan
export interface Scenario {
  id: string;
  narasi: string;       // Cerita atau situasi masalah
  pilihan: Choice[];    // Array berisi opsi jawaban (biasanya 3 pilihan)
}

// --- Database Skenario ---
// Daftar lengkap semua kemungkinan skenario dalam game.
export const allScenarios: Scenario[] = [
  // == Kategori: Phishing (Penipuan) ==
  {
    id: 'sc_phish_1',
    narasi: 'Kamu sedang main game, tiba-tiba ada yang kirim pesan: "Wow! Kamu menang 1000 koin! Klik link ini untuk klaim: shai-free.xyz"',
    pilihan: [
      {
        id: 'p1-1',
        teksPilihan: 'Klik linknya! Aku menang!',
        teksFeedback: 'Wah, hati-hati! Itu bisa jadi link phising yang berbahaya. Jangan pernah klik link aneh dari orang asing, ya!',
        isCorrect: false,
      },
      {
        id: 'p1-2',
        teksPilihan: 'Abaikan dan blokir.',
        teksFeedback: 'Kerja bagus! Itu adalah tindakan yang paling aman. Tawaran yang terlalu bagus untuk jadi kenyataan biasanya adalah jebakan.',
        isCorrect: true,
      },
      {
        id: 'p1-3',
        teksPilihan: 'Balas, "ini beneran?"',
        teksFeedback: 'Sebaiknya jangan dibalas. Membalas hanya akan memberi tahu penipu bahwa akunmu aktif. Langsung abaikan atau blokir itu lebih baik.',
        isCorrect: false,
      },
    ],
  },
  // ... (Skenario lainnya berlanjut di sini sesuai kode asli)
  {
    id: 'sc_phish_2',
    narasi: 'Ibumu menerima SMS bertuliskan: "Nasabah Yth, akun bank Anda terkunci. Mohon verifikasi data diri Anda di link ini segera." Link-nya terlihat aneh.',
    pilihan: [
      {
        id: 'p2-1',
        teksPilihan: 'Bilang ke Ibu untuk segera klik.',
        teksFeedback: 'Jangan! Bank tidak akan pernah meminta data pribadi lewat SMS seperti ini. Ini adalah usaha penipuan (smishing).',
        isCorrect: false,
      },
      {
        id: 'p2-2',
        teksPilihan: 'Bilang ke Ibu untuk hapus SMS itu.',
        teksFeedback: 'Pilihan yang sangat baik! Bilang juga pada Ibumu untuk tidak perlu khawatir, karena ini hanya spam penipuan.',
        isCorrect: true,
      },
      {
        id: 'p2-3',
        teksPilihan: 'Telepon nomor di SMS itu.',
        teksFeedback: 'Sebaiknya jangan. Nomor itu mungkin terhubung ke penipu. Jika khawatir, Ibu harus menelepon nomor resmi bank dari kartu ATM.',
        isCorrect: false,
      },
    ],
  },
  {
    id: 'sc_phish_3',
    narasi: 'Kamu mendapat email dari "Netflix" (tapi alamat emailnya aneh: netflix@service-xyz.com) yang bilang akunmu bermasalah dan minta kamu memasukkan password.',
    pilihan: [
      {
        id: 'p3-1',
        teksPilihan: 'Abaikan. Alamat emailnya palsu.',
        teksFeedback: 'Tepat sekali! Selalu periksa alamat email pengirim. Perusahaan resmi tidak akan menggunakan domain email yang aneh.',
        isCorrect: true,
      },
      {
        id: 'p3-2',
        teksPilihan: 'Masukkan password. Akunku bisa hilang!',
        teksFeedback: 'Jangan! Ini jebakan phising. Mereka akan mencuri passwordmu. Perusahaan resmi tidak akan meminta passwordmu lewat email.',
        isCorrect: false,
      },
      {
        id: 'p3-3',
        teksPilihan: 'Balas emailnya dan tanya masalahnya.',
        teksFeedback: 'Jangan dibalas. Membalas email penipuan hanya memastikan mereka bahwa emailmu aktif. Mereka akan mengirim lebih banyak spam.',
        isCorrect: false,
      },
    ],
  },
  // == Kategori: Privasi Data ==
  {
    id: 'sc_privacy_1',
    narasi: 'Ada akun baru yang mengikutimu. Foto profilnya mirip teman sekelasmu, tapi namanya sedikit berbeda. Dia mengirim DM minta foto pribadimu.',
    pilihan: [
      {
        id: 'p5-1',
        teksPilihan: 'Tentu, ini fotoku.',
        teksFeedback: 'Jangan! Akun itu bisa jadi akun palsu yang ingin mencuri datamu. Selalu pastikan identitas orang di dunia nyata sebelum percaya.',
        isCorrect: false,
      },
      {
        id: 'p5-2',
        teksPilihan: 'Tanya teman di sekolah dulu.',
        teksFeedback: 'Ide bagus! Verifikasi di dunia nyata adalah cara terbaik untuk memastikan kamu berbicara dengan orang yang benar.',
        isCorrect: true,
      },
      {
        id: 'p5-3',
        teksPilihan: 'Kasih foto, tapi foto asal.',
        teksFeedback: 'Meskipun lebih baik daripada foto asli, berinteraksi dengan akun palsu tetap berisiko. Lebih baik tanya temanmu atau blokir saja.',
        isCorrect: false,
      },
    ],
  },
  {
    id: 'sc_privacy_3',
    narasi: 'Teman baikmu ingin meminjam akun game-mu untuk "mencoba skin". Dia berjanji akan menjaganya. Dia meminta password-mu.',
    pilihan: [
      {
        id: 'p7-1',
        teksPilihan: 'Kasih saja, dia teman baikku.',
        teksFeedback: 'Password itu rahasia! Walaupun dia teman baik, aturan utamanya adalah password tidak boleh dibagi. Akunmu bisa dalam bahaya.',
        isCorrect: false,
      },
      {
        id: 'p7-2',
        teksPilihan: 'Maaf, password itu rahasia.',
        teksFeedback: 'Tindakan yang benar! Menjaga rahasia password adalah cara terbaik melindungi akunmu. Teman yang baik akan mengerti.',
        isCorrect: true,
      },
      {
        id: 'p7-3',
        teksPilihan: 'Login-kan di HP-nya, tapi jangan kasih password.',
        teksFeedback: 'Ini berisiko. Temanmu tetap bisa mengakses akunmu, mengganti info, atau berbuat curang atas namamu. Lebih baik katakan tidak.',
        isCorrect: false,
      },
    ],
  },
  {
    id: 'sc_privacy_4',
    narasi: 'Kamu menemukan kuis "Siapa Jodohmu di Masa Depan?". Kuis itu memintamu memasukkan nama, tanggal lahir, dan... nama gadis ibu kandungmu.',
    pilihan: [
      {
        id: 'p8-1',
        teksPilihan: 'Isi semua. Ini hanya kuis seru!',
        teksFeedback: 'BERHENTI! Nama gadis ibu kandung sering digunakan sebagai pertanyaan keamanan bank. Kamu sedang memberikan kunci brankasmu!',
        isCorrect: false,
      },
      {
        id: 'p8-2',
        teksPilihan: 'Tutup kuisnya. Pertanyaannya aneh.',
        teksFeedback: 'Tindakan yang sangat cerdas! Kuis yang meminta data yang terlalu pribadi biasanya adalah jebakan untuk mencuri identitas.',
        isCorrect: true,
      },
      {
        id: 'p8-3',
        teksPilihan: 'Isi, tapi pakai data palsu.',
        teksFeedback: 'Itu lebih baik daripada data asli! Tapi kuis ini mungkin masih mengumpulkan data lain. Pilihan terbaik tetap menutupnya.',
        isCorrect: true,
      },
    ],
  },
  {
    id: 'sc_privacy_5',
    narasi: 'Kamu sedang di kafe dengan WiFi gratis tanpa password. Kamu ingin mengecek saldo rekening bank-mu sebentar lewat aplikasi bank.',
    pilihan: [
      {
        id: 'p9-1',
        teksPilihan: 'Aman, kan pakai aplikasi.',
        teksFeedback: 'Sebaiknya jangan. WiFi publik yang tidak aman bisa "diintip" oleh peretas. Gunakan data selulermu saja.',
        isCorrect: false,
      },
      {
        id: 'p9-2',
        teksPilihan: 'Tunda dulu. Cek nanti di rumah.',
        teksFeedback: 'Pilihan bijak! Jangan pernah mengakses data sensitif seperti bank di jaringan WiFi publik yang tidak terenkripsi.',
        isCorrect: true,
      },
      {
        id: 'p9-3',
        teksPilihan: 'Pakai data seluler (paket data) saja.',
        teksFeedback: 'Ini adalah solusi terbaik jika kamu harus melakukannya sekarang. Data seluler (4G/5G) adalah koneksi pribadi yang aman.',
        isCorrect: true,
      },
    ],
  },
  {
    id: 'sc_hoax_1',
    narasi: 'Di grup WhatsApp keluarga, ada yang mengirim pesan "BERITA DARI BMKG: AKAN ADA GEMPA SUSULAN JAM 8 MALAM INI. SEBARKAN AGAR SELAMAT!"',
    pilihan: [
      {
        id: 'p10-1',
        teksPilihan: 'Langsung sebarkan ke semua teman!',
        teksFeedback: 'Jangan! Pesan yang menyuruh "sebarkan" biasanya adalah hoax. Berita bencana hanya boleh dipercaya dari akun resmi BMKG.',
        isCorrect: false,
      },
      {
        id: 'p10-2',
        teksPilihan: 'Cek dulu di website resmi BMKG.',
        teksFeedback: 'Sangat baik! Selalu cek sumber aslinya. Jika tidak ada berita itu di website resmi, berarti itu 100% hoax.',
        isCorrect: true,
      },
      {
        id: 'p10-3',
        teksPilihan: 'Diam saja, tidak melakukan apa-apa.',
        teksFeedback: 'Ini lebih baik daripada menyebarkannya. Tapi kamu bisa lebih hebat lagi dengan mengecek fakta dan memberi tahu keluargamu bahwa itu hoax.',
        isCorrect: false,
      },
    ],
  },
  {
    id: 'sc_ethics_1',
    narasi: 'Temanmu mengirimkan stiker/meme lucu yang mengejek teman sekelasmu yang lain. Semua orang di grup tertawa. Apa yang kamu lakukan?',
    pilihan: [
      {
        id: 'p11-1',
        teksPilihan: 'Ikut tertawa dan kirim stiker lain.',
        teksFeedback: 'Itu adalah cyberbullying. Walaupun terlihat lucu, itu menyakiti perasaan orang lain.',
        isCorrect: false,
      },
      {
        id: 'p11-2',
        teksPilihan: 'Tidak ikut-ikutan (diam saja).',
        teksFeedback: 'Lebih baik daripada ikut-ikutan. Tapi diam juga berarti membiarkan bullying terjadi. Kamu bisa lebih baik lagi!',
        isCorrect: true,
      },
      {
        id: 'p11-3',
        teksPilihan: 'Bela teman yang diejek (di grup/PM).',
        teksFeedback: 'Kamu hebat! Membela temanmu (walau lewat PM ke dia) menunjukkan bahwa kamu peduli dan menolak bullying.',
        isCorrect: true,
      },
    ],
  },
  {
    id: 'sc_ethics_2',
    narasi: 'Kamu harus membuat esai 500 kata. Temanmu bilang, "Pakai AI saja, salin-tempel (copy-paste) perintahnya, selesai 5 menit." Guru tidak akan tahu.',
    pilihan: [
      {
        id: 'p12-1',
        teksPilihan: 'Ide bagus! Langsung salin-tempel.',
        teksFeedback: 'Itu namanya plagiarisme. AI seharusnya membantumu belajar, bukan mengerjakan tugasmu. Kamu tidak akan belajar apa-apa.',
        isCorrect: false,
      },
      {
        id: 'p12-2',
        teksPilihan: 'Gunakan AI untuk mencari ide & kerangka.',
        teksFeedback: 'Ini cara yang benar! Gunakan AI sebagai asisten untuk membantumu berpikir, mencari data, dan membuat kerangka. Esainya tetap kamu yang tulis.',
        isCorrect: true,
      },
      {
        id: 'p12-3',
        teksPilihan: 'Tidak pakai AI sama sekali.',
        teksFeedback: 'Itu juga pilihan yang bagus! Mengerjakan sendiri dari nol membangun keterampilan. Tapi ingat, memakai AI sebagai asisten itu boleh.',
        isCorrect: true,
      },
    ],
  },
  {
    id: 'sc_ethics_3',
    narasi: 'Kamu melihat video "lucu" di TikTok. Video itu menunjukkan seorang politisi terkenal mengatakan hal yang sangat konyol. Tapi gerak bibirnya sedikit aneh.',
    pilihan: [
      {
        id: 'p13-1',
        teksPilihan: 'Pasti asli. Langsung share!',
        teksFeedback: 'Hati-hati! Itu mungkin saja "deepfake". Teknologi AI bisa memalsukan video dan suara untuk menyebarkan kebohongan atau fitnah.',
        isCorrect: false,
      },
      {
        id: 'p13-2',
        teksPilihan: 'Curiga ini palsu. Cari sumber lain.',
        teksFeedback: 'Sangat kritis! Selalu curiga jika ada video yang terlalu provokatif atau aneh. Cek di media berita terpercaya.',
        isCorrect: true,
      },
      {
        id: 'p13-3',
        teksPilihan: 'Komentar "Ini deepfake ya?"',
        teksFeedback: 'Itu langkah yang bagus untuk memulai diskusi. Tapi lebih baik lagi jika kamu mengecek fakta dulu sebelum menyimpulkan.',
        isCorrect: true,
      },
    ],
  },
  {
    id: 'sc_ethics_4',
    narasi: 'Kamu mencoba generator gambar AI. Kamu memberi perintah "gambar 3 dokter di rumah sakit". Semua gambar yang keluar adalah dokter pria. Kamu coba lagi. Tetap pria.',
    pilihan: [
      {
        id: 'p14-1',
        teksPilihan: 'Mungkin AI-nya tahu dokter itu pria.',
        teksFeedback: 'Tidak juga. Ini adalah contoh "AI Bias". AI itu dilatih dengan data lama di mana kebanyakan gambar dokter adalah pria.',
        isCorrect: false,
      },
      {
        id: 'p14-2',
        teksPilihan: 'AI ini punya "bias". Ini tidak adil!',
        teksFeedback: 'Kamu benar! Ini adalah masalah besar dalam AI. Penting bagi  untuk menyadari bahwa AI bisa memiliki bias.',
        isCorrect: true,
      },
      {
        id: 'p14-3',
        teksPilihan: 'Coba prompt "3 dokter wanita".',
        teksFeedback: 'Itu akan berhasil! Tapi itu juga membuktikan bahwa AI-nya punya bias, karena kamu harus spesifik untuk mendapatkan hasil yang setara.',
        isCorrect: true,
      },
    ],
  },
  {
    id: 'sc_ethics_5',
    narasi: 'Seseorang yang baru kamu kenal di game dan kamu anggap "teman" memintamu mengirimkan fotomu "yang lebih pribadi" atau "lucu".',
    pilihan: [
      {
        id: 'p15-1',
        teksPilihan: 'Kirim foto. Dia kan temanku.',
        teksFeedback: 'Jangan pernah! Kamu tidak tahu siapa dia sebenarnya di balik layar. Mengirim foto pribadi ke orang asing sangat berbahaya.',
        isCorrect: false,
      },
      {
        id: 'p15-2',
        teksPilihan: 'Tolak, atau langsung blokir.',
        teksFeedback: 'Tindakan yang tepat dan berani. Jangan pernah merasa tertekan untuk mengirim foto apa pun. Jika ada yang memaksa, blokir dan laporkan.',
        isCorrect: true,
      },
      {
        id: 'p15-3',
        teksPilihan: 'Kirim foto meme lucu saja.',
        teksFeedback: 'Ini cara yang bagus untuk mengalihkan pembicaraan! Tapi jika dia terus memaksa, pilihan terbaik adalah memblokirnya.',
        isCorrect: true,
      },
    ],
  },
];

// --- Fungsi Helper ---

/**
 * getRandomScenarios
 * Mengambil sejumlah skenario secara acak dari database utama.
 * Menggunakan logika pengacakan array (shuffle) sederhana.
 * * @param count Jumlah skenario yang ingin diambil (default: 3)
 * @returns Array berisi skenario yang sudah diacak
 */
export function getRandomScenarios(count: number = 3): Scenario[] {
  const shuffled = [...allScenarios].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}