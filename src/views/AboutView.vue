<script setup lang="ts">
import Index from '@/pages/index.vue'

// import { result } from '@/lib/content.ts'
// import { ref, onMounted } from 'vue'
// import { Markdown } from '@comark/vue'
// import markdownContent from '../../content/hello.md?raw'

// const content = ref(markdownContent)
// const error = ref('')

// onMounted(async () => {
//     try {
//         const response = await fetch('../../content/hello.md?raw')

//         if (!response.ok) {
//             throw new Error(`Failed to load Markdown: ${response.status}`)
//         }

//         content.value = await response.text()
//     } catch (e) {
//         error.value = e instanceof Error ? e.message : 'Failed to load file'
//     }
// })
// import { ref, watchEffect } from 'vue'
// import { MarkdownDocument } from '@comark/vue'
// import type { ContentFile } from 'comark-content'
// import { content, version } from '@/composables/useContent'

// const page = ref<ContentFile | null>(null)

// watchEffect(async () => {
//     version.value
//     page.value = (await content.get('/')) ?? null
// })
</script>

<template>
    <!-- <div class="about">
        <h1>This is an about page</h1>

    </div> -->
    <!-- <Markdown>
        <Suspense>
            {{ result.frontmatter }}
            {{ result.nodes }}
        </Suspense>
    </Markdown> -->

    <!-- <MarkdownDocument v-if="page" :value="page" /> -->
    <!-- <Suspense>
        <template #default>
            <Markdown :value="content" />
        </template>
        <template #fallback>
            <p>Loading Markdown...</p>
        </template>
    </Suspense> -->
    <Suspense>
        <Index />
    </Suspense>
</template>

<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>
