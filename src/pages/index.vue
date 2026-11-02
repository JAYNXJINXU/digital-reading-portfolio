<script setup lang="ts">
// import Spinner from '@/components/Spinner.vue'
import { getAllContent } from '@/lib/content'

const content = await getAllContent()
</script>

<template>
    <section>
        <!-- <Spinner /> -->
        <ul class="space-y-6 space-x-24 flex flex-row">
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
