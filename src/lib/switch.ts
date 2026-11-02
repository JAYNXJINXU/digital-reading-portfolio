// https://tailwindcss.com/docs/dark-mode#with-system-theme-support
import { computed, ref, watch } from 'vue'


const STORAGE_KEY = 'theme-preference'

const themeArr = ['light', 'dark', 'system']

export const preference = ref(localStorage.getItem(STORAGE_KEY) || 'system')

const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

const isSystemDarkMode = ref(mediaQuery.matches)

mediaQuery.addEventListener('change', (event) => {
    isSystemDarkMode.value = event.matches
})

export const themeState = computed(() => {
    if (preference.value === 'system') {
        return isSystemDarkMode.value ? 'dark' : 'light'
    }

    return preference.value
})

export function setTheme(value: string) {
    if (themeArr.includes(value)) {
        preference.value = value
    }
}

export function toggleTheme() {
    if (themeState.value === 'system') {
        setTheme(isSystemDarkMode.value ? 'light' : 'dark')
    }
    else {
        setTheme(themeState.value === 'dark' ? 'light' : 'dark')
    }
}

watch(preference, (value) => {
    localStorage.setItem(STORAGE_KEY, value)
})

watch(
    themeState,
    (value) => {
        const isDark = value === 'dark'
        const root = document.documentElement

        root.dataset.theme = value
        root.dataset.preference = preference.value
        root.style.colorScheme = value

        root.classList.toggle('dark', isDark)

        console.log({
            preference: preference.value,
            isSystemDarkMode: isSystemDarkMode.value,
            resolvedTheme: themeState.value,
            mediaMatches: mediaQuery.matches
        })
    },
    { immediate: true }
)
