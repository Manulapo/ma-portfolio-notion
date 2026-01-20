<template>
    <transition name="dissolve" appear>
        <div class="fixed inset-0 z-50 flex items-center justify-center">
            <div @click="close" class="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"></div>

            <div @click.stop
                class="relative w-[90vw] sm:w-[85vw] md:w-[80vw] lg:w-[75vw] mx-2 sm:mx-4 bg-white rounded-lg shadow-xl overflow-hidden p-0">
                <button @click="close" aria-label="Close modal"
                    class="absolute top-2 sm:top-3 right-2 sm:right-3 z-30 text-gray-600 hover:text-gray-900 p-1">
                    <i class="fa-solid fa-xmark text-xl sm:text-2xl cursor-pointer" aria-hidden="true"></i>
                </button>

                <div class="max-h-[90vh] bg-white overflow-auto">
                    <!-- Mobile layout -->
                    <div class="md:hidden">
                        <div class="p-4 sm:p-6 flex flex-col gap-4">
                            <!-- Preview image -->
                            <div v-if="project?.previewImage"
                                :style="{ backgroundImage: `url(${project.previewImage})` }"
                                class="w-full rounded-lg bg-cover bg-center h-64 sm:h-80"></div>
                            <div v-else class="w-full rounded-lg bg-gray-800 h-64 sm:h-80"></div>


                            <!-- Main content -->
                            <main>
                                <h2 class="text-xl sm:text-2xl font-extrabold text-gray-900 mb-2 sm:mb-4">
                                    <Underline>{{ project?.title }}</Underline>
                                </h2>
                                <div class="divider border-t border-gray-200 mb-2 sm:mb-4"></div>
                                <p class="text-gray-600 text-xs sm:text-sm">{{ project?.description }}</p>


                                <div class="p-2 my-6 sm:p-3 bg-[#fafafa] rounded">
                                    <Underline>
                                        <h4 class="font-semibold text-xs sm:text-sm text-gray-700">Tools used</h4>
                                    </Underline>
                                    <ul
                                        class="mt-2 sm:mt-4 text-xs sm:text-sm text-gray-700 space-y-0.5 sm:space-y-1 pl-8">
                                        <li class="list-disc" v-for="(s, i) in project.tags" :key="i">
                                            {{ s.split('')[0].toUpperCase() + s.slice(1).toLowerCase() }}
                                        </li>
                                    </ul>
                                </div>

                                <!-- Attachments -->
                                <div class="mb-8">
                                    <h4 class="font-semibold text-xs sm:text-sm text-gray-700 mb-2">Attachments</h4>
                                    <div class="flex flex-col gap-2">
                                        <ProjectButton v-for="(a, i) in project?.attachments || []" :key="i"
                                            :attachment="a" />
                                        <div v-if="!(project?.attachments && project.attachments.length)"
                                            class="rounded-full bg-gray-200 h-8 sm:h-10 w-full"></div>
                                    </div>
                                </div>

                                <p class="text-gray-400 text-xs mt-1 sm:mt-2">{{ project?.credits }}</p>

                                <div class="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                                    <ProjectBlock v-for="(item, i) in highlightItems" :key="i" :title="item?.title"
                                        :text="item?.text || project?.description || 'No details provided.'"
                                        :icon="item.icon" :variant="i == 0 ? 'full' : 'half'" />
                                </div>
                            </main>

                            <!-- Tools used -->

                        </div>
                    </div>

                    <!-- Desktop layout -->
                    <div class="hidden md:block">
                        <div class="grid grid-cols-12 gap-3 sm:gap-4 md:gap-6 p-4 sm:p-6 md:p-8 items-start">
                            <!-- Left: tall image panel -->
                            <div class="col-span-3 flex items-start">
                                <div v-if="project?.previewImage"
                                    :style="{ backgroundImage: `url(${project.previewImage})` }"
                                    class="w-full rounded-lg bg-cover bg-center h-[70vh]"></div>
                                <div v-else class="w-full rounded-lg bg-gray-800 h-[70vh]"></div>
                            </div>

                            <!-- Middle: main content -->
                            <main class="col-span-7 max-h-[70vh] overflow-auto p-2 sm:p-3 md:p-4">
                                <h2 class="text-xl sm:text-2xl font-extrabold text-gray-900 mb-2 sm:mb-4">
                                    <Underline>{{ project?.title }}</Underline>
                                </h2>
                                <div class="divider border-t border-gray-200 mb-2 sm:mb-4"></div>
                                <p class="text-gray-600 text-xs sm:text-sm">{{ project?.description }}</p>
                                <p class="text-gray-400 text-xs mt-1 sm:mt-2">{{ project?.credits }}</p>

                                <div class="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                                    <ProjectBlock v-for="(item, i) in highlightItems" :key="i" :title="item?.title"
                                        :text="item?.text || project?.description || 'No details provided.'"
                                        :icon="item.icon" :variant="i == 0 ? 'full' : 'half'" />
                                </div>
                            </main>

                            <!-- Right: narrow sidebar -->
                            <aside class="col-span-2 self-start h-auto max-h-[70vh] overflow-hidden w-full">
                                <div class="flex flex-col gap-2 sm:gap-3">
                                    <div class="p-2 sm:p-3 md:p-4 bg-[#fafafa] rounded mt-0 md:mt-8">
                                        <Underline>
                                            <h4 class="font-semibold text-md sm:text-sm text-gray-700">Tools used</h4>
                                        </Underline>
                                        <ul
                                            class="mt-2 sm:mt-4 text-xs sm:text-sm text-gray-700 space-y-0.5 sm:space-y-1 pl-6">
                                            <li v-for="(s, i) in project.tags" :key="i" class="list-disc">
                                                {{ s.split('')[0].toUpperCase() + s.slice(1).toLowerCase() }}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="flex flex-col gap-2 sm:gap-3">
                                    <div class="divider border-t border-gray-200"></div>
                                    <h4 class="font-semibold text-md sm:text-sm text-gray-700">Attachments </h4>

                                    <ProjectButton v-for="(a, i) in project?.attachments || []" :key="i"
                                        :attachment="a" />
                                    <div v-if="!(project?.attachments && project.attachments.length)"
                                        class="rounded-full bg-gray-200 h-8 sm:h-10 w-full"></div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import ProjectBlock from './ProjectBlock.vue'
import ProjectButton from './ProjectButton.vue'
import Underline from './Underline.vue';

const props = defineProps<{ project: any }>()
const emit = defineEmits<{ (e: 'close'): void }>()

function close() {
    emit('close')
}

const project = props.project || {}

const highlightItems = (project.highlights && project.highlights.length)
    ? project.highlights
    : Array.from({ length: 5 }, (_, i) => ({
        title: `Detail ${i + 1}`,
        text: project?.highlights?.[0]?.text || project?.description || ``,
        variant: 'half',
    }))

function lockScroll() {
    const root = document.documentElement
    const prev = Number(root.dataset.modalOpenCount || '0')
    const next = prev + 1
    root.dataset.modalOpenCount = String(next)
    if (next === 1) {
        const scrollBarWidth = window.innerWidth - root.clientWidth
        root.style.overflow = 'hidden'
        if (scrollBarWidth > 0) root.style.paddingRight = `${scrollBarWidth}px`
    }
}

function unlockScroll() {
    const root = document.documentElement
    const prev = Number(root.dataset.modalOpenCount || '0')
    const next = Math.max(0, prev - 1)
    if (next === 0) {
        delete root.dataset.modalOpenCount
        root.style.overflow = ''
        root.style.paddingRight = ''
    } else {
        root.dataset.modalOpenCount = String(next)
    }
}

onMounted(() => lockScroll())
onUnmounted(() => unlockScroll())
</script>

<style scoped>
.backdrop-blur-sm {
    backdrop-filter: blur(6px);
}

/* Dissolve transition for modal appearance/disappearance */
.dissolve-enter-active,
.dissolve-leave-active {
    transition: opacity 240ms ease;
}

.dissolve-enter-from,
.dissolve-leave-to {
    opacity: 0;
}
</style>
