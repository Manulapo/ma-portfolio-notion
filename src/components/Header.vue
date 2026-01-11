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

const color = computed(() => {
    if (props.random) {
        const colors = Object.values(colorMap)
        return colors[Math.floor(Math.random() * colors.length)]
    }
    return colorMap[props.highlighted] || 'transparent'
})
const sizeValue = computed(() => (props.size ? sizeMap[props.size] : undefined))

const styleObject = computed(() => {
    const base: Record<string, string> = { '--highlight': color.value || 'transparent' }
    if (sizeValue.value) base.fontSize = sizeValue.value
    return base
})
</script>

<style scoped>
.header {
    position: relative;
    display: inline-block;
    z-index: 1;
    padding: 0.2rem 0.6rem;
    border-radius: 0.25rem;
    white-space: nowrap;
}

.header::after {
    content: '';
    position: absolute;
    top: 5px;
    left: 15px;
    width: 100%;
    height: 70%;
    background: var(--highlight);
    border-radius: inherit;
    z-index: -1;
    transform: rotate(-1deg);
}

@media (min-width: 768px) {
    .header {
        padding: 0.3rem 1rem;
    }
}
</style>
