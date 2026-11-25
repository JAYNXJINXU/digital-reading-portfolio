<script setup lang="ts">
import { computed } from 'vue'
import { contentFilesByEntry, type ContentEntry } from '@/lib/contentEntry'
import { contentList } from '@/composables/constants'
import { contentString } from '@/composables/strings'
import { getAllContent, type PostMeta } from '@/lib/content'
import { layoutSizeClass, sizings } from '@/composables/sizing'
import { propertyState } from '@/lib/list'
import { themes, type Theme } from '@/composables/themes'
import { themeState } from '@/lib/switch'
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'

const props = defineProps<{
    theme?: Theme
}>()

const rT = computed(() =>
    props.theme === 'light' || props.theme === 'dark' ? props.theme : themeState.value,
)

const t = computed(() => themes[rT.value])

const route = useRoute()
const content = ref<PostMeta[]>([])

const selectedEntry = computed<ContentEntry>(() => {
    const entry = route.query.entry

    return typeof entry === 'string' &&
        Object.prototype.hasOwnProperty.call(contentFilesByEntry, entry)
        ? entry as ContentEntry
        : 'blog'
})

watch(
    selectedEntry,
    async (entry) => {
        const files = contentFilesByEntry[entry]
        const posts = await getAllContent(files)
        content.value = posts,
        propertyState
    },
    { immediate: true },
)
</script>

<template>
    <section :class="[sizings.default, layoutSizeClass, 'px-4 py-8']">
        <RouterLink to="/" :class="[contentList.routerLinkBack, t.base, t.subtext1]"> &larr; Back to index </RouterLink>
        <section
            :class="[contentList.grid, t.text]"
        >
            <section
                v-for="c in content"
                :key="c.slug"
                :class="[contentList.gridContent, t.base]"
            >
            <img class="rounded-base" :src="contentList.palceholderImage.link" alt="placeholder image" />
            <section v-if="propertyState === 'title'">
                <h5 :class="[contentList.h5]" :title="`${c.title} : ${c.description}`">{{ c.slug }}</h5>
            </section>
            <section v-if="propertyState === 'sparse'">
                <h5 :class="[contentList.h5]" :title="`${c.title} : ${c.description}`">{{ c.slug }}</h5>
                <p :class="[contentList.p, t.text]">Authors : <span :class="[t.subtext0]">{{ c.authors.join(', ') }}</span></p>
                <p :class="[contentList.p, t.text]">Publish Date: : <span :class="[t.subtext0]">{{ c.pubDate }}</span></p>
            </section>
            <section v-if="propertyState === 'verbose'">
                <h5 :class="[contentList.h5]" :title="`${c.title} : ${c.description}`">{{ c.slug }}</h5>
                <p :class="[contentList.p, t.text]">Authors : <span :class="[t.subtext0]">{{ c.authors.join(', ') }}</span></p>
                <p :class="[contentList.p, t.text]">Tags : <span :class="[t.subtext0]">{{ c.tags }}</span></p>
                <p :class="[contentList.p, t.text]">Publish Date: : <span :class="[t.subtext0]">{{ c.pubDate }}</span></p>
            </section>
                <RouterLink :to="{ path: `/content/${c.slug}`, query: { entry: selectedEntry } }" :class="[contentList.routerLinkGo]">
                    {{ contentString.button }} &rarr;
                </RouterLink>
            </section>
        </section>
    </section>
</template>
