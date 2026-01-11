<template>
    <span class="underline-doodle" :style="styleObject">
        <slot />
        <img src="/doodles/underline-doodle.svg" alt="underline" :class="['doodle', ...customClass]"
            aria-hidden="true" />
    </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
    size: {
        type: String,
        default: 'm',
        validator: (v: string) => ['s', 'm', 'l', 'xl'].includes(v)
    },
    customClass: {
        type: String,
        default: ''
    }
})

const sizeMap: Record<string, string> = {
    s: '1rem',
    m: '1.25rem',
    l: '1.75rem',
    xl: '2.25rem'
}

const scaleMap: Record<string, number> = {
    s: 0.75,
    m: 0.95,
    l: 1,
    xl: 1.15
}

const sizeValue = computed(() => sizeMap[props.size] || sizeMap.m)
const scaleValue = computed(() => String(scaleMap[props.size] || 1))

const styleObject = computed(() => ({ fontSize: sizeValue.value, '--doodle-scale': scaleValue.value }))
</script>

<style scoped>
.underline-doodle {
    position: relative;
    display: inline-block;
    z-index: 1;
}

.doodle {
    position: absolute;
    left: 0%;
    transform-origin: center;
    pointer-events: none;
    z-index: 0;
}
</style>
