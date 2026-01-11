<template>
    <Section id="skills" contained :section-name="['my', 'Skills']"
        section-desc="Lorem ipsum dolor sit amet dolor sit Lorem ipsum dolor sit amet dolor sit Lorem ipsum dolor sit amet dolor sit Lorem ipsum dolor sit"
        section-doodle="/doodles/smile-doodle.svg" section-color="mint">

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            <div v-for="(skill, i) in skills" :key="i">
                <SkillBlock :skill="skill" />
            </div>
        </div>
    </Section>
</template>

<script setup lang="ts">
import Section from './Section.vue'
import SkillBlock from './SkillBlock.vue'
import { skills } from '../constants/skills';
</script>

<style scoped>
@media (min-width: 768px) {
    .ma-section {
        padding-top: 4rem;
        padding-bottom: 4rem;
    }
}
</style>
