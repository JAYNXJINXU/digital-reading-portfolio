import { computed, ref, watch } from 'vue'

const STORAGE_KEY = 'theme-preference'

const themeArr = ['light', 'dark', 'system'] as const

export type ThemePreference = (typeof themeArr)[number]

export type ResolvedTheme = Exclude<ThemePreference, 'system'>

export const preference = ref(localStorage.getItem(STORAGE_KEY) || 'system')

const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

const isSystemDarkMode = ref(mediaQuery.matches)

mediaQuery.addEventListener('change', (event) => {
    isSystemDarkMode.value = event.matches
})

export const themeState = computed<ResolvedTheme>(() => {
    if (preference.value === 'system') {
        return isSystemDarkMode.value ? 'dark' : 'light'
    }

    return preference.value as ResolvedTheme
})

export function setTheme(value: string) {
    if (themeArr.includes(value as ThemePreference)) {
        preference.value = value as ThemePreference
    }
}

export function toggleTheme() {
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
        root.dataset.preference = preference.value
        root.style.colorScheme = value

        root.classList.toggle('dark', isDark)

        // console.log({
        //     preference: preference.value,
        //     isSystemDarkMode: isSystemDarkMode.value,
        //     resolvedTheme: themeState.value,
        //     mediaMatches: mediaQuery.matches
        // })
    },
    { immediate: true }
)
