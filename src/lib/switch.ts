export const themeState = 'dark'

// https://tailwindcss.com/docs/dark-mode#with-system-theme-support
document.documentElement.classList.toggle(
    'dark',
    localStorage.theme == 'dark' || (!('theme' in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
)

localStorage.theme = 'light'

localStorage.theme = 'dark'

localStorage.removeItem('theme')
