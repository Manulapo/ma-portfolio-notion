<template>
    <Section id="certifications" contained :section-name="['my', 'Certifications']"
        section-desc="Lorem ipsum dolor sit amet dolor sit" section-doodle="/doodles/diamond-doodle.svg"
        section-color="peach" doodle-size="w-20 h-20">
        <div class="max-w-6xl mx-auto">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                <CertificationCard v-for="(c, i) in certifications" :key="i" :name="c.name" :description="c.description"
                    :image="c.image" :date="c.date" :link="c.link" :issuedBy="c.issuedBy" />
            </div>
        </div>
    </Section>
</template>

<script setup lang="ts">
import Section from './Section.vue'
import CertificationCard from './CertificationCard.vue'
import { certifications } from '../constants/certifications'
</script>
