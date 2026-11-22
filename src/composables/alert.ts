import { computed, toValue, type MaybeRefOrGetter } from 'vue'
import { type Theme, themes } from './themes'

export type AlertType = 'info' | 'warning' | 'success' | 'danger'

export const alertVariant = {
    info: {
        light: '',
        dark: '',
        system: '',
    },
    warning: {
        light: '',
        dark: '',
        system: '',
    },
    success: {
        light: '',
        dark: '',
        system: '',
    },
    danger: {
        light: '',
        dark: '',
        system: '',
    },
} satisfies Record<AlertType, Record<Theme, string>>

export const useAlertVariant = (
    type: MaybeRefOrGetter<AlertType>,
    currentTheme: MaybeRefOrGetter<Theme>,
) => {
    return computed(() => [
        'rounded-xl border p-6',
        alertVariant[toValue(type)][toValue(currentTheme)],
    ])
}
