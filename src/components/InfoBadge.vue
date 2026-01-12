<template>
    <div class="bg-gray-900 text-white rounded-2xl p-3 pl-4 sm:p-4 flex items-center gap-3 sm:gap-4 w-fit px-8">
        <div class="relative flex-none">
            <div
                class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/10 rounded-full overflow-hidden flex items-center justify-center">
                <template v-if="image">
                    <img :src="image" :alt="title" class="w-full h-full object-cover" />
                </template>
                <template v-else>
                    <i :class="icon" aria-hidden="true" class="text-lg sm:text-xl md:text-2xl"></i>
                </template>
            </div>
        </div>

        <div>
            <div class="font-semibold text-sm sm:text-base">{{ title }}</div>
            <div class="text-xs sm:text-sm text-gray-300">{{ subtitle }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: { type: String, required: true },
    subtitle: { type: String, default: '' },
    icon: { type: String, default: '' },
    image: { type: String, default: '' }
})
</script>
