<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { computed, ref } from 'vue'
import { fontAwesomeStrings, navbar } from '@/composables/constants'
import { sizings } from '@/composables/sizing'
import { themes, type Theme } from '@/composables/themes'
import { themeState } from '@/lib/switch'
import Settings from './SettingsComponent.vue'

const modal = ref(false)
const fa = [
    [fontAwesomeStrings.gear, sizings.fontAwesomeFont],
    [fontAwesomeStrings.home, sizings.fontAwesomeFont],
]

const openModal = () => {
    modal.value = true
}

const closeModal = () => {
    modal.value = false
}

const props = defineProps<{
    theme?: Theme
}>()

const rT = computed(() =>
    props.theme === 'light' || props.theme === 'dark' ? props.theme : themeState.value,
)

const t = computed(() => themes[rT.value])
</script>

<template>
    <section :class="[navbar.nav]">
        <Settings :modal-toggle="modal" @click.self="closeModal" @close="closeModal" />
        <section :class="[navbar.navSection, t.base, t.text, t.crust]">
            <button @click="openModal">
                <i :class="fa[0]"></i>
                <slot></slot>
            </button>
            <RouterLink to="/">
                <i :class="fa[1]"></i>
            </RouterLink>
        </section>
    </section>
</template>
