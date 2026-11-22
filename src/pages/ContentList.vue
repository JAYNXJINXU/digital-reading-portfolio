<script setup lang="ts">
import { computed } from 'vue'
import { getAllContent } from '@/lib/content'
import { themes, type Theme } from '@/composables/themes'
import { themeState } from '@/lib/switch'
// import Spinner from '@/components/Spinner.vue'

const content = await getAllContent()

const props = defineProps<{
    theme?: Theme
}>()

const rT = computed(() =>
    props.theme === 'light' || props.theme === 'dark' ? props.theme : themeState.value,
)

const t = computed(() => themes[rT.value])
</script>

<template>
    <section>
        <RouterLink to="/"> &larr; Back to index </RouterLink>
        <!-- <Spinner /> -->
        <ul class="space-y-6 space-x-24 flex flex-row" :class="[t.base, t.text, t.crust]">
            <li v-for="c in content" :key="c.slug">
                <RouterLink :to="`/content/${c.slug}`">
                    <h1>{{ c.slug }}</h1>
                    <h2>Title : {{ c.title }}</h2>
                    <h2>Tags : {{ c.tags }}</h2>
                    <h2>Authors : {{ c.authors }}</h2>
                    <h2>Description : {{ c.description }}</h2>
                    <h2>Publication Date : {{ c.pubDate }}</h2>
                    <h2>Modified Date : {{ c.modDate }}</h2>
                </RouterLink>
            </li>
        </ul>
    </section>
</template>
