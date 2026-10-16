import { comarkContent } from 'comark-content'
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import comark from 'comark-content/vite'
import fs from 'comark-content/sources/fs'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://content.comark.dev/integrations/vite
const content = comarkContent({
    source: fs(fileURLToPath(new URL('./content', import.meta.url)))
})

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        tailwindcss(),
        vue(),
        vueDevTools(),
        comark({content})
    ],
    resolve: {
        alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    server: {
        open: true
    }
})
