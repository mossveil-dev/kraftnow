/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import dts from 'vite-plugin-dts'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react(), dts({ include: ['src'], exclude: ['src/**/*.test.ts', 'src/App.tsx', 'src/main.tsx'] })],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'KraftNow',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
  rollupOptions: {
    external: ['react', 'react-dom', 'react/jsx-runtime'],
  },
  },
  test: {
    environment: 'jsdom',
  },
})