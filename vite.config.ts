import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const prodBase = '/ma-portfolio-notion/'
  const base = command === 'build' ? prodBase : '/'

  return {
    plugins: [
      vue(),
      viteStaticCopy({
        targets: [
          {
            src: './src/assets/404.html',
            dest: './'
          }
        ]
      })
    ],
    base,
    define: {
      'import.meta.env.VITE_SITE_BASE': JSON.stringify(base)
    }
  }
})
