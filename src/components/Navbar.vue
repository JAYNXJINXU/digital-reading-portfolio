<script setup lang="ts">
import { preference, setTheme, toggleTheme } from '@/lib/switch'
import { sizings } from '@/composables/sizing'
import { transition } from '@/composables/themes'

const handleThemeChange = (event: Event) => {
    const target = event.target as HTMLSelectElement
    setTheme(target.value)
}
</script>

<template>
    <section class="w-full z-20 top-0">
        <section class="flex flex-wrap items-center justify-between mx-auto p-4">
            <button @click="toggleTheme" :class="[preference == 'dark' ? 'fa-regular fa-moon' : preference == 'light' ? 'fa-regular fa-lightbulb' : 'fa-solid fa-gear', transition, sizings.fontAwesome]">
                <slot></slot>
            </button>
            <RouterLink to="/">About</RouterLink>
        </section>
    </section>
    <!-- <select @change="handle(($event.target as HTMLSelectElement).value)" :value="themeState"> -->
    <select @change="handleThemeChange" :value="preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
    </select>
</template>
