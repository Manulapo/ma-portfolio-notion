<template>
    <Section id="projects" contained :section-name="['my', 'Projects']" section-desc="Lorem ipsum dolor sit amet dolor sit Lorem ipsum dolor sit amet dolor sit Lorem ipsum dolor sit amet
            dolor sit Lorem ipsum dolor sit" section-color="pink">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 mt-8">
            <ProjectCard v-for="(p, i) in projects" :key="p.title || i" :project="p" />
        </div>
    </Section>
</template>

<script setup lang="ts">
import Section from '../components/Section.vue';
import ProjectCard from '../components/ProjectCard.vue';
import { projects } from '../constants/projects';
</script>
