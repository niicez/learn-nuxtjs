<script setup lang="ts">
const error = useError() as unknown as {
    statusCode: number
    message: string
}

const handleClick = async () => {
    return clearError({ redirect: '/' })
}
</script>

<template>
    <div class="flex flex-col space-y-3 justify-center items-center h-screen">
        <h1 class="text-8xl font-medium">{{ error.statusCode }}</h1>
        <h1 class="text-4xl font-medium">{{ error.message }}</h1>
        <button @click="handleClick" class="py-2.5 bg-blue-500 px-5 rounded-md text-white font-bold">Go Back</button>
    </div>
</template>