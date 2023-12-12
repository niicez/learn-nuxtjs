<script setup lang="ts">
const route = useRoute()

const { city, make } = route.params

useHead({
    title: `${make ? make : 'Cars'} in ${city}`
})
</script>

<template>
    <div>
        <Navbar />
        <div class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5">
            <div class="mt-32 flex">
                <CarSidebar />

                <div class="w-full">
                    <NuxtPage />
                </div>
            </div>
        </div>
    </div>
</template>