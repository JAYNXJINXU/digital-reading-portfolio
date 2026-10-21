<script setup lang="ts">
import Spinner from '@/components/Spinner.vue';
import { getAllContent } from '@/lib/content'

const content = await getAllContent()
</script>

<template>
    <section>
        <Spinner />
        <ul class="space-y-6">
            <li v-for="c in content" :key="c.slug">
                <RouterLink :to="`/content/${c.slug}`">
                    <h1>{{ c.slug }}</h1>
                </RouterLink>
            </li>
        </ul>
    </section>
</template>
