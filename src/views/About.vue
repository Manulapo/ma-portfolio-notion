<script setup lang="ts">
import { useHead } from '@vueuse/head'
import Section from '../components/Section.vue'
import InfoBadge from '../components/InfoBadge.vue'
import NumbersBox from '../components/NumbersBox.vue'
import { certifications, projects, links } from '../constants'

function getYears(startYear: number): number {
    return new Date().getFullYear() - startYear
}

useHead({
  title: 'About | Chiara Coletta',
  meta: [
    {
      name: 'description',
      content: 'Learn more about Chiara Coletta - marketing-driven problem solver with a passion for data, creativity, and consumer insights.'
    },
    {
      property: 'og:title',
      content: 'About | Chiara Coletta'
    },
    {
      property: 'og:description',
      content: 'Marketing analyst with international experience in Milan and Luxembourg, specializing in data-driven marketing strategies.'
    }
  ]
})
</script>

<template>
    <Section id="about" contained :section-name="['about', 'Me']"
        section-desc="I’m a <b>marketing-driven problem solver</b> with a passion for blending <b>data, creativity, and curiosity</b> to help brands grow with purpose. My name is Chiara, and I focus on developing smarter, more intuitive marketing strategies—whether that’s optimizing processes, analyzing consumer responses to campaigns, or uncovering data-driven insights that reveal meaningful brand stories."
        section-color="yellow">
        <div class="relative">
            <div class="max-w-5xl mx-auto">
                <div class="relative py-6 sm:py-9 md:py-12">
                    <img src="/doodles/shapes-doodle.svg" alt="shapes"
                        class="hidden md:block absolute -left-6 sm:-left-8 top-8 sm:top-10 w-14 sm:w-20 opacity-90" />

                    <InfoBadge title="Based in Denmark" subtitle="" image="/icons/DK.png"
                        class="my-4 sm:absolute right-0 -top-14 sm:-rotate-12" />

                    <div class="flex flex-row justify-center gap-4 sm:gap-6 md:gap-10">
                        <NumbersBox :number="getYears(2023)" text="Years of experience" />
                        <NumbersBox :number="certifications.length" text="Certifications gained" />
                        <NumbersBox :number="projects.length" text="Portfolio projects" />
                    </div>

                    <img src="/doodles/squiggly-arrow-doodle.svg" alt="arrow"
                        class="hidden md:block absolute -right-6 sm:-right-8 top-24 sm:top-36 w-14 sm:w-20 opacity-90" />
                </div>

                <div class="flex flex-col gap-12 items-center ">
                    <p class="md:flex-1 text-gray-600 text-sm sm:text-base">
                        My background in <b>business consulting</b> taught me how to turn complex ideas into clear
                        strategies,
                        and now, in <b>marketing & digital analytics</b>, I get to do the same through numbers and
                        insights.
                        <br><br>
                        During my <b>Master’s in Corporate Governance & Management</b>, I discovered my real passion for
                        marketing innovation and brand communication. My thesis explored how <b>
                            AI is reshaping strategic
                            brand building
                        </b>, and it left me fascinated by how creativity, technology, and consumer behaviour
                        come together. That’s what pushed me to transition from consulting into marketing analytics.
                        <br><br>
                        I’ve worked in multicultural, international environments in both <b>Milan</b> and
                        <b>Luxembourg</b>,
                        collaborating with diverse teams across markets.
                    </p>

                    <div class="flex flex-col md:flex-row items-start gap-0 sm:gap-12 mt-8 sm:mt-8 relative">
                        <img src="/stickers/florence-2.png" alt="About Me Photo"
                            class="order-2 md:order-1 md:w-130 shrink-0 flex-1 -rotate-3" />
                        <div
                            class="order-1 md:order-2 w-full md:w-[50%] flex flex-col justify-end items-end gap-2 sm:gap-3 md:gap-4">
                            <InfoBadge title="MSc in Corporate Governance & Management"
                                subtitle="University of Florence" icon="fas fa-graduation-cap" />
                            <InfoBadge title="BSc in Business Administration" subtitle="University of Florence"
                                icon="fas fa-graduation-cap" />
                        </div>

                    </div>

                    <p class="md:flex-1 text-gray-600 text-sm sm:text-base">
                        Originally from <b>Italy</b> and now based in <b>Copenhagen</b>, I specialize in combining
                        <Underline custom-class="absolute" class="font-bold" :hide-on-mobile="true">
                            data analysis and
                            storytelling
                        </Underline> to create meaningful, authentic connections.
                        <br /> <br />
                        Relocating to Denmark has marked an exciting new chapter in my personal and professional
                        journey. I am focused on growing my career in Copenhagen, contributing to <b>
                            data-driven marketing
                            initiatives
                        </b>, and collaborating with creative teams that value both strategic thinking and
                        innovation.
                    </p>
                </div>
            </div>
        </div>
    </Section>

</template>

<script setup lang="ts">
import InfoBadge from '../components/InfoBadge.vue'
import NumbersBox from '../components/NumbersBox.vue'
import Section from '../components/Section.vue'
import Underline from '../components/Underline.vue';
import { getYears } from '../composables/utils';
import { certifications } from '../constants/certifications';
import { projects } from '../constants/projects';
</script>
