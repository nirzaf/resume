import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.jpg', '**/*.JPG', '**/*.jpeg', '**/*.JPEG', '**/*.png', '**/*.PNG', '**/*.gif', '**/*.svg'],
  resolve: {
    alias: {
      '@': '/src',
      '@assets': '/src/assets'
    }
  }
})
