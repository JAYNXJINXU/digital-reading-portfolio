<script setup lang="ts">
import { setTheme, themeState, toggleDarkMode } from '@/lib/switch'

</script>

<template>
    <button @click="toggleDarkMode" :class="themeState == 'dark' ? 'fa-regular fa-moon' : 'fa-regular fa-lightbulb'">
        <slot></slot>
    </button>
    <select @change="setTheme($event.target.value)" :value="themeState">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
    </select>
</template>
