<script setup lang="ts">
import { layoutSizeClass, sizings } from './composables/sizing.ts'
import NavBar from '@/components/Navbar.vue'
</script>

<template>
    <NavBar />
    <Suspense>
        <template #default>
            <main :class="[sizings.default, layoutSizeClass]">
                <RouterView />
            </main>
        </template>
    </Suspense>
</template>
