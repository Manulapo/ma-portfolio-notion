<template>
    <div class="bg-gray-900 text-white rounded-2xl p-3 pl-4 sm:p-4 flex items-center gap-3 sm:gap-4 w-fit px-8">
        <div
            class="bg-white/10 rounded-full p-2 sm:p-3 flex items-center justify-center text-sm sm:text-base md:text-lg">
            <i :class="icon" aria-hidden="true"></i>
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
    icon: { type: String, default: '' }
})
</script>
