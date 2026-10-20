<script setup lang="ts">
import { getContent } from '@/lib/content'
import { Markdown } from '@comark/vue'
import { themeState } from '@/lib/switch'
import { useRoute } from 'vue-router'
import Alert from '@/components/Markdown/Alert.vue'
import MarkdownContent from '@/components/Markdown/MarkdownContent.vue'

const route = useRoute()
const content = await getContent(route.params.slug as string)

const components = {
    markdownContent: MarkdownContent,
    alert: Alert
}
</script>

<template>
    <article>
        <header>
            <RouterLink to="/">
                &larr; Back to all posts
            </RouterLink>
            <h1>{{ content.title }}</h1>
        </header>
        <Suspense>
            <MarkdownContent :theme="themeState">
                <Markdown :value="content.tree" :components="{ components }" />
            </MarkdownContent>
        </Suspense>
    </article>
</template>
