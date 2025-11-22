import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/scrape': 'http://localhost:3001',
    },
  },
  build: {
    outDir: '../server/public',
    emptyOutDir: true,
  },
})
