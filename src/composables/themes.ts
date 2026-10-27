export const catppuccinLight = {
    base: 'bg-[#eff1f5]',
     mantle: 'bg-[#e6e9ef]',
    crust: 'bg-[#dce0e8]',
    border: 'border-[#ccd0da]',
    text: 'text-[#4c4f69]',
    // check for headings, subheadings, and more
    subtext0: 'text-[#6c6f85]',
    subtext1: 'text-[#5c5f77]',
    overlay0: 'bg-[#9ca0b0]',
    overlay1: 'bg-[#8c8fa1]',
    overlay2: 'bg-[#7c7f93]',
    peach: 'bg-[#fe640b]'
}

export const catppuccinDark = {
    base: 'bg-[#24273a]',
    mantle: 'bg-[#1e2030]',
    crust: 'bg-[#181926]',
    border: 'border-[#494d64]',
    text: 'text-[#cad3f5]',
    // check for headings, subheadings, and more
    subtext0: 'text-[#a5adcb]',
    subtext1: 'text-[#b8c0e0]',
    overlay0: 'bg-[#6e738d]',
    overlay1: 'bg-[#8087a2]',
    overlay2: 'bg-[#939ab7]',
    peach: 'bg-[#f5a97f]'
}

export type theme = 'light' | 'dark'

export const themes = {
    light: catppuccinLight,
    dark: catppuccinDark
}
// https://github.com/nuxt/ui/blob/v4/src/theme/alert.ts -> reference
/// https://flowbite.com/docs/components/alerts/
