// https://tailwindcss.com/docs/dark-mode#with-system-theme-support
import { computed, ref, watch } from 'vue'


const STORAGE_KEY = 'theme-preference'

const themeArr = ['light', 'dark', 'system']

const preference = ref(localStorage.getItem(STORAGE_KEY) || 'system')

const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

const systemIsDark = ref(mediaQuery.matches)

mediaQuery.addEventListener('change', (event) => {
    systemIsDark.value = event.matches
})

export const themeState = computed(() => {
    if (preference.value === 'system') {
        return systemIsDark.value ? 'dark' : 'light'
    }

    return preference.value
})

export function setTheme(value: string) {
    if (themeArr.includes(value)) {
        preference.value = value
    }
}

export function toggleDarkMode() {
    setTheme(themeState.value === 'dark' ? 'light' : 'dark')
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
        root.style.colorScheme = value

        root.classList.toggle('dark', isDark)

        console.log({
            preference: preference.value,
            systemIsDark: systemIsDark.value,
            resolvedTheme: themeState.value,
            mediaMatches: mediaQuery.matches
        })
    },
    { immediate: true }
)
