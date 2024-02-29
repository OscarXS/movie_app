import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      // https://rollupjs.org/configuration-options/
      'build.rollupOptions.external'
    },
  },
  plugins: [react()],
  define: {
    'process.env': {}
  }
})
