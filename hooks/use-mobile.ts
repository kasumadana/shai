import * as React from 'react'

// Batas lebar layar (breakpoint) untuk mode mobile (768px adalah standar tablet portrait)
const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  // State untuk menyimpan status apakah layar saat ini mobile atau bukan
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Mendaftarkan media query listener
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }

    // Menambahkan listener agar state berubah saat ukuran layar di-resize
    mql.addEventListener('change', onChange)
    
    // Set nilai awal saat komponen pertama kali dimuat
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)

    // Membersihkan listener saat komponen di-unmount (penting untuk mencegah memory leak)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  // Mengembalikan boolean (true jika mobile, false jika desktop)
  return !!isMobile
}