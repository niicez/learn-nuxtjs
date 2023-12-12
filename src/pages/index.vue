<script setup lang="ts">
const { data } = await useFetch('/api/hello')
</script>

<template>
    <div>
        <p>{{ data }}</p>
        <h1 class="text-center">Hello World!</h1>
    </div>
</template>