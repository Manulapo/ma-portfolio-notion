<template>
    <nav class="fixed inset-x-0 top-12 flex justify-center z-50 pointer-events-auto">
        <div
            class="w-full max-w-[1150px] mx-5 bg-black/70 backdrop-blur-sm rounded-[40px] px-6 md:px-10 py-5 shadow-xl flex items-center gap-4 hover:bg-black/90 transition ease-in-out">
            <a href="#" class="flex items-center flex-none" aria-label="home">
                <img src="/images/logo.png" alt="logo" class="w-20 h-auto block" />
            </a>

            <ul class="hidden md:flex flex-1 justify-center gap-6 list-none m-0 p-0">
                <li><a class="text-white font-semibold opacity-95 hover:opacity-100" href="#">Home</a></li>
                <li><a class="text-white font-semibold opacity-95 hover:opacity-100" href="#about">About me</a></li>
                <li><a class="text-white font-semibold opacity-95 hover:opacity-100" href="#projects">Projects</a></li>
                <li><a class="text-white font-semibold opacity-95 hover:opacity-100" href="#skills">Skills</a></li>
                <li><a class="text-white font-semibold opacity-95 hover:opacity-100"
                        href="#certifications">Certifications</a></li>
            </ul>

            <div class="ml-auto flex items-center gap-2 md:gap-3">
                <button class="text-white p-2 rounded-md hover:bg-white/5" aria-label="theme" @click="toggleTheme"
                    :aria-pressed="isDark">
                    <i :class="isDark ? 'fa-solid fa-moon' : 'fa-solid fa-sun'" aria-hidden="true"></i>
                </button>

                <!-- mobile menu button -->
                <button class="md:hidden text-white p-2 rounded-md hover:bg-white/5" aria-label="menu"
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
                class="absolute left-1/2 transform -translate-x-1/2 mt-[70px] w-full max-w-[1150px] mx-5 bg-black/90 backdrop-blur-md rounded-lg p-4 md:hidden"
                role="dialog" aria-label="Mobile navigation" @keydown.esc="mobileOpen = false">
                <ul class="flex flex-col gap-3">
                    <li><a class="text-white font-medium" href="#about" @click="mobileOpen = false">About me</a></li>
                    <li><a class="text-white font-medium" href="#projects" @click="mobileOpen = false">Projects</a></li>
                    <li><a class="text-white font-medium" href="#skills" @click="mobileOpen = false">Skills</a></li>
                    <li><a class="text-white font-medium" href="#certifications"
                            @click="mobileOpen = false">Certifications</a></li>
                    <li><a class="text-white font-medium" href="#" @click="mobileOpen = false">CV</a></li>
                </ul>
            </div>
        </transition>
    </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTheme } from '../composables/useTheme'

const { isDark, toggleTheme } = useTheme()
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
