<template>
    <section :id="id" :class="['ma-section', customClass]">
        <div v-if="contained" class="ma-section__container">
            <header class="mb-8" v-if="sectionName">
                <h2 class="text-4xl md:text-5xl flex items-center relative w-fit">
                    <span class="text-gray-800">{{ sectionName[0] }}</span>
                    <Header :highlighted="sectionColor">
                        <span class="font-extrabold">{{ sectionName[1] }}</span>
                    </Header>
                    <img v-if="sectionDoodle" :src="sectionDoodle" alt="doodle"
                        :class="['inline-block', doodleSize ? doodleSize : 'w-12 h-12', 'align-middle', 'z-10', 'absolute', '-right-15']" />
                </h2>
            </header>
            <p class="text-gray-600 italic mb-12 max-w-3xl">
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
</script>

<style scoped>
.ma-section {
    padding: 8rem 1rem;
    /* Ensure anchored sections sit below the fixed navbar when using native scrolling */
    scroll-margin-top: 5rem;
}

.ma-section__container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 1rem;
}

/* Slightly tighter spacing for hero-like sections when needed */
.ma-section--tight {
    padding-top: 2rem;
    padding-bottom: 2rem;
}
</style>
