<script setup lang="ts">
import { toggleDarkMode } from '@/lib/switch'

</script>

<template>
    <button @click="toggleDarkMode">
        <slot>mode</slot>
    </button>
</template>
