<script setup lang="ts">
import { getContent } from '@/lib/content'
import { useRoute } from 'vue-router'
import Alert from '@/components/Alert.vue'
import { Markdown } from '@comark/vue'

const route = useRoute()
const content = await getContent(route.params.slug as string)
</script>

<template>
    <article v-if="content">
        <header>
            <RouterLink to="/">
                &larr; Back to all posts
            </RouterLink>
            <h1>{{ content.title }}</h1>
        </header>
        <Suspense>
            <Markdown :value="content.tree" :components="{ alert: Alert }" />
        </Suspense>
    </article>
</template>
