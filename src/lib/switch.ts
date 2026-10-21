import { onMounted, ref, watch } from 'vue'

const themeMatch = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

const isDark = ref(false)
export const themeState = ref('')

// onMounted(() => {
//     isDark.value = themeMatch

//     document.documentElement.classList.toggle('dark')

//     themeState.value = isDark.value ? 'dark' : 'light'
// })

isDark.value = themeMatch

themeState.value = isDark.value ? 'dark' : 'light'

export const toggleDarkMode = () => {
    isDark.value = !isDark.value
}

watch(isDark, (val) => {
    document.documentElement.classList.toggle('dark', val)
    themeState.value = val ? 'dark' : 'light'
})

// https://tailwindcss.com/docs/dark-mode#with-system-theme-support
// document.documentElement.classList.toggle(
//     'dark',
//     localStorage.theme == 'dark' || (!('theme' in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
// )

// localStorage.theme = 'light'

// localStorage.theme = 'dark'

// localStorage.removeItem('theme')
