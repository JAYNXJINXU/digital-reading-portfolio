<script setup lang="ts">
import { fontAwesomeStrings } from '@/composables/constants.ts'
import { preference, setTheme, toggleTheme } from '@/lib/switch'
import { sizings } from '@/composables/sizing'
import { transition } from '@/composables/themes'
import { ref } from 'vue'
import Settings from './Settings.vue'

const handleThemeChange = (event: Event) => {
    const target = event.target as HTMLSelectElement
    setTheme(target.value)
}

const modal = ref(false)
const fa = fontAwesomeStrings

const openModal = () => {
    modal.value = true
}

const closeModal = () => {
    modal.value = false
}
</script>

<template>
    <section class="w-full z-20 top-0">
        <Settings :modal="modal" @click.self="closeModal" @close="closeModal" />
        <section class="flex flex-wrap items-center justify-between mx-auto p-4">
            <button @click="toggleTheme" :class="[preference == 'dark' ? fa.moon : preference == 'light' ? fa.lightbulb : fa.gear, transition, sizings.fontAwesomeFont]">
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

    <section>
        <button @click="openModal">
            <p>modal</p>
            <slot></slot>
        </button>
    </section>
</template>
