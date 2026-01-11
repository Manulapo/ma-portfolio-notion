<template>
    <section :id="id" :class="['ma-section', customClass]">
        <div v-if="contained" class="ma-section__container">
            <header class="mb-8" v-if="sectionName">
                <h2 class="text-4xl md:text-5xl flex items-center gap-3">
                    <span class="text-gray-800">{{ sectionName[0] }}</span>
                    <Header :highlighted="sectionColor">
                        <span class="font-extrabold">{{ sectionName[1] }}</span>
                    </Header>
                    <img v-if="sectionDoodle" :src="sectionDoodle" alt="doodle"
                        class="inline-block w-12 h-12 ml-2 align-middle" />
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
    sectionColor: { type: String, required: false }
})

const { id, contained, customClass } = props
</script>

<style scoped>
.ma-section {
    padding: 4rem 1rem;
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
