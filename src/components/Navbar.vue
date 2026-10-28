<script setup lang="ts">
import { setTheme, themeState, toggleDarkMode } from '@/lib/switch'
import { sizings, transition } from '@/composables/themes'

</script>

<template>
    <section class="w-full z-20 top-0">
        <section class="flex flex-wrap items-center justify-between mx-auto p-4">
            <button @click="toggleDarkMode" :class="[themeState == 'dark' ? 'fa-regular fa-moon' : 'fa-regular fa-lightbulb', transition, sizings.fontAwesome]">
                <slot></slot>
            </button>
            <RouterLink to="/">About</RouterLink>
        </section>
    </section>
    <!-- <select @change="setTheme($event.target.value)" :value="themeState">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
    </select> -->
</template>
