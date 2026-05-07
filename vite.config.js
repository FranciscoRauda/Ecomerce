import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// En desarrollo usar base '/' para que sirva bien en http://localhost:5173/
// En build usar '/nombre-repo/' para GitHub Pages: usuario.github.io/Ecomerce/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/Ecomerce/' : '/',
  plugins: [react(), tailwindcss()],
}))