<script setup lang="ts">
import { type Theme } from '@/composables/themes'
import { type AlertType, useAlertVariant } from '@/composables/alert'


const props = withDefaults(
    defineProps<{
        type?: AlertType
        theme?: Theme
    }>(),
    {
        type: 'warning',
        theme: 'system',
    },
)

const alertClasses = useAlertVariant(
    () => props.type,
    () => props.theme,
)
</script>

<template>
    <section :class="alertClasses">
        <slot />
    </section>
</template>
