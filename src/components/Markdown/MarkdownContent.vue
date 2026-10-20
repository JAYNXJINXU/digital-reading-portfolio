<script setup lang="ts">
import { catppuccinLight, catppuccinDark, type theme } from '@/composables/themes'

const props = withDefaults(defineProps<{
    theme?: theme
}>(), {
    theme: 'light'
})

const themes = {
    light: catppuccinLight,
    dark: catppuccinDark
}
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
