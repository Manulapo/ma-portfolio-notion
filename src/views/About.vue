<template>
    <Section id="about" contained :section-name="['about', 'Me']" section-desc="Lorem ipsum dolor sit amet dolor sit Lorem ipsum dolor sit amet dolor sit Lorem ipsum dolor sit amet
        dolor sit Lorem ipsum dolor sit" section-color="yellow">
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
                    <p class="md:flex-1 text-gray-600 italic text-sm sm:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate alias sequi tempora
                        enim!
                        Veniam cumque natus et laborum cupiditate recusandae quos ea dolorum optio molestiae nobis
                        sit
                        placeat eaque laboriosam nesciunt, perferendis in. Sunt nostrum vero nobis laborum iste
                        saepe
                        quis, laboriosam et, temporibus quidem inventore aperiam perferendis quibusdam obcaecati
                        aliquam
                        qui corrupti est sed.
                    </p>

                    <div class="flex flex-col md:flex-row items-start gap-0 sm:gap-12 mt-8 sm:mt-8">
                        <img src="/stickers/florence-2.png" alt="About Me Photo"
                            class="order-2 md:order-1 md:w-120 shrink-0 flex-1 -rotate-3" />
                        <div
                            class="order-1 md:order-2 w-full md:w-[40%] flex flex-col justify-end items-end gap-2 sm:gap-3 md:gap-4">
                            <InfoBadge title="MSc in Something" subtitle="University Name"
                                icon="fas fa-graduation-cap" />
                            <InfoBadge title="BSc in Something" subtitle="College Name" icon="fas fa-graduation-cap" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </Section>

</template>

<script setup lang="ts">
import InfoBadge from '../components/InfoBadge.vue'
import NumbersBox from '../components/NumbersBox.vue'
import Section from '../components/Section.vue'
import { getYears } from '../composables/utils';
import { certifications } from '../constants/certifications';
import { projects } from '../constants/projects';
</script>
