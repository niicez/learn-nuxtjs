<script setup lang="ts">
const city = ref('')
const cityError = ref(false)

const handleClick = async () => {
    if (!city.value) {
        cityError.value = true
        return
    }

    await navigateTo(`/city/${city.value}/car`)
}

</script>

<template>
    <div
        class="font-serif w-[1000px] text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto">
        <input type="text" :class="cityError && 'bg-red-500'"
            class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none" v-model="city"
            placeholder="Search by city..." />

        <button @click="handleClick" class="bg-sky-500 px-10 text-white">Search</button>
    </div>
</template>