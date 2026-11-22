<script setup lang="ts">
import { computed } from 'vue'
import { resolveTheme, themes, type Theme } from '@/composables/themes'

const props = withDefaults(
    defineProps<{
        theme?: Theme
    }>(),
    {
        theme: 'system',
    },
)

const t = computed(() => themes[resolveTheme(props.theme)])

const spinnerClass =
    'inline-block my-12 h-16 w-16 animate-spin rounded-full border-8 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite]'
</script>

<template>
    <!-- <section :class="[themes[
        props.theme
        ].base, spinnerClass,
        themes[props.theme].border,
        themes[props.theme].text,
        ]">
        <slot />
    </section> -->
    <section :class="[t.base, spinnerClass, t.text, t.crust]">
        <slot />
    </section>
</template>
