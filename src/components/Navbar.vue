<script setup lang="ts">
import { fontAwesomeStrings } from '@/composables/constants.ts'
import { sizings } from '@/composables/sizing'
import { ref } from 'vue'
import Settings from './SettingsComponent.vue'

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
            <button @click="openModal">
                <i :class="[fa.gear, sizings.fontAwesomeFont]"></i>
                <slot></slot>
            </button>
            <RouterLink to="/">About</RouterLink>
        </section>
    </section>
</template>
