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
// 1. updated store.js  2.created usersApiSlice.js in slice & updated it .  3. updated LoginScreen.jsx
