/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // Plugin Tailwind CSS untuk memproses utility classes
    "@tailwindcss/postcss": {},

    // (Opsional) Plugin lain seperti autoprefixer biasanya ditambahkan di sini
    // jika tidak ditangani langsung oleh framework.
  },
};

export default config;
