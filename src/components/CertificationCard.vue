<template>
    <div
        class="relative bg-white rounded-sm shadow-sm p-3 sm:p-4 md:p-5 group min-h-48 sm:min-h-56 md:min-h-60 flex flex-col justify-center">
        <div class="relative">
            <div
                class="transition-opacity duration-200 ease-in-out group-hover:opacity-0 group-hover:invisible flex items-center flex-col gap-2 sm:gap-3 md:gap-4">
                <div class="shrink-0">
                    <img v-if="image" :src="image" alt="issuer" loading="lazy"
                        class="w-full h-6 sm:h-8 md:h-10 mb-2 sm:mb-3 md:mb-4" />
                    <div v-else class="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 rounded-full bg-gray-200"></div>
                </div>

                <div class="flex-1">
                    <div class="flex justify-center flex-col items-center text-center gap-0.5 sm:gap-1">
                        <span class="text-xs sm:text-sm text-gray-500">{{ issuedBy }}</span>
                        <h3 class="text-gray-800 font-semibold text-xs sm:text-lg md:text-lg leading-tight">{{ name }}
                        </h3>
                    </div>
                </div>
            </div>

            <div
                class="absolute inset-0 bg-white p-2 sm:p-3 md:p-4 flex items-center justify-center text-center text-gray-700 text-xs sm:text-sm font-medium opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity z-10">
                {{ description }}
            </div>
        </div>

        <div class="flex items-center m-2 sm:m-3 md:m-4">
            <span
                class="absolute left-2 sm:left-3 md:left-3 bottom-2 sm:bottom-3 md:bottom-3 text-xs sm:text-sm text-gray-400 transition-opacity duration-200 ease-in-out group-hover:opacity-0 group-hover:invisible">
                {{ date }}
            </span>
            <a v-if="link" :href="link" target="_blank" rel="noreferrer"
                class="absolute right-2 sm:right-3 md:right-3 top-2 sm:top-3 md:top-3 text-gray-500 hover:text-blue-600 z-20">
                <i class="fa-solid fa-arrow-up-right-from-square text-sm sm:text-base"></i>
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
