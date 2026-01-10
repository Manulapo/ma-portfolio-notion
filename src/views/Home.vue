<template>
    <div class="min-h-screen bg-gray-100">
        <nav class="bg-white shadow-sm mb-8">
            <div class="container mx-auto px-4 py-4">
                <div class="flex gap-4">
                    <router-link to="/" class="px-4 py-2 rounded hover:bg-blue-100 transition-colors"
                        active-class="bg-blue-600 text-white hover:bg-blue-700">
                        Home
                    </router-link>
                    <router-link to="/about" class="px-4 py-2 rounded hover:bg-blue-100 transition-colors"
                        active-class="bg-blue-600 text-white hover:bg-blue-700">
                        About
                    </router-link>
                </div>
            </div>
        </nav>

        <div class="container mx-auto px-4 py-8">
            <div class="flex justify-center gap-8 mb-8">
                <a href="https://vite.dev" target="_blank">
                    <img src="/vite.svg" class="h-24" alt="Vite logo" />
                </a>
                <a href="https://vuejs.org/" target="_blank">
                    <img src="../assets/vue.svg" class="h-24" alt="Vue logo" />
                </a>
            </div>

            <div class="text-center mb-8">
                <h1 class="text-4xl font-bold mb-4">Vue + TypeScript + Tailwind + Font Awesome</h1>
                <div class="mb-4">
                    <font-awesome-icon icon="user-secret" class="text-6xl text-blue-600" />
                </div>
                <p class="text-red-600 text-lg">Font Awesome Icon Example</p>
            </div>

            <HelloWorld msg="GitHub Pages Ready!" />
        </div>
    </div>
</template>

<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue'
</script>
