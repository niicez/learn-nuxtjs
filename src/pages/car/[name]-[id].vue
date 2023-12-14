<script setup lang="ts">
const route = useRoute()
const { name, id } = route.params

const cars = useCars()
const car = computed(() => {
    return cars.find((car) => car.id === parseInt(id as string))
})

// if car is doesnt exist
if (!car.value) {
    throw createError({
        statusCode: 404,
        message: `Car with ID: ${id} is doesnt exist!`
    })
}

definePageMeta({
    layout: 'custom'
})
useHead({
    title: `${name}`
})
</script>

<template>
    <div v-if="car">
        <CarDetailHero :car="car" />
        <CarDetailAttributes :features="car.features" />
        <CarDetailDescription :description="car.description" />
        <CarDetailContact />
    </div>
</template>