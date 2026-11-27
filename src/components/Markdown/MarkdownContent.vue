<script setup lang="ts">
import { computed } from 'vue'
import { themes, type Theme } from '@/composables/themes'
import { themeState } from '@/lib/switch'

const props = defineProps<{
    theme?: Theme
}>()

const rT = computed(() =>
    props.theme === 'light' || props.theme === 'dark' ? props.theme : themeState.value,
)

const t = computed(() => themes[rT.value])
</script>

<template>
    <section :class="[t.base, 'border p-6', t.text, t.crust]">
        <slot />
    </section>
</template>
