<script setup lang="ts">
const route = useRoute()
const { name } = route.params

definePageMeta({
    layout: 'custom'
})

useHead({
    title: `${name}`
})

</script>

<template>
    <div>
        <CarDetailHero />
        <CarDetailAttributes />
        <CarDetailDescription />
        <CarDetailContact />
    </div>
</template>