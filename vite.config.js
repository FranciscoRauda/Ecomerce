import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Debe coincidir con el nombre del repo: usuario.github.io/Ecomerce/
  base: '/Ecomerce/',
  plugins: [react(), tailwindcss()],
})