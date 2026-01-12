<template>
    <div
        :class="['bg-[#fafafa] rounded-lg p-2 sm:p-3 md:p-4 min-h-40 sm:min-h-44 md:min-h-48 flex flex-col relative', variantClass]">
        <h3 class="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-1 sm:mb-2 flex items-center">
            <slot name="title">
                <Header random size="s">{{ title }}</Header>
            </slot>
        </h3>
        <i v-if="props.icon"
            :class="[props.icon, 'mr-2 text-black absolute text-4xl sm:text-5xl md:text-6xl bottom-2 sm:bottom-3 md:bottom-4 right-2 sm:right-3 md:right-4 opacity-5']"
            aria-hidden="true"></i>
        <p class="text-gray-600 text-xs sm:text-sm flex-1">
            <slot>{{ text }}</slot>
        </p>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Header from './Header.vue';

const props = defineProps<{ title?: string; text?: string; variant?: 'half' | 'full'; icon?: string }>()
const variantClass = computed(() => (props.variant === 'full' ? 'sm:col-span-2' : ''))

</script>

<style scoped></style>
