<template>
    <div class="group bg-white rounded-sm h-40 sm:h-48 md:h-60 flex flex-col items-center justify-center transition-transform
        m-0.5 sm:m-1 relative overflow-hidden shadow-sm">
        <div class="relative flex flex-col items-center justify-center w-full h-full">
            <img :src="skill.img" alt="skill"
                class="w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 object-contain mb-2 sm:mb-3 md:mb-4 text-black fill-black back" />
            <div class="text-gray-700 text-center text-xs sm:text-sm font-medium px-1">
                {{ skill.name }}
            </div>

            <div
                class="absolute inset-0 bg-white p-2 sm:p-3 md:p-4 flex items-center justify-center text-center text-gray-700 text-xs sm:text-sm font-medium opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity">
                {{ skill.text }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ skill: { name: string; img: string; text?: string } }>()
const { skill } = props;
</script>

<style scoped></style>
