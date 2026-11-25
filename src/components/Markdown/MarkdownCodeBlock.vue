<script setup lang="ts">
import { type Theme } from '@/composables/themes'
import { markdownCodeBlock } from '@/composables/constants'
import { computed, useSlots } from 'vue'

const props = defineProps<{
    theme?: Theme
    file?: string
    lang?: string
}>()

const slots = useSlots()

const parsedMeta = computed(() => {
    if (props.file || props.lang) {
        return {
            file: props.file,
            lang: props.lang,
            fromSlot: false
        }
    }

    const vnodes = slots.default?.() || []
    const firstChild = vnodes[0]?.children

    const rawText = typeof firstChild === 'string' ? firstChild : Array.isArray(firstChild) && typeof firstChild[0] === 'string' ? firstChild[0] : ''

    if (rawText.includes('-')) {
        const [file, lang] = rawText.split('-').map(s => s.trim())
        return {
            file,
            lang,
            fromSlot: true
        }
    }

    return {
        file: '',
        lang: '',
        fromSlot: false
    }
})
</script>

<template>
    <section :class="markdownCodeBlock.codeBlock">
        <p v-if="parsedMeta.lang || parsedMeta.file">
            <span>{{ lang }}</span>&nbsp;<span>{{ file }}</span>
        </p>
        <slot v-if="!parsedMeta.fromSlot" />
    </section>
</template>
