<script setup lang="ts">
import { result } from '@/lib/content.ts'
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
