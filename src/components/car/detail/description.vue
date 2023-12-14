<script setup lang="ts">

defineProps<{
    description: Car['description']
}>()

</script>

<template>
    <div class="mt-5">
        <p class="mb-10">
            {{ description }}
        </p>
    </div>
</template>