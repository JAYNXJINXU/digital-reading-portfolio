<script setup lang="ts">
import { fontAwesomeStrings, currentSettings } from '@/composables/constants'
import { layoutSize, setLayoutSize, sizings } from '@/composables/sizing'
import { preference, setTheme, themeState, toggleTheme } from '@/lib/switch'
import { ref } from 'vue'

const { modal } = defineProps<{
    modal?: boolean
}>()

const cs = currentSettings.currentSetting

// defineEmits(['close'])
</script>

<template>
    <Transition name="fade">
        <section
            v-if="modal"
            class="fixed z-50 flex items-center justify-center w-full max-h-full p-4 overflow-x-hidden overflow-y-auto inset-0 bg-gray-900/70 backdrop-blur-sm"
            aria-modal="true"
            role="dialog"
            :class="{ 'opacity-0': !modal, 'opacity-100': modal }"
        >
            <section
                class="w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow dark:bg-gray-700 text-center p-6"
            >
                <!-- check -->
                <!-- https://flowbite.com/docs/components/tabs/#tabs-with-underline -->

                <button @click="setTheme('system')">System</button>
                &nbsp;
                <button @click="setTheme('light')" :class="themeState === 'light' ? cs : ''">
                    Light
                </button>
                &nbsp;
                <button @click="setTheme('dark')" :class="themeState === 'dark' ? cs : ''">
                    Dark
                </button>
                &nbsp;
                <button
                    @click="setLayoutSize('compact')"
                    :class="layoutSize === 'compact' ? cs : ''"
                >
                    Compact
                </button>
                &nbsp;
                <button
                    @click="setLayoutSize('standard')"
                    :class="layoutSize === 'standard' ? cs : ''"
                >
                    Standard
                </button>
                &nbsp;
                <button @click="setLayoutSize('wide')" :class="layoutSize === 'wide' ? cs : ''">
                    Wide
                </button>
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
