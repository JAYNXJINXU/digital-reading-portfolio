import { computed, toValue, type MaybeRefOrGetter } from 'vue'
import { alertThemes, resolveTheme, type AlertType, type Theme } from './themes'

export type { AlertType } from './themes'

export const useAlertVariant = (
    type: MaybeRefOrGetter<AlertType>,
    currentTheme: MaybeRefOrGetter<Theme>,
) => {
    return computed(() => [
        'border my-6 p-6',
        alertThemes[resolveTheme(toValue(currentTheme))][toValue(type)],
    ])
}
