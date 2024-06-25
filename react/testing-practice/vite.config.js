import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    enviornment: 'jsdom',
    setupFiles: './tests/setup.js',
  }
})
