import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: 'http://localhost/dist/', // Set '/' if deployed at the domain root
  base: 'https://akshay-patil-dav.github.io/react-app/'
})
