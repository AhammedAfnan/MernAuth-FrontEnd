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


// 1. port um proxy add aakeen vite.config.js file l   2. installed module concurrently  3. script updated in package.json file  4. just cleaned the things that we dont want in frontend folder   5. 