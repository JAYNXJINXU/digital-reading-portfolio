<script setup lang="ts">
import { computed } from 'vue'
// import { resolveTheme, themes, type Theme } from '@/composables/themes'
import { jumbotron, transition } from '@/composables/constants'
import { jumbotronString, jumbotronRouterString } from '@/composables/strings'
import { themes, type Theme } from '@/composables/themes'
import { themeState } from '@/lib/switch'

const props = defineProps<{
    theme?: Theme
}>()

const rT = computed(() =>
    props.theme === 'light' || props.theme === 'dark' ? props.theme : themeState.value,
)

const t = computed(() => themes[rT.value])
</script>
<!-- change to jumbotron with cards -->
<template>
    <section :class="[t.base, t.text, jumbotron.position, 'my-6']">
        <h1 :class="[jumbotron.heading1]">
            {{ jumbotronString.mainHeader }}
        </h1>
        <RouterLink to="/content">
            <slot :class="[jumbotron.text, jumbotron.relative]">
                <button :class="[jumbotron.button, transition.transition]">
                    {{ jumbotronRouterString.content }}
                    <span> &rarr; </span>
                </button>
            </slot>
        </RouterLink>
    </section>
    <section class="flex flex-row gap-5 my-10">
        <section :class="[t.base, t.text, jumbotron.position]">
            <h1 :class="[jumbotron.heading1]">
                {{ jumbotronString.names }}
            </h1>
            <RouterLink to="/content">
                <slot :class="[jumbotron.text, jumbotron.relative]">
                    <button :class="[jumbotron.button, transition.transition]">
                        {{ jumbotronRouterString.members }}
                        <span> &rarr; </span>
                    </button>
                </slot>
            </RouterLink>
        </section>
        <section :class="[t.base, t.text, jumbotron.position]">
            <h1 :class="[jumbotron.heading1]">
                {{ jumbotronString.whyDoThis }}
            </h1>
            <RouterLink to="/content">
                <slot :class="[jumbotron.text, jumbotron.relative]">
                    <button :class="[jumbotron.button, transition.transition]">
                        {{ jumbotronRouterString.reason }}
                        <span> &rarr; </span>
                    </button>
                </slot>
            </RouterLink>
        </section>
    </section>
    <section class="flex flex-row gap-5 my-10">
        <section :class="[t.base, t.text, jumbotron.position]">
            <h1 :class="[jumbotron.heading1]">
                {{ jumbotronString.PPE }}
            </h1>
            <RouterLink to="/content">
                <slot :class="[jumbotron.text, jumbotron.relative]">
                    <button :class="[jumbotron.button, transition.transition]">
                        {{ jumbotronRouterString.content }}
                        <span> &rarr; </span>
                    </button>
                </slot>
            </RouterLink>
        </section>
        <section :class="[t.base, t.text, jumbotron.position]">
            <h1 :class="[jumbotron.heading1]">
                {{ jumbotronString.contentTest }}
            </h1>
            <RouterLink to="/content">
                <slot :class="[jumbotron.text, jumbotron.relative]">
                    <button :class="[jumbotron.button, transition.transition]">
                        {{ jumbotronRouterString.noReason }}
                        <span> &rarr; </span>
                    </button>
                </slot>
            </RouterLink>
        </section>
    </section>
</template>
