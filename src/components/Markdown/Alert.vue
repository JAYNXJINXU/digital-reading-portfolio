<script setup lang="ts">
import { computed } from 'vue'
import { themes, type theme } from '@/composables/themes'

// const props = defineProps<{
//     type?: 'info' | 'warning' | 'success' | 'danger'
// }>()

const props = withDefaults(defineProps<{
    theme?: theme
}>(), {
    theme: 'light'
})

// const colorMap = {
//     info: 'info',
//     warning: 'warning',
//     success: 'success',
//     danger: 'error',
// } as const

// const color = computed(() => colorMap[props.type ?? 'info'])
</script>

<template>
    <section :class="[themes[
        props.theme].peach,
        'rounded-md border p-2',
        themes[props.theme].border,
        themes[props.theme].text
        ]">
        <slot />
    </section>
</template>
