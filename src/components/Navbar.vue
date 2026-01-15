<template>
    <nav class="fixed inset-x-0 top-3 sm:top-4 md:top-12 flex justify-center z-50 pointer-events-auto">
        <div
            class="w-[90%] max-w-278.5 mx-2 sm:mx-3 md:mx-5 bg-black/90 md:bg-black/75 backdrop-blur-sm rounded-full md:rounded-[40px] px-6 sm:px-4 md:px-10 py-3 sm:py-4 md:py-5 shadow-xl flex items-center gap-2 sm:gap-3 md:gap-4 hover:bg-black/80 transition ease-in-out">
            <a href="/" class="flex items-center flex-none" aria-label="home">
                <img src="/images/logo.png" alt="logo" class="w-16 sm:w-16 md:w-20 h-auto block" />
            </a>

            <ul class="hidden md:flex flex-1 justify-center gap-4 lg:gap-6 list-none m-0 p-0">
                <li><a class="text-white font-semibold text-sm lg:text-base opacity-95 hover:opacity-100"
                        href="#">Home</a></li>
                <li><a class="text-white font-semibold text-sm lg:text-base opacity-95 hover:opacity-100"
                        href="#about">About me</a></li>
                <li><a class="text-white font-semibold text-sm lg:text-base opacity-95 hover:opacity-100"
                        href="#projects">Projects</a></li>
                <li><a class="text-white font-semibold text-sm lg:text-base opacity-95 hover:opacity-100"
                        href="#skills">Skills</a></li>
                <li><a class="text-white font-semibold text-sm lg:text-base opacity-95 hover:opacity-100"
                        href="#certifications">Certifications</a></li>
            </ul>

            <div class="ml-auto flex items-center gap-1 sm:gap-2 md:gap-3">
                <a :href="links.resumePDF" target="_blank" rel="noopener"
                    class="md:inline-flex items-center gap-2 bg-transparent sm:bg-white sm:text-black text-white px-3 py-2 rounded-full shadow-md text-sm sm:text-base hover:opacity-95">
                    <i class="fa-solid fa-file-download" aria-hidden="true"></i>
                </a>
                <a class="inline-flex items-center justify-center text-white rounded-md cursor-pointer p-1.5 sm:p-2 hover:bg-white/10"
                    aria-label="linkedin" :href="links.linkedin" target="_blank" rel="noopener">
                    <i class="fa-brands fa-linkedin text-base sm:text-lg md:text-xl" aria-hidden="true"></i>
                </a>
                <!-- 
                <button class="text-white p-1.5 sm:p-2 rounded-md hover:bg-white/10 cursor-pointer" aria-label="theme"
                    @click="toggleTheme" :aria-pressed="isDark">
                    <i :class="isDark ? 'fa-solid fa-moon' : 'fa-solid fa-sun'" aria-hidden="true"></i>
                </button> -->

                <!-- mobile menu button -->
                <button class="md:hidden text-white p-1.5 sm:p-2 rounded-md hover:bg-white/10" aria-label="menu"
                    :aria-expanded="mobileOpen" @click="mobileOpen = !mobileOpen">
                    <svg v-if="!mobileOpen" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- mobile menu panel -->
        <transition name="fade">
            <div v-if="mobileOpen"
                class="absolute transform mt-[60px] sm:mt-[68px] md:mt-[70px] w-[80%] max-w-[1150px] mx-2 sm:mx-3 md:mx-5 bg-black/90 backdrop-blur-md rounded-lg p-3 sm:p-4 md:hidden"
                role="dialog" aria-label="Mobile navigation" @keydown.esc="mobileOpen = false">
                <ul class="flex flex-col gap-2 sm:gap-3">
                    <li><a class="text-white font-medium text-sm sm:text-base block py-2 px-2 rounded hover:bg-white/10"
                            href="#about" @click="mobileOpen = false">About me</a></li>
                    <li><a class="text-white font-medium text-sm sm:text-base block py-2 px-2 rounded hover:bg-white/10"
                            href="#projects" @click="mobileOpen = false">Projects</a></li>
                    <li><a class="text-white font-medium text-sm sm:text-base block py-2 px-2 rounded hover:bg-white/10"
                            href="#skills" @click="mobileOpen = false">Skills</a></li>
                    <li><a class="text-white font-medium text-sm sm:text-base block py-2 px-2 rounded hover:bg-white/10"
                            href="#certifications" @click="mobileOpen = false">Certifications</a></li>

                </ul>
            </div>
        </transition>
    </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { links } from '../constants/links';

// const { isDark, toggleTheme } = useTheme()
const mobileOpen = ref(false)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity .18s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
