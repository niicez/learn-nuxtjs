<script setup lang="ts">
const route = useRoute()

const { city, make } = route.params

definePageMeta({
    layout: 'custom'
})

useHead({
    title: `${make ? toTitleCase(make.toString()) : 'Cars'} in ${toTitleCase(city.toString())}`
})
</script>

<template>
    <div>
        <div class="mt-32 flex">
            <CarSidebar />

            <div class="w-full">
                <NuxtPage />
            </div>
        </div>
    </div>
</template>