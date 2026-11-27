<script setup lang="ts">
import { computed } from 'vue'
import { contentFilesByEntry, type ContentEntry } from '@/lib/contentEntry'
import { contentList } from '@/composables/constants'
import { getContent } from '@/lib/content'
import { layoutSizeClass, sizings } from '@/composables/sizing'
import { Markdown } from '@comark/vue'
import { Math } from '@comark/vue/plugins/math'
import { themeState } from '@/lib/switch'
import { useRoute } from 'vue-router'
import { themes, type Theme } from '@/composables/themes'
import Alert from '@/components/Markdown/MarkdownAlert.vue'
import MarkdownCodeBlock from '@/components/Markdown/MarkdownCodeBlock.vue'
import MarkdownContent from '@/components/Markdown/MarkdownContent.vue'

const props = defineProps<{
    theme?: Theme
}>()

const rT = computed(() =>
    props.theme === 'light' || props.theme === 'dark' ? props.theme : themeState.value,
)

const t = computed(() => themes[rT.value])

const route = useRoute()

const requestedEntry = route.query.entry
const entry: ContentEntry =
    typeof requestedEntry === 'string' &&
    Object.prototype.hasOwnProperty.call(contentFilesByEntry, requestedEntry)
        ? (requestedEntry as ContentEntry)
        : 'blog'

const content = await getContent(route.params.slug as string, contentFilesByEntry[entry])

const components = {
    codeBlock: MarkdownCodeBlock,
    alert: Alert,
    math: Math,
}
</script>

<template>
    <article :class="[sizings.default, layoutSizeClass, 'px-4 py-8']">
        <header>
            <RouterLink
                :to="{ path: '/content', query: { entry } }"
                :class="[contentList.routerLinkBack, t.crust, t.subtext1, 'mb-5']"
            >
                &larr; Back to all posts
            </RouterLink>
        </header>
        <Suspense>
            <MarkdownContent :theme="themeState">
                <Markdown :value="content.tree" :components="{ ...components }" id="md" />
            </MarkdownContent>
        </Suspense>
    </article>
</template>
