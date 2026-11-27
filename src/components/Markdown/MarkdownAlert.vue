<script setup lang="ts">
import { computed } from 'vue'
import { type Theme } from '@/composables/themes'
import { type AlertType, useAlertVariant } from '@/composables/alert'
import { themeState } from '@/lib/switch'

const props = defineProps<{
    type?: AlertType
    theme?: Theme
}>()

const resolvedTheme = computed(() => {
    const theme = props.theme ?? 'system'
    return theme === 'system' ? themeState.value : theme
})

const alertClasses = useAlertVariant(
    () => props.type ?? 'info',
    () => resolvedTheme.value,
)
</script>

<template>
    <section :class="alertClasses">
        <slot />
    </section>
</template>
