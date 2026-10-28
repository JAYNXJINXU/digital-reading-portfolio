<script setup lang="ts">
import Navbar from './components/Navbar.vue'

</script>

<template>
    <Navbar />
    <Suspense>
         <template #default>
             <RouterView />
         </template>
    </Suspense>
</template>
