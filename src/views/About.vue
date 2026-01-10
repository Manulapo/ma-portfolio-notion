<template>
    <div class="max-w-2xl mx-auto">
        <h2 class="text-3xl font-bold mb-6 text-center">About This Project</h2>

        <div class="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 class="text-xl font-semibold mb-3 flex items-center gap-2">
                <font-awesome-icon icon="user-secret" class="text-blue-600" />
                Tech Stack
            </h3>
            <ul class="space-y-2 text-gray-700">
                <li>✅ Vue 3 with Composition API</li>
                <li>✅ TypeScript for type safety</li>
                <li>✅ Tailwind CSS v4 for styling</li>
                <li>✅ Font Awesome icons</li>
                <li>✅ Vue Router for navigation</li>
                <li>✅ GitHub Pages ready</li>
            </ul>
        </div>

        <div class="bg-blue-50 rounded-lg p-6">
            <h3 class="text-xl font-semibold mb-3 text-blue-900">Deployment</h3>
            <p class="text-gray-700 mb-3">
                To deploy this project to GitHub Pages, run:
            </p>
            <code class="block bg-gray-800 text-green-400 p-3 rounded">
        npm run deploy
      </code>
        </div>

        <div class="text-center mt-8">
            <router-link to="/"
                class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                ← Back to Home
            </router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>
