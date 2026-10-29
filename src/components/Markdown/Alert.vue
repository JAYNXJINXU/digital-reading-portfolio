<script setup lang="ts">
import { computed } from 'vue'
import { themes, type theme } from '@/composables/themes'
import { type AlertType ,useAlertVariant } from '@/composables/alert'

// const props = defineProps<{
//     type?: 'info' | 'warning' | 'success' | 'danger'
// }>()

const props = withDefaults(defineProps<{
    type?: AlertType
    theme?: theme
}>(), {
    type: 'warning',
    theme: 'light'
})

const alertClasses = useAlertVariant(
    () => props.type,
    () => props.theme,
)

// const colorMap = {
//     info: 'info',
//     warning: 'warning',
//     success: 'success',
//     danger: 'error',
// } as const

// const color = computed(() => colorMap[props.type ?? 'info'])
</script>

<template>
    <!-- <section :class="[themes[
        props.theme].peach,
        'rounded-md border p-2',
        themes[props.theme].border,
        themes[props.theme].text
        ]">
        <slot />
    </section> -->
    <section :class="alertClasses">
        <slot />
    </section>
</template>
