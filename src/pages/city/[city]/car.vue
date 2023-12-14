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
            <NuxtErrorBoundary>
                <CarSidebar />
                <NuxtPage />
                <template #error="{ error }">
                    <div class="text-center space-y-5 w-full">
                        <h1 class="text-5xl text-red-600">An error occurred:</h1>
                        <p>{{ error }}</p>
                        <button class="px-3 rounded-full ring-1 ring-blue-500/50 py-2 bg-blue-400 text-white"
                            @click="error.value = null">
                            Go Back
                        </button>
                    </div>
                </template>
            </NuxtErrorBoundary>
        </div>
    </div>
</template>