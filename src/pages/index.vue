<script setup lang="ts">
import { getAllContent } from '@/lib/content'

const content = await getAllContent()
</script>

<template>
    <ul>
        <li v-for="i in content" :key="i.slug">
            {{ i.title }}
        </li>
    </ul>
</template>
