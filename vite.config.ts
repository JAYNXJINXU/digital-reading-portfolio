import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import comark from '@comark/vue/vite'
import catppuccinLatte from '@shikijs/themes/catppuccin-latte'
import catppuccinMacchiato from '@shikijs/themes/catppuccin-macchiato'
import shiki from '@comark/vue/plugins/shiki'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://comark-vue.vercel.app/#/
// https://github.com/comarkdown/comark/tree/main/examples/2.vite/vue
/// https://comark.dev/examples/vite/vue
// https://vite.dev/config/
export default defineConfig({
    plugins: [
        tailwindcss(),
        vue(),
        vueDevTools(),
        // comark({content}),
        comark(),
        // https://comark.dev/rendering/vue#markdown-definemarkdowncomponent
        shiki({
            themes: {
                light: catppuccinLatte,
                dark: catppuccinMacchiato
            }
        })
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
