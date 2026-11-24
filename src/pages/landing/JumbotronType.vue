<script setup lang="ts">
import { computed } from 'vue'
import { jumbotron, transition } from '@/composables/constants'
import { themes, type Theme } from '@/composables/themes'
import { themeState } from '@/lib/switch'

import { cards } from '@/lib/contentEntry'

const props = defineProps<{
    theme?: Theme
}>()

const rT = computed(() =>
    props.theme === 'light' || props.theme === 'dark' ? props.theme : themeState.value,
)

const t = computed(() => themes[rT.value])
</script>

<template>
    <section :class="jumbotron.table">
        <article
            v-for="card in cards"
            :key="card.id"
            :class="[
                t.base,
                t.text,
                jumbotron.position,
                jumbotron.background,
                jumbotron.card,
            ]"
        >
            <h2 :class="jumbotron.heading1">
                {{ card.post?.title ?? card.heading }}
            </h2>

            <p v-if="card.post?.description" :class="jumbotron.text">
                {{ card.post.description }}
            </p>

            <RouterLink :to="{ path: '/content', query: { entry: card.entry } }">
                <button :class="[jumbotron.button, transition.transition]">
                    {{ card.button }}
                    <span>&rarr;</span>
                </button>
            </RouterLink>
        </article>
    </section>
</template>
