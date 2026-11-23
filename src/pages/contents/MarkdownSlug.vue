<script setup lang="ts">
import { blogFiles } from '@/lib/glob'
import { getContent } from '@/lib/content'
import { Markdown } from '@comark/vue'
import { Math } from '@comark/vue/plugins/math'
import { themeState } from '@/lib/switch'
import { useRoute } from 'vue-router'
import Alert from '@/components/Markdown/MarkdownAlert.vue'
import MarkdownContent from '@/components/Markdown/MarkdownContent.vue'

const route = useRoute()
// this needs some attention
const content = await getContent(route.params.slug as string, blogFiles)

const components = {
    markdownContent: MarkdownContent,
    alert: Alert,
    math: Math,
}
</script>

<template>
    <article>
        <header>
            <RouterLink to="/content"> &larr; Back to all posts </RouterLink>
            <!-- add none, sparse and verbose -->
            <h1>{{ content.title }}</h1>
        </header>
        <Suspense>
            <MarkdownContent :theme="themeState">
                <Markdown :value="content.tree" :components="{ ...components }" id="md" />
            </MarkdownContent>
        </Suspense>
    </article>
</template>
