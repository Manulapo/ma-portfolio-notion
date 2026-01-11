<template>
    <article class="bg-white rounded-sm shadow-sm p-4 border border-gray-50">
        <div v-if="project.previewImage" :style="{ backgroundImage: `url(${project.previewImage})` }"
            class="bg-cover bg-center rounded-md h-44 md:h-52"></div>
        <div v-else class="bg-gray-100 rounded-lg h-44 md:h-52"></div>

        <h3 class="mt-6 text-lg font-black text-gray-900">{{ project.title }}</h3>
        <p class="mt-2 text-sm text-gray-500 multi-line-truncate" v-if="project.description">{{ project.description }}
        </p>

        <div class="mt-4 flex flex-wrap gap-2">
            <span v-for="tag in project.tags" :key="tag"
                class="text-xs text-gray-80 bg-gray-200 px-2 py-1 rounded-full">{{ tag }}</span>
        </div>

        <div class="mt-4 flex items-center justify-end">
            <i
                class="fas fa-arrow-right ml-1 text-gray-600 cursor-pointer hover:text-black transition-all ease-in-out"></i>
        </div>
    </article>
</template>

<script setup lang="ts">

type Attachment = { type?: { name?: string }, link: string }

const props = defineProps({
    project: { type: Object as () => any, required: true }
})

const { project } = props as {
    project: {
        title: string,
        description?: string,
        previewImage?: string,
        tags?: string[],
        relevantLink?: string,
        attachments?: Attachment[]
    }
}
</script>

<style scoped>
.multi-line-truncate {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
