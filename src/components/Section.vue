<template>
    <section :id="id" :class="['ma-section', customClass]">
        <div v-if="contained" class="ma-section__container">
            <slot />
        </div>
        <slot v-else />
    </section>
</template>

<script setup lang="ts">
const props = defineProps({
    id: { type: String, required: false },
    contained: { type: Boolean, default: true },
    customClass: { type: String, default: '' }
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
