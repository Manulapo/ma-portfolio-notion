<template>
    <Section id="projects" contained :section-name="['my', 'Projects']" section-desc="Lorem ipsum dolor sit amet dolor sit Lorem ipsum dolor sit amet dolor sit Lorem ipsum dolor sit amet
            dolor sit Lorem ipsum dolor sit" section-color="pink">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <article class="bg-white rounded-xl shadow-sm p-6 border border-gray-50">
                <div class="bg-gray-100 rounded-lg h-44 md:h-52"></div>
                <div class="mt-6 h-3 bg-gray-200 rounded-full w-3/4"></div>
                <div class="mt-3 h-3 bg-gray-200 rounded-full w-full"></div>
                <div class="mt-2 h-3 bg-gray-200 rounded-full w-5/6"></div>
            </article>

            <article class="bg-white rounded-xl shadow-sm p-6 border border-gray-50">
                <div class="bg-gray-100 rounded-lg h-44 md:h-52"></div>
                <div class="mt-6 h-3 bg-gray-200 rounded-full w-3/4"></div>
                <div class="mt-3 h-3 bg-gray-200 rounded-full w-full"></div>
                <div class="mt-2 h-3 bg-gray-200 rounded-full w-5/6"></div>
            </article>

            <article class="bg-white rounded-xl shadow-sm p-6 border border-gray-50">
                <div class="bg-gray-100 rounded-lg h-44 md:h-52"></div>
                <div class="mt-6 h-3 bg-gray-200 rounded-full w-3/4"></div>
                <div class="mt-3 h-3 bg-gray-200 rounded-full w-full"></div>
                <div class="mt-2 h-3 bg-gray-200 rounded-full w-5/6"></div>
            </article>
        </div>
    </Section>
</template>

<script setup lang="ts">
import Section from '../components/Section.vue'
import Header from '../components/Header.vue'
import NumbersBox from '../components/NumbersBox.vue'
import InfoBadge from '../components/InfoBadge.vue'
</script>
