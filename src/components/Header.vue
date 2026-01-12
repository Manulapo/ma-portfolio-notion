<template>
    <span class="header" :style="styleObject">
        <slot />
    </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
    highlighted: {
        type: String,
        default: 'transparent',
        validator: (v: string) => ['pink', 'peach', 'yellow', 'mint', 'blue', 'lavender'].includes(v)
    },
    size: {
        type: String,
        default: '',
        validator: (v: string) => v === '' || ['s', 'm', 'l', 'xl'].includes(v)
    },
    mobileSize: {
        type: String,
        default: '',
        validator: (v: string) => v === '' || ['s', 'm', 'l', 'xl'].includes(v)
    },
    random: {
        type: Boolean,
        default: false
    }
})

const colorMap: Record<string, string> = {
    pink: '#FFB3BA',
    peach: '#FFDFBA',
    yellow: '#FEF9B0',
    mint: '#BAFFC9',
    blue: '#C6E6FF',
    lavender: '#EABFFF'
}

const sizeMap: Record<string, string> = {
    s: '1.05rem',
    m: '2rem',
    l: '3.5rem',
    xl: '5rem'
}

const mobileSizeMap: Record<string, string> = {
    s: '0.85rem',
    m: '1.25rem',
    l: '2rem',
    xl: '2.5rem'
}

const color = computed(() => {
    if (props.random) {
        const colors = Object.values(colorMap)
        return colors[Math.floor(Math.random() * colors.length)]
    }
    return colorMap[props.highlighted] || 'transparent'
})
const sizeValue = computed(() => (props.size ? sizeMap[props.size] : undefined))
const mobileSizeValue = computed(() => (props.mobileSize ? mobileSizeMap[props.mobileSize] : undefined))

const styleObject = computed(() => {
    const base: Record<string, string> = { '--highlight': color.value || 'transparent' }
    if (mobileSizeValue.value) base['--mobile-font-size'] = mobileSizeValue.value
    if (sizeValue.value) base['--desktop-font-size'] = sizeValue.value
    return base
})
</script>

<style scoped>
.header {
    position: relative;
    display: inline-block;
    z-index: 1;
    padding: 0.15rem 0.4rem;
    border-radius: 0.25rem;
    white-space: nowrap;
    font-size: var(--mobile-font-size, inherit);
}

.header::after {
    content: '';
    position: absolute;
    top: 3px;
    left: 8px;
    width: 100%;
    height: 70%;
    background: var(--highlight);
    border-radius: inherit;
    z-index: -1;
    transform: rotate(-1deg);
    opacity: .8;
}

@media (min-width: 640px) {
    .header {
        padding: 0.2rem 0.6rem;
    }

    .header::after {
        top: 4px;
        left: 10px;
    }
}

@media (min-width: 768px) {
    .header {
        padding: 0.3rem 1rem;
        font-size: var(--desktop-font-size, inherit);
    }

    .header::after {
        top: 5px;
        left: 15px;
    }
}
</style>
