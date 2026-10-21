export const catppuccinLight = {
    base: 'bg-[#eff1f5]',
    border: 'border-[#ccd0da]',
    text: 'text-[#4c4f69]',
}

export const catppuccinDark = {
    base: 'bg-[#24273a]',
    border: 'border-[#494d64]',
    text: 'text-[#cad3f5]',
}

export type theme = 'light' | 'dark'

export const themes = {
    light: catppuccinLight,
    dark: catppuccinDark
}
// https://github.com/nuxt/ui/blob/v4/src/theme/alert.ts -> reference
/// https://flowbite.com/docs/components/alerts/
