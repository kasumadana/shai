"use client"

import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  // Mengambil daftar toast aktif dari hook
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {/* Melakukan mapping setiap toast di state menjadi elemen visual */}
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      {/* Area tempat toast muncul (pojok layar) */}
      <ToastViewport />
    </ToastProvider>
  )
}