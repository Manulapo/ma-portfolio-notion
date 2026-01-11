<template>
    <div class="flex flex-col items-center" ref="root">
        <div
            class="bg-gray-900 text-white rounded-lg w-28 h-28 md:w-36 md:h-36 flex items-center justify-center text-3xl md:text-7xl font-extrabold ">
            {{ displayValue }}
        </div>
        <div class="mt-3 text-md text-gray-600">{{ text }}</div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, computed } from 'vue'

const props = defineProps({
    number: { type: [String, Number], required: true },
    text: { type: String, default: '' }
})

const target = computed(() => Number(props.number) || 0)
const animated = ref(0)
const root = ref<HTMLElement | null>(null)
const started = ref(false)

const duration = 1000 // animation duration in ms
const delayBeforeStart = 0 // wait 1s before starting

function animateTo(to: number) {
    const start = performance.now()
    const from = 0

    function step(now: number) {
        const elapsed = now - start
        const t = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - t, 3) // easeOutCubic
        animated.value = from + (to - from) * eased
        if (t < 1) requestAnimationFrame(step)
        else animated.value = to
    }

    requestAnimationFrame(step)
}
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !started.value) {
                started.value = true
                setTimeout(() => animateTo(target.value), delayBeforeStart)
                observer.disconnect()
            }
        })
    },
    { threshold: 0.5 }
)


onMounted(() => {
    if (root.value) observer.observe(root.value)
})
onUnmounted(() => {
    observer.disconnect()
})

watch(
    () => props.number,
    (nv) => {
        const to = Number(nv) || 0
        // restart animation when prop changes, but only if already started (in view)
        animated.value = 0
        if (started.value) setTimeout(() => animateTo(to), delayBeforeStart)
    }
)

const displayValue = computed(() => {
    const to = target.value
    const val = animated.value
    if (Number.isInteger(to)) return String(Math.round(val))
    return val.toFixed(1)
})
</script>
