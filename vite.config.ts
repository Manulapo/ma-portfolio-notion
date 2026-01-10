import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vite.dev/config/
export default defineConfig({
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
  base: '/vue-ts-tw-scaffold/'
})
