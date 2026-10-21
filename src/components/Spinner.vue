<script setup lang="ts">
import { themes, type theme } from '@/composables/themes'

const props = withDefaults(defineProps<{
    theme?: theme
}>(), {
    theme: 'light'
})

const spinnerClass = 'inline-block my-12 h-16 w-16 animate-spin rounded-full border-8 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite]'
</script>

<template>
    <section :class="[themes[
        props.theme
        ].base, spinnerClass,
        themes[props.theme].border,
        themes[props.theme].text,
        ]">
        <slot />
    </section>
</template>
