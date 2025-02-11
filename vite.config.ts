import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import removeAttr from 'remove-attr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    removeAttr({
      extensions: ['vue'],
      attributes: ['data-testid'],
    }),
  ],
  build: {
    sourcemap: true,
  },
})
