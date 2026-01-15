<template>
    <Section :contained="false" custom-class="mt-8 md:mt-16">
        <div class="container mx-auto pt-16 md:pt-32 px-4 sm:px-6 md:px-8 lg:px-16 w-full md:w-7xl">
            <div class="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-8">
                <div class="w-full md:w-[70%] relative">
                    <img src="/doodles/exaggeration-doodle.svg" alt="bulb"
                        class="absolute left-10 sm:-left-15 -top-5 sm:-top-10 w-10 sm:w-18 -translate-x-6 -translate-y-6" />
                    <p class="text-center md:text-start text-xl sm:text-2xl md:text-4xl text-gray-700 mb-2">Hi, I'm
                        <span class="italic font-semibold">Chiara</span>, and
                        I'm a
                    </p>
                    <h1
                        class="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight mb-4 flex justify-center md:justify-start">
                        <Header highlighted="lavender" size="xl" mobile-size="l">Marketing Analyst</Header>
                    </h1>

                    <p class="text-center md:text-start text-lg sm:text-2xl md:text-4xl mb-4">aiming to understand
                        <Underline size="xl" mobile-size="l">
                            <span class="italic font-bold">customers needs</span>
                        </Underline>
                    </p>

                    <div
                        class="flex items-center justify-center md:justify-start gap-2 sm:gap-3 md:gap-4 flex-wrap mt-16">
                        <a :href="links.resumePDF"
                            class="inline-flex items-center gap-2 sm:gap-3 bg-black/90 backdrop-blur-sm text-white px-4 sm:px-8 md:px-16 md:py-4 text-sm sm:text-base rounded-full shadow-md transition ease-in-out w-[90%] py-4 sm:py-2 sm:w-auto justify-center">
                            <i class="fa-solid fa-file-download" aria-hidden="true"></i>
                            <span class="hidden sm:inline">My Resume</span>
                            <span class="sm:hidden">My resume</span>
                        </a>
                        <a class="hidden sm:inline-flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 text-black rounded-md cursor-pointer"
                            aria-label="linkedin" :href="links.linkedin" target="_blank" rel="noopener">
                            <i class="fa-brands fa-linkedin text-lg sm:text-2xl" aria-hidden="true"></i>
                        </a>

                        <a class="hidden sm:inline-flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 text-black rounded-md cursor-pointer"
                            aria-label="vizzy" :href="links.vizzy" target="_blank" rel="noopener">
                            <img class="w-5 sm:w-6" src="/icons/vizzy-icon.png" alt="">
                        </a>
                    </div>

                </div>

                <div class=" w-[50%] relative flex justify-center md:justify-end">
                    <div class="w-full sm:w-60 md:w-80 lg:w-100 rounded-full overflow-hidden">
                        <img src="/images/other/cc.png" alt="Chiara" class="w-full h-full" />
                    </div>

                    <img src="/doodles/bulb-doodle.svg" alt="bulb"
                        class="absolute left-2 sm:left-5 top-10 sm:top-30 w-10 sm:w-18 -translate-x-6 -translate-y-6" />
                    <img src="/doodles/shine-doodle.svg" alt="shine"
                        class="absolute -right-4 sm:-right-10 top-40 sm:top-70 w-8 sm:w-16" />
                </div>
            </div>

            <a href="#about" class="w-full flex justify-center mt-8 pt-14 md:mt-16">
                <img src="/doodles/arrow-down-doodle.svg" alt="scroll down" class="w-10 md:w-16 animate-bounce" />
            </a>
        </div>
    </Section>
</template>

<script setup lang="ts">
import Header from './Header.vue'
import Underline from './Underline.vue'
import Section from './Section.vue'
import { links } from '../constants/links';
</script>

<style scoped>
@media (min-width: 768px) {
    h1 .header {
        padding: 0.3rem 1rem;
    }
}
</style>
