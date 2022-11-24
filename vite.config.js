import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        // treat all tags with a dash as custom elements
        isCustomElement: (tag) => tag.includes('-')
      }
    }
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  // ==================================================
  // Web Components 建立 Custom Elements
  // ==================================================
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: './src/main.ce.js',
      name: 'CustomElements',
      // the proper extensions will be added
      fileName: 'custom-elements'
      // fileName: (format) => 'custom-elements.$(format),js'
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
