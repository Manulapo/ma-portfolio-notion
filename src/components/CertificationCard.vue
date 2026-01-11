<template>
    <div class="relative bg-white rounded-sm shadow-sm p-5 group min-h-60 flex flex-col justify-center">
        <div class="relative">
            <div
                class="transition-opacity duration-200 ease-in-out group-hover:opacity-0 group-hover:invisible flex items-center flex-col gap-4">
                <div class="shrink-0">
                    <img v-if="image" :src="image" alt="issuer" class="w-full h-10 mb-4" />
                    <div v-else class="w-12 h-12 rounded-full bg-gray-200"></div>
                </div>

                <div class="flex-1">
                    <div class="flex justify-center flex-col items-center text-center gap-1">
                        <span class="text-sm text-gray-500">{{ issuedBy }}</span>
                        <h3 class="text-gray-800 font-semibold text-lg leading-tight">{{ name }}</h3>
                    </div>
                </div>
            </div>

            <div
                class="absolute inset-0 bg-white p-4 flex items-center justify-center text-center text-gray-700 text-sm font-medium opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity z-10">
                {{ description }}
            </div>
        </div>

        <div class="flex items-center m-4">
            <span
                class=" absolute left-3 bottom-3 text-sm text-gray-400 transition-opacity duration-200 ease-in-out group-hover:opacity-0 group-hover:invisible">
                {{ date }}
            </span>
            <a v-if="link" :href="link" target="_blank" rel="noreferrer"
                class="absolute right-3 top-3 text-gray-500 hover:text-blue-600 z-20">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
        </div>

    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    name: { type: String, required: true },
    description: { type: String, required: false, default: '' },
    image: { type: String, required: false, default: '' },
    date: { type: String, required: false, default: '' },
    link: { type: String, required: false, default: '' },
    issuedBy: { type: String, required: false, default: '' }
})

</script>
