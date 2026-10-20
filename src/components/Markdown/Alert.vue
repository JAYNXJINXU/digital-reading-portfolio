<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
    type?: 'info' | 'warning' | 'success' | 'danger'
}>()

const colorMap = {
    info: 'info',
    warning: 'warning',
    success: 'success',
    danger: 'error',
} as const

const color = computed(() => colorMap[props.type ?? 'info'])
</script>

<template>
    <section>
        <slot />
    </section>
</template>
