import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin:true
      }
    }
  }
})
// 1. installed reduxjs/toolkit react-redux modules  2. created store.js in src and updated it.  3. updated main.jsx