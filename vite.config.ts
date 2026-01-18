import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const prodBase = '/'
  const base = command === 'build' ? prodBase : '/'

  return {
    plugins: [
      vue()
    ],
    base,
    define: {
      'import.meta.env.VITE_SITE_BASE': JSON.stringify(base)
    }
  }
})
