<template>
    <Section :contained="false" customClass="min-h-[90vh] w-full flex items-center pt-24 pb-8">
        <div class="container mx-auto px-6 md:px-8 lg:px-16 w-7xl">
            <div class="flex flex-col-reverse md:flex-row items-center gap-8">
                <div class="w-full md:w-[70%]">
                    <p class="text-4xl text-gray-700 mb-2">Hi, I'm <span class="italic font-semibold">Chiara</span>, and
                        I'm a</p>
                    <h1 class="md:text-5xl font-extrabold leading-tight mb-4 w-6xl">
                        <span class="inline-block relative">
                            <Header highlighted="lavender" size="xl">Marketing Analyst</Header>
                        </span>
                    </h1>

                    <p class="text-4xl mb-6 2 w-6xl">aiming to understand <Underline size="xl">
                            <span class="italic font-bold">customers needs</span>
                        </Underline>
                    </p>

                    <a href="/assets/404.html"
                        class="inline-flex items-center gap-3 bg-black text-white px-16 py-4 rounded-full mt-8">
                        <i class="fa-solid fa-file" aria-hidden="true"></i>
                        My CV
                    </a>
                </div>

                <div class="w-full md:w-[50%] relative flex justify-center md:justify-end">
                    <div class="w-100 rounded-full overflow-hidden">
                        <img src="/images/cc.png" alt="Chiara" class="w-full h-full" />
                    </div>

                    <img src="/doodles/bulb-doodle.svg" alt="bulb"
                        class=" absolute left-5 top-30 w-18 -translate-x-6 -translate-y-6" />
                    <img src="/doodles/shine-doodle.svg" alt="shine" class="absolute -right-10 top-70 w-16" />
                </div>
            </div>
        </div>
    </Section>
</template>

<script setup lang="ts">
// purely presentational component
import Header from './Header.vue'
import Underline from './Underline.vue'
import Section from './Section.vue'
</script>

<style scoped>
@media (min-width: 768px) {
    h1 .header {
        padding: 0.3rem 1rem;
    }
}
</style>
