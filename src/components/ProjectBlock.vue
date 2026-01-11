<template>
    <div :class="['bg-[#fafafa] rounded-lg p-4 min-h-48 flex flex-col relative', variantClass]">
        <h3 class="text-lg font-semibold text-gray-800 mb-2 flex items-center">
            <slot name="title">
                <Header random size="s">{{ title }}</Header>
            </slot>
        </h3>
        <i v-if="props.icon" :class="[props.icon, 'mr-2 text-black absolute text-6xl bottom-4 right-4 opacity-5']"
            aria-hidden="true"></i>
        <p class="text-gray-600 text-sm flex-1">
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
