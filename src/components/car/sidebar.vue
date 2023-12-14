<script setup lang="ts">

const route = useRoute()
const { city, make } = route.params

interface IModal {
    make: boolean;
    location: boolean;
    price: boolean;
}

const modal = ref<IModal>({
    make: false,
    location: false,
    price: false
})
const cityRef = ref('')

const updateModal = (key: keyof IModal) => {
    modal.value[key] = !modal.value[key]
}

const onChangeLocation = () => {
    if (!cityRef.value) return

    if (!isNaN(parseInt(cityRef.value))) {
        throw createError({
            message: `Error city just accept 'String' only!`
        })
    }

    updateModal('location')
    navigateTo(`/city/${cityRef.value}/car/${make}`)
    cityRef.value = ''
}

</script>

<template>
    <div class="shadow border w-64 mr-10 z-30 h-[190px]">
        <div class="p-5 flex justify-between relative cursor-pointer border-b">
            <h3>Location</h3>
            <h3 @click="updateModal('location')" class="text-blue-400 capitalize">{{ city }}</h3>
            <div v-if="modal.location" class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white">
                <input v-model="cityRef" type="text" class="border p-1 rounded" />
                <button @click="onChangeLocation" class="bg-blue-400 w-full mt-2 rounded text-white p-1">
                    Apply
                </button>
            </div>
        </div>

        <div class="p-5 flex justify-between relative cursor-pointer border-b">
            <h3>Make</h3>
            <h3 class="text-blue-400 capitalize">Toyota</h3>
        </div>

        <div class="p-5 flex justify-between relative cursor-pointer border-b">
            <h3>Price</h3>
            <h3 class="text-blue-400 capitalize"></h3>
        </div>
    </div>
</template>