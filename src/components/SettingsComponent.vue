<script setup lang="ts">
import { fontAwesomeStrings } from '@/composables/constants'
import { setLayoutSize, sizings } from '@/composables/sizing'
import { preference, setTheme, toggleTheme } from '@/lib/switch'
import { ref } from 'vue'

const { modal } = defineProps<{
    modal?: boolean
}>()

// defineEmits(['close'])
</script>

<template>
    <Transition name="fade">
        <section v-if="modal" class="fixed z-50 flex items-center justify-center w-full max-h-full p-4 overflow-x-hidden overflow-y-auto inset-0 bg-gray-900/70 backdrop-blur-sm" aria-modal="true" role="dialog" :class="{ 'opacity-0': !modal, 'opacity-100': modal }">
            <section class="w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow dark:bg-gray-700 text-center p-6">
                <!-- check -->
                <!-- https://flowbite.com/docs/components/tabs/#tabs-with-underline -->

                <button @click="setTheme('system')">System</button>
                &nbsp;
                <button @click="setTheme('light')">Light</button>
                &nbsp;
                <button @click="setTheme('dark')">Dark</button>
                &nbsp;
                <button @click="setLayoutSize('compact')">Compact</button>
                &nbsp;
                <button @click="setLayoutSize('standard')">Standard</button>
                &nbsp;
                <button @click="setLayoutSize('wide')">Wide</button>
            </section>
        </section>
    </Transition>
</template>

<style lang="css" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
