<template>
    <Section :contained="false" custom-class="mt-16">
        <div class=" container mx-auto pt-32 px-6 md:px-8 lg:px-16 w-7xl">
            <div class="flex flex-col-reverse md:flex-row items-center gap-8">
                <div class="w-full md:w-[70%]">
                    <p class="text-4xl text-gray-700 mb-2">Hi, I'm <span class="italic font-semibold">Chiara</span>, and
                        I'm a</p>
                    <h1 class="md:text-5xl font-extrabold leading-tight mb-4 w-6xl">
                        <span class="inline-block relative">
                            <Header highlighted="lavender" size="xl">Marketing Analyst</Header>
                        </span>
                    </h1>

                    <p class="text-4xl mb-18 2 w-6xl">aiming to understand <Underline size="xl">
                            <span class="italic font-bold">customers needs</span>
                        </Underline>
                    </p>

                    <div class="flex items-center gap-4 flex-wrap">
                        <a :href="links.resumePDF" download
                            class="inline-flex items-center gap-3 bg-black/70 backdrop-blur-sm text-white px-16 py-4 rounded-full hover:bg-black/90 shadow-md transition ease-in-out">
                            <i class="fa-solid fa-file-download" aria-hidden="true"></i>
                            My Resume
                        </a>
                        <a class="inline-flex items-center justify-center h-12 w-12 text-black rounded-md cursor-pointer"
                            aria-label="linkedin" :href="links.linkedin" target="_blank" rel="noopener">
                            <i class="fa-brands fa-linkedin text-2xl" aria-hidden="true"></i>
                        </a>

                        <a class="inline-flex items-center justify-center h-12 w-12 text-black rounded-md cursor-pointer"
                            aria-label="other" :href="links.vizzy" target="_blank" rel="noopener">
                            <img class="size-6" src="/icons/vizzy-icon.png" alt="">
                        </a>
                    </div>

                </div>

                <div class="w-full md:w-[50%] relative flex justify-center md:justify-end">
                    <div class="w-100 rounded-full overflow-hidden">
                        <img src="/images/other/cc.png" alt="Chiara" class="w-full h-full" />
                    </div>

                    <img src="/doodles/bulb-doodle.svg" alt="bulb"
                        class=" absolute left-5 top-30 w-18 -translate-x-6 -translate-y-6" />
                    <img src="/doodles/shine-doodle.svg" alt="shine" class="absolute -right-10 top-70 w-16" />
                </div>
            </div>

            <div class="w-full flex justify-center mt-16">
                <i class="fas fa-chevron-down text-4xl cursor-pointer" />
            </div>
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
