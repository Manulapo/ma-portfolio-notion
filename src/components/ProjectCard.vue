<template>
    <article @click="handleOpen" role="button" tabindex="0"
        class="bg-white rounded-sm shadow-sm p-3 sm:p-4 border border-gray-50 cursor-pointer hover:shadow-md transition-shadow">
        <div v-if="project.previewImage" :style="{ backgroundImage: `url(${project.previewImage})` }"
            class="bg-cover bg-center rounded-md h-32 sm:h-40 md:h-52"></div>
        <div v-else class="bg-gray-100 rounded-lg h-32 sm:h-40 md:h-52"></div>

        <h3 class="mt-3 sm:mt-6 text-base sm:text-lg font-black text-gray-900">{{ project.title }}</h3>
        <p class="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-500 multi-line-truncate" v-if="project.description">{{
            project.description }}
        </p>

        <div class="mt-2 sm:mt-4 flex flex-wrap gap-1 sm:gap-2">
            <span v-for="tag in project.tags" :key="tag"
                class="text-xs text-gray-80 bg-gray-200 px-2 py-1 rounded-full">{{ tag }}</span>
        </div>

        <div class="mt-3 sm:mt-4 flex items-center justify-end">
            <button @click.stop="handleOpen" aria-label="Open project"
                class="ml-1 text-gray-600 hover:text-black transition-all ease-in-out">
                <i class="fas fa-arrow-right cursor-pointer"></i>
            </button>
        </div>
    </article>
</template>

<script setup lang="ts">


const props = defineProps({
    project: { type: Object as () => any, required: true }
})

const emit = defineEmits<{ (e: 'open', project: any): void }>()


function handleOpen() {
    emit('open', props.project)
}

</script>

<style scoped>
.multi-line-truncate {
    display: -webkit-box;
    line-clamp: 3;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
