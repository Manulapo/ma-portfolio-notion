<template>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Certifications />
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import Certifications from '../components/Certifications.vue';
import Hero from '../components/Hero.vue'
import Skills from '../components/Skills.vue'
import About from './About.vue'
import Projects from './Projects.vue'

useHead({
  title: 'Chiara Coletta | Marketing Analyst & Data Professional',
  meta: [
    {
      name: 'description',
      content: 'Marketing Analyst specializing in data-driven insights, SQL, and business intelligence. View my portfolio of projects and certifications.'
    },
    {
      property: 'og:title',
      content: 'Chiara Coletta | Marketing Analyst & Data Professional'
    },
    {
      property: 'og:description',
      content: 'Marketing Analyst specializing in data-driven insights, SQL, and business intelligence.'
    }
  ]
})
</script>
