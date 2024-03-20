import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import gleam from 'vite-gleam'

export default defineConfig({
  // @ts-ignore weird vite plugin type mismatch
  plugins: [gleam(), react()],
})
