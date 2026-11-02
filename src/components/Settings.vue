<script setup lang="ts">
const { modal } = defineProps<{
    modal?: boolean
}>()

defineEmits(['close'])
</script>

<template>
    <Transition name="fade">
        <section v-if="modal" class="fixed z-50 flex items-center justify-center w-full max-h-full p-4 overflow-x-hidden overflow-y-auto inset-0 bg-gray-900/70 backdrop-blur-sm" aria-modal="true" role="dialog" :class="{ 'opacity-0': !modal, 'opacity-100': modal }">
            <section class="w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow dark:bg-gray-700 text-center"">
                <p>hello</p>
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
