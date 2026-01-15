<template>
    <footer class="w-full px-2 sm:px-4 py-4 sm:py-6 md:py-8 sm:mt-12 box-border relative">
        <img :src="baseUrl + 'stickers/luck-b.png'" alt="luck-bisquit"
            class="w-100 md:w-150 shrink-0 flex-1 md:absolute left-20 -top-40 z-20 mx-auto" />
        <div
            class="relative bg-black/90 md:bg-black/90 backdrop-blur-sm rounded-lg p-4 sm:p-6 min-h-40 sm:min-h-52 md:min-h-60 flex items-center">
            <div class="sr-only" aria-hidden="true">Footer</div>

            <div
                class="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-4 h-full flex-1">
                <div class="flex-1 text-center md:text-left">
                    <div class="font-semibold text-gray-300">Marketing Analyst</div>
                    <div class="text-sm text-gray-300 mt-1">
                        Let's <a :href="links.linkedin">connect</a>
                    </div>
                    <div class="text-xs text-gray-400 mt-2">©{{ new Date().getFullYear() }} Chiara Coletta all rights.
                        reserved</div>
                    <div class="text-xs text-gray-600 mt-2">Website Designed by <a
                            href="https://manuel-la-porta.me/#/">La
                            Porta Manuel</a></div>
                </div>

                <nav class="flex-1 flex items-center justify-center gap-4 h-full">
                    <a href="#about" class="text-sm text-gray-200 hover:underline">About</a>
                    <span class="text-gray-600">·</span>
                    <a href="https://www.femella.org/" class="text-sm text-gray-200 hover:underline">femella</a>
                    <span class="text-gray-600">·</span>
                    <a :href="links.resumePDF" class="text-sm text-gray-200 hover:underline">My Resume</a>
                </nav>

                <div class="flex-1 flex items-center justify-center md:justify-end gap-3">
                    <a class="text-gray-200 hover:text-white" href="mailto:coletta.chiara24@gmail.com"
                        aria-label="Email">
                        <i class="fas fa-envelope w-5 h-5"></i>
                    </a>

                    <a class="text-gray-200 hover:text-white" :href="links.linkedin" target="_blank" rel="noopener"
                        aria-label="LinkedIn">
                        <i class="fab fa-linkedin w-5 h-5"></i>
                    </a>
                </div>
            </div>

            <img :src="baseUrl + 'doodles/planet-doodle.svg'" alt="planet doodle"
                class="pointer-events-none absolute right-3 sm:right-6 md:right-8 bottom-3 sm:bottom-6 md:bottom-8 w-12 sm:w-14 md:w-18" />
        </div>
    </footer>
</template>

<script setup lang="ts">
import { links } from '../constants/links';

const baseUrl = (import.meta.env.BASE_URL ?? '/') as string
</script>
