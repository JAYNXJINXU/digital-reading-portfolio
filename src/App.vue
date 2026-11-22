<script setup lang="ts">
import { layoutSizeClass, sizings } from './composables/sizing.ts'
// import NavBar from './components/NavBar.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
    <NavBar />
    <Suspense>
        <template #default>
            <main :class="[sizings.default, layoutSizeClass]">
                <!-- add like refresh thingy for sizing here. -->
                <RouterView />
            </main>
        </template>
    </Suspense>
</template>
