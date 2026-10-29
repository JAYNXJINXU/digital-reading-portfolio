<script setup lang="ts">

</script>

<template>
    <p>hello</p>
    <RouterLink to="/content">
        <slot>
            <button>To content</button>
        </slot>
    </RouterLink>
</template>
