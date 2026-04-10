import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/le-navy/'  // ← remplacez par votre nom de dépôt
})
