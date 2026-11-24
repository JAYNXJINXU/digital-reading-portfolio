<script setup lang="ts">
import { computed, ref } from 'vue'
import { modal, settingsSidebarItems, settingsThemes, settingsWidth } from '@/composables/constants'
import { layoutSize, setLayoutSize } from '@/composables/sizing'
import { setTheme, themeState } from '@/lib/switch'
import { resolveTheme, themes } from '@/composables/themes'

const { modalToggle } = defineProps<{
    modalToggle?: boolean
}>()

const activeTab = ref('appearance')

const syncWithSystem = ref(false)
const selectedTheme = ref(localStorage.getItem('theme-preference'))

if (selectedTheme.value === 'system') {
    syncWithSystem.value = true
}

const selectTheme = (themeId: string) => {
    syncWithSystem.value = false
    selectedTheme.value = themeId
    setTheme(themeId)
}

const rT = computed(() => themeState.value)

const tR = computed(() => themes[resolveTheme(rT.value)])

// close button, not yet implemented
// const emit = defineEmits<{
//     (e: 'close'): void
// }>()
</script>

<template>
    <Transition name="fade">
        <section v-if="modalToggle"
            :class="[modal.mainModal, { 'opacity-0': !modalToggle, 'opacity-100': modalToggle }]"
        >
            <aside :class="[modal.side, tR.base]">
                <nav :class="modal.nav.mainNav">
                    <p :class="[modal.nav.text, tR.text]">Settings</p>
                    <button
                        v-for="i in settingsSidebarItems" :key="i.id"           @click="activeTab = i.id"
                        :class="[modal.sideSetting.activeTabButton, activeTab === i.id ? [modal.sideSetting.activeTabButtonText, tR.mantle, tR.subtext1] : [tR.mantle, tR.subtext1]]"
                    >
                        {{ i.label }}
                    </button>
                </nav>
            </aside>

            <section :class="[modal.setting.beforeMain, tR.mantle, tR.subtext0]">
                <main :class="modal.setting.main">
                    <section v-if="activeTab === 'appearance'">
                        <h1 :class="[modal.setting.h1, tR.text]">Appearance</h1>
                        <section>
                            <!-- <h2 :class="modal.setting.h2">Theme</h2>
                            <section :class="modal.setting.section1">
                                <button @click="toggleSystemSync; syncWithSystem = true; setTheme('system')"
                                    :class="[
                                    'relative inline-flex h-6 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none',
                                    syncWithSystem ? 'bg-[#23a55a]' : 'bg-[#80848e]'
                                ]">
                                    <span
                                        :class="[
                                        'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                                        syncWithSystem ? 'translate-x-4' : 'translate-x-0'
                                        ]"
                                    />
                                </button>
                            </section> -->
                            <section :class="modal.setting.themeSection">
                                <h3 :class="[modal.setting.h3, tR.text]">Default Themes</h3>
                                <section :class="modal.setting.sectionFlex">
                                    <button
                                        v-for="t in settingsThemes"
                                        :key="t.id"
                                        :title="t.name"
                                        @click="selectTheme(t.id); syncWithSystem = false"
                                        :class="[
                                        modal.setting.themeButtons1,
                                        t.bgClass,
                                        !syncWithSystem && selectedTheme === t.id
                                            ? [modal.setting.sync1, tR.mantle]
                                            : `hover:${tR.crust}`
                                        ]"
                                    >
                                        <span
                                            v-if="!syncWithSystem && selectedTheme === t.id"
                                            :class="[modal.setting.span1, tR.lavender, tR.text]"
                                            >
                                            <svg class="w-3 h-3 stroke-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                    </button>
                                    <button
                                        @click="syncWithSystem = true; setTheme('system')"
                                        :class="[
                                        [modal.setting.themeButtons2, tR.text, tR.crust],
                                        syncWithSystem
                                            ? [modal.setting.ternarySync1, tR.mauve, tR.text, tR.base]
                                            : [modal.setting.ternarySync2, tR.crust]
                                        ]"
                                    >
                                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                        </svg>
                                            <span
                                            v-if="syncWithSystem"
                                            :class="[
                                                modal.setting.span1
                                            ]"
                                            >
                                                <svg class="w-3 h-3 stroke-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </span>
                                    </button>
                                </section>

                                <hr :class="[modal.setting.hr, tR.mantle]" />

                                <section>
                                    <h2 :class="modal.setting.h2">Width</h2>
                                    <section
                                        v-for="o in settingsWidth"
                                        :key="o.id"
                                    >
                                    <button
                                        @click="setLayoutSize(o.id)"
                                        :title="o.desc"
                                        :class="[
                                            [modal.setting.text1, tR.text],
                                            layoutSize == o.id ? [modal.setting.widthButtonsActive, tR.surface2] :  [modal.setting.widthButtons, `hover:${tR.surface0}`]
                                        ]"
                                    >{{ o.label }}</button>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </section>
                    <section v-if="activeTab === 'content'">
                        <h1 :class="[modal.content.placeholderHeader, tR.text]">{{ activeTab }}</h1>
                        <section :class="[modal.content.placeholderText, tR.subtext0]">
                            <p>Settings for {{ activeTab }} tab goes here.</p>
                        </section>
                    </section>
                </main>
            </section>
        </section>
    </Transition>
</template>

<style lang="css" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
