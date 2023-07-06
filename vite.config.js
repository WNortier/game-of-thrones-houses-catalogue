// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: './',
    build: {
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
      cssCodeSplit: true,
    }
  }

  if (command !== 'serve') {
    config.base = '/game-of-thrones-houses-catalogue'
  }

  return config
})
