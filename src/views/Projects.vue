<template>
    <Section id="projects" contained :section-name="['my', 'Projects']"
        section-desc="Driven by curiosity and a hands-on mindset, I approach projects as opportunities to learn by doing. Through self-initiated work and practical experimentation, I explore real-world marketing and data challenges, testing ideas and transforming insights into actionable outcomes."
        section-color="pink">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 sm:gap-2 mt-4 sm:mt-6 md:mt-8">
            <ProjectCard v-for="(p, i) in projects" :key="p.title || i" :project="p" @open="openProject" />
        </div>
    </Section>

    <ProjectModal v-if="modalOpen" :project="selectedProject" @close="modalOpen = false" />
</template>

<script setup lang="ts">
import Section from '../components/Section.vue';
import ProjectCard from '../components/ProjectCard.vue';
import ProjectModal from '../components/ProjectModal.vue';
import { projects } from '../constants/projects';
import { ref } from 'vue';

const modalOpen = ref(false)
const selectedProject = ref(null)

function openProject(p: any) {
    selectedProject.value = p
    modalOpen.value = true
}
</script>
