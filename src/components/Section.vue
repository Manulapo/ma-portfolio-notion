<template>
    <section :id="id" :class="['ma-section', customClass]">
        <div v-if="contained" class="ma-section__container">
            <header class="mb-4 sm:mb-6 md:mb-8" v-if="sectionName">
                <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex items-center relative w-fit">
                    <span class="text-gray-800">{{ sectionName[0] }}</span>
                    <Header :highlighted="sectionColor">
                        <span class="font-extrabold">{{ sectionName[1] }}</span>
                    </Header>
                    <img v-if="sectionDoodle" :src="resolveDoodle(sectionDoodle)" alt="doodle"
                        :class="['inline-block', doodleSize ? doodleSize : 'w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12', 'align-middle', 'z-10', 'absolute', '-right-12 sm:-right-14 md:-right-15']" />
                </h2>
            </header>
            <p class="text-gray-600 italic mb-6 sm:mb-9 md:mb-12 max-w-3xl text-sm sm:text-base">
                {{ sectionDesc }}
            </p>
            <slot />
        </div>
        <slot v-else />
    </section>
</template>

<script setup lang="ts">
import Header from './Header.vue';

const props = defineProps({
    id: { type: String, required: false },
    contained: { type: Boolean, default: true },
    customClass: { type: String, default: '' },
    sectionName: { type: Array, required: false },
    sectionDesc: { type: String, required: false },
    sectionDoodle: { type: String, required: false },
    sectionColor: { type: String, required: false },
    doodleSize: { type: String, required: false, default: '' }
})

const { id, contained, customClass } = props

// Resolve public asset paths according to Vite base
const baseUrl = import.meta.env.BASE_URL ?? '/'
const resolveDoodle = (p?: string) => {
    if (!p) return ''
    if (p.startsWith('http') || p.startsWith('//')) return p
    if (baseUrl === './') return `./${p.replace(/^\//, '')}`
    const b = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl
    return p.startsWith('/') ? `${b}${p}` : `${b}/${p}`
}
</script>

<style scoped>
.ma-section {
    padding: 4rem 1rem;
    /* Ensure anchored sections sit below the fixed navbar when using native scrolling */
    scroll-margin-top: 5rem;
}

.ma-section__container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 1rem;
}

@media (min-width: 640px) {
    .ma-section {
        padding: 6rem 1rem;
    }
}

@media (min-width: 768px) {
    .ma-section {
        padding: 8rem 1rem;
    }
}

/* Slightly tighter spacing for hero-like sections when needed */
.ma-section--tight {
    padding-top: 2rem;
    padding-bottom: 2rem;
}
</style>
