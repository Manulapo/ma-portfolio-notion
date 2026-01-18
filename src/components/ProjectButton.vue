<template>
    <a :href="attachment.link" target="_blank"
        class="flex items-center px-2 py-1 rounded-md bg-black/80 hover:bg-black transition-bg hover:shadow-lg ease-in-out">
        <div class="shrink-0 h-8 w-8 flex items-center justify-center mr-1">
            <img v-if="iconSrc" :src="iconSrc" alt="" loading="lazy" class="h-5 w-5 invert" />
            <span v-else class="text-sm text-white">{{ fallbackInitial }}</span>
        </div>
        <span class="text-sm text-white truncate">{{ label }}</span>
    </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ attachment: any }>()

const attachment = props.attachment || {}

const iconSrc = computed(() => {
    return attachment.type?.icon || attachment.icon || ''
})

const label = computed(() => {
    return attachment.type?.name || attachment.name || attachment.link || 'Attachment'
})

const fallbackInitial = computed(() => (label.value || '').charAt(0))
</script>

<style scoped>
.truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
