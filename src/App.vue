<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import { sizings } from './composables/sizing.ts'

</script>

<template>
    <Navbar />
    <Suspense>
         <template #default>
            <main :class="[sizings.default, sizings.defaults()]">
                <RouterView />
            </main>
         </template>
    </Suspense>
</template>
