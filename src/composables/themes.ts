import { ref } from 'vue'

// https://catppuccin.com/palette/
// SORT BY CATPPUCCIN PALETTE

/*
 * LATTE
 */
const catppuccinLight = {
    rosewater: 'bg-[#dc8a78]',
    flamingo: 'bg-[#dd7878]',
    pink: 'bg-[#ea76cb]',
    mauve: 'bg-[#8839ef]',
    red: 'bg-[#d20f39]',
    maroon: 'bg-[#e64553]',
    peach: 'bg-[#fe640b]',
    yellow: 'bg-[#df8e1d]',
    green: 'bg-[#40a02b]',
    teal: 'bg-[#179299]',
    sky: 'bg-[#04a5e5]',
    sapphire: 'bg-[#209fb5]',
    blue: 'bg-[#1e66f5]',
    lavender: 'bg-[#7287fd]',
    text: 'text-[#4c4f69]',
    subtext1: 'text-[#5c5f77]',
    subtext0: 'text-[#6c6f85]',
    overlay2: 'bg-[#7c7f93]',
    overlay1: 'bg-[#8c8fa1]',
    overlay0: 'bg-[#9ca0b0]',
    surface2: 'bg-[#acb0be]',
    surface1: 'bg-[#bcc0cc]',
    surface0: 'bg-[#ccd0da]',
    base: 'bg-[#eff1f5]',
    mantle: 'bg-[#e6e9ef]',
    crust: 'border-[#dce0e8]',
}

/*
 * MACCHIATO
 */
const catppuccinDark = {
    rosewater: 'bg-[#f4dbd6]',
    flamingo: 'bg-[#f0c6c6]',
    pink: 'bg-[#f5bde6]',
    mauve: 'bg-[#c6a0f6]',
    red: 'bg-[#ed8796]',
    maroon: 'bg-[#ee99a0]',
    peach: 'bg-[#f5a97f]',
    yellow: 'bg-[#eed49f]',
    green: 'bg-[#a6da95]',
    teal: 'bg-[#8bd5ca]',
    sky: 'bg-[#91d7e3]',
    sapphire: 'bg-[#7dc4e4]',
    blue: 'bg-[#8aadf4]',
    lavender: 'bg-[#b7bdf8]',
    text: 'text-[#cad3f5]',
    subtext1: 'text-[#b8c0e0]',
    subtext0: 'text-[#a5adcb]',
    overlay2: 'bg-[#939ab7]',
    overlay1: 'bg-[#8087a2]',
    overlay0: 'bg-[#6e738d]',
    surface2: 'bg-[#5b6078]',
    surface1: 'bg-[#494d64]',
    surface0: 'bg-[#363a4f]',
    base: 'bg-[#24273a]',
    mantle: 'bg-[#1e2030]',
    crust: 'border-[#181926]',
}

export type Theme = 'light' | 'dark' | 'system'

export interface ThemeProps {
    theme?: Theme
}

export const themes = {
    light: catppuccinLight,
    dark: catppuccinDark,
}

const systemIsDark = ref(
    typeof window !== 'undefined'
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
        : false,
)

if (typeof window !== 'undefined') {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', (e) => {
        systemIsDark.value = e.matches
    })
}

export const resolveTheme = (theme: Theme): 'light' | 'dark' => {
    if (theme === 'system') {
        return systemIsDark.value ? 'dark' : 'light'
    }
    return theme
}
// https://github.com/nuxt/ui/blob/v4/src/theme/alert.ts -> reference
// https://flowbite.com/docs/components/alerts/
