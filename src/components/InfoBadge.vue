<template>
    <div class="bg-gray-900 text-white rounded-2xl p-4 flex items-center gap-4">
        <div class="bg-white/10 rounded-full p-3 flex items-center justify-center">
            <i :class="icon" aria-hidden="true"></i>
        </div>
        <div>
            <div class="font-semibold">{{ title }}</div>
            <div class="text-sm text-gray-300">{{ subtitle }}</div>
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
