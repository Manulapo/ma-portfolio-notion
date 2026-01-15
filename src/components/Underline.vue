<template>
    <span class="underline-doodle" :style="styleObject">
        <slot />
        <img :src="imageSrc" alt="underline" :class="['doodle', 'sm:block', customClass, hideOnMobile ? 'hidden' : '']"
            aria-hidden="true" />
    </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useImageSrc } from '../composables/useImageSrc'


const props = defineProps({
    size: {
        type: String,
        default: 'm',
        validator: (v: string) => ['s', 'm', 'l', 'xl'].includes(v)
    },
    mobileSize: {
        type: String,
        default: '',
        validator: (v: string) => v === '' || ['s', 'm', 'l', 'xl'].includes(v)
    },
    customClass: {
        // allow either a string or array of classes
        type: [String, Array],
        default: ''
    },
    hideOnMobile: {
        type: [Boolean],
        default: false
    }
})

const imageSrc = useImageSrc('/doodles/underline-doodle.svg')

const sizeMap: Record<string, string> = {
    s: '0.9rem',
    m: '1rem',
    l: '1.15rem',
    xl: '2rem'
}

const scaleMap: Record<string, number> = {
    s: 0.8,
    m: 0.95,
    l: 1,
    xl: 1.05
}

const sizeValue = computed(() => sizeMap[props.size] || sizeMap.m)
const scaleValue = computed(() => String(scaleMap[props.size] || 1))
const mobileSizeValue = computed(() => props.mobileSize ? sizeMap[props.mobileSize] : sizeValue.value)
const mobileScaleValue = computed(() => props.mobileSize ? String(scaleMap[props.mobileSize] || 1) : scaleValue.value)

const styleObject = computed(() => {
    const result: any = {
        '--mobile-font-size': mobileSizeValue.value,
        '--desktop-font-size': sizeValue.value,
        '--mobile-doodle-scale': mobileScaleValue.value,
        '--doodle-scale': scaleValue.value
    }
    return result
})
</script>

<style scoped>
.underline-doodle {
    position: relative;
    display: inline-block;
    z-index: 1;
    padding-bottom: 0.15em;
    font-size: var(--mobile-font-size, inherit);
}

.doodle {
    position: absolute;
    left: 0;
    transform-origin: center;
    pointer-events: none;
    z-index: 0;
    width: 100%;
    height: auto;
    transform: translateX(0) scale(var(--mobile-doodle-scale, var(--doodle-scale)));
}

@media (min-width: 768px) {
    .underline-doodle {
        font-size: var(--desktop-font-size, inherit);
    }

    .doodle {
        transform: translateX(0) scale(var(--doodle-scale));
    }
}
</style>
