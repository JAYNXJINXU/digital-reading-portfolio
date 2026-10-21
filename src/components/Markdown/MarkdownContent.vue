<script setup lang="ts">
import { themes, type theme } from '@/composables/themes'

const props = withDefaults(defineProps<{
    theme?: theme
}>(), {
    theme: 'light'
})
</script>

<template>
    <section :class="[themes[
        props.theme].base,
        'rounded-xl border p-6',
        themes[props.theme].border,
        themes[props.theme].text,
        ]">
        <slot />
    </section>
</template>
