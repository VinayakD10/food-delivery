import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',
  },
  preview: {
    port: 4173,
    strictPort: true,
    host: 'localhost',
  },
})
