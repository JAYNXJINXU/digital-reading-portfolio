import { computed, toValue, type MaybeRefOrGetter } from 'vue'
import type { theme } from './themes'

export type AlertType = 'info' | 'warning' | 'success' | 'danger'

export const alertVariant = {
    info: {
        light: '',
        dark: '',
    },
    warning: {
        light: '',
        dark: '',
    },
    success: {
        light: '',
        dark: '',
    },
    danger: {
        light: '',
        dark: '',
    },
} satisfies Record<AlertType, Record<theme, string>>

export const useAlertVariant = (type: MaybeRefOrGetter<AlertType>, currentTheme: MaybeRefOrGetter<theme>) => {
    return computed(() => [
        'rounded-xl border p-6',
        alertVariant[toValue(type)][toValue(currentTheme)],
    ])
}
