<template>
    <Section id="about" contained :section-name="['About', 'me']" section-desc="Lorem ipsum dolor sit amet dolor sit Lorem ipsum dolor sit amet dolor sit Lorem ipsum dolor sit amet
        dolor sit Lorem ipsum dolor sit" section-color="yellow">
        <div class="relative">
            <div class="max-w-5xl mx-auto">
                <div class="relative py-12">
                    <img src="/doodles/shapes-doodle.svg" alt="shapes"
                        class="hidden md:block absolute -left-8 top-10 w-20 opacity-90" />

                    <div class="flex justify-center gap-10">
                        <NumbersBox number="3.5" text="Years of experience" />
                        <NumbersBox number="11" text="Certifications gained" />
                        <NumbersBox number="3" text="Portfolio projects" />
                    </div>

                    <img src="/doodles/squiggly-arrow-doodle.svg" alt="arrow"
                        class="hidden md:block absolute -right-8 top-36 w-20 opacity-90" />
                </div>

                <div class="flex flex-col md:flex-row items-start gap-8 mt-16">
                    <p class="md:flex-1 text-gray-600 italic">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate alias sequi tempora enim!
                        Veniam cumque natus et laborum cupiditate recusandae quos ea dolorum optio molestiae nobis sit
                        placeat eaque laboriosam nesciunt, perferendis in. Sunt nostrum vero nobis laborum iste saepe
                        quis, laboriosam et, temporibus quidem inventore aperiam perferendis quibusdam obcaecati aliquam
                        qui corrupti est sed.
                    </p>

                    <div class="md:w-80 flex flex-col gap-4">
                        <InfoBadge title="MSc in Something" subtitle="University Name" icon="fas fa-graduation-cap" />
                        <InfoBadge title="BSc in Something" subtitle="College Name" icon="fas fa-graduation-cap" />
                    </div>
                </div>
            </div>
        </div>
    </Section>
</template>

<script setup lang="ts">
import Section from '../components/Section.vue'
import Header from '../components/Header.vue'
import NumbersBox from '../components/NumbersBox.vue'
import InfoBadge from '../components/InfoBadge.vue'
</script>
