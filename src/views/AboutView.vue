<script setup lang="ts">
import { result } from '@/lib/content.ts'
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
    <div class="about">
        <h1>This is an about page</h1>
            <Markdown>
                <Suspense>
                    {{ result.frontmatter }}
                    {{ result.nodes }}
                </Suspense>
            </Markdown>

            <!-- <MarkdownDocument v-if="page" :value="page" /> -->

    </div>
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
