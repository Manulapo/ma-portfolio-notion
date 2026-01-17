<template>
    <div class="min-h-[75vh] flex flex-col items-center justify-center text-center p-8">
        <h1 class="text-6xl font-extrabold">404</h1>
        <p class="mt-2 text-gray-500">Sorry — the page you're looking for doesn't exist.</p>
        <router-link to="/" class="mt-4 inline-block bg-gray-800 text-white rounded-md px-4 py-2 hover:bg-gray-700">
            Return Home
        </router-link>
    </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: '404 - Page Not Found | Chiara Coletta',
  meta: [
    {
      name: 'description',
      content: 'Page not found. Return to Chiara Coletta\'s portfolio.'
    },
    {
      name: 'robots',
      content: 'noindex, nofollow'
    }
  ]
})
</script>
