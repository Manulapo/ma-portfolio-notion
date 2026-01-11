<template>
    <Section id="skills" contained :section-name="['my', 'Skills']"
        section-desc="Lorem ipsum dolor sit amet dolor sit Lorem ipsum dolor sit amet dolor sit Lorem ipsum dolor sit amet dolor sit Lorem ipsum dolor sit"
        section-doodle="/doodles/smile-doodle.svg" section-color="mint">

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            <div v-for="(skill, i) in skills" :key="i"
                class="group bg-white rounded-sm h-60 flex flex-col items-center justify-center transition-transform m-1 relative overflow-hidden">
                <SkillBlock :skill="skill" />
            </div>
        </div>
    </Section>
</template>

<script setup lang="ts">
import Section from './Section.vue'
import SkillBlock from './SkillBlock.vue'

const skills = [
    { name: 'MySQL', img: '/doodles/smile-doodle.svg', text: 'Relational DB — ACID-compliant, widely used.' },
    { name: 'PostgreSQL', img: '/doodles/smile-doodle.svg', text: 'Advanced open-source relational database with strong SQL support.' },
    { name: 'MongoDB', img: '/doodles/smile-doodle.svg', text: 'Document-oriented NoSQL database for flexible schemas.' },
    { name: 'Redis', img: '/doodles/smile-doodle.svg', text: 'In-memory data structure store for caching and pub/sub.' },
    { name: 'Node.js', img: '/doodles/smile-doodle.svg', text: 'JavaScript runtime for building fast network applications.' },
    { name: 'TypeScript', img: '/doodles/smile-doodle.svg', text: 'Typed superset of JavaScript that catches errors early.' },
    { name: 'Vue.js', img: '/doodles/smile-doodle.svg', text: 'Progressive frontend framework for building UIs.' },
    { name: 'Tailwind CSS', img: '/doodles/smile-doodle.svg', text: 'Utility-first CSS framework for rapid UI development.' }
]
</script>

<style scoped>
@media (min-width: 768px) {
    .ma-section {
        padding-top: 4rem;
        padding-bottom: 4rem;
    }
}
</style>
