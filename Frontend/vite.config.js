import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // server : {
  //   proxy:{
  //     "/ai" : "https://code-reviewer-backend-fdo9.onrender.com"
  //   }
  // },
  plugins: [react()]
})
