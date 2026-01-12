<template>
    <Section id="certifications" contained :section-name="['my', 'Certifications']"
        section-desc="Lorem ipsum dolor sit amet dolor sit" section-doodle="/doodles/diamond-doodle.svg"
        section-color="peach" doodle-size="w-12 h-12 md:w-20 md:h-20 ">
        <div class="max-w-6xl mx-auto">
            <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                <CertificationCard v-for="(c, i) in displayedCertifications" :key="i" :name="c.name"
                    :description="c.description" :image="c.image" :date="c.date" :link="c.link"
                    :issuedBy="c.issuedBy" />
            </div>
            <div class="flex justify-center mt-6 md:hidden">
                <button v-if="displayedCertifications.length < certifications.length" @click="loadMore"
                    class="inline-flex items-center gap-2 sm:gap-3 bg-black/90 backdrop-blur-sm text-white text-sm sm:text-base rounded-full shadow-md transition ease-in-out w-fit px-4 py-2 sm:py-2 sm:w-auto justify-center">
                    Load More
                </button>
            </div>
        </div>
    </Section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import Section from './Section.vue'
import CertificationCard from './CertificationCard.vue'
import { certifications } from '../constants/certifications'

const displayCount = ref(6)
const isMobile = ref(true)

const displayedCertifications = computed(() => {
    // Show all on desktop, show limited on mobile
    if (!isMobile.value) {
        return certifications
    }
    return certifications.slice(0, displayCount.value)
})

const checkMobile = () => {
    isMobile.value = window.innerWidth < 768
}

onMounted(() => {
    checkMobile()
    window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
    window.removeEventListener('resize', checkMobile)
})

const loadMore = () => {
    displayCount.value += 6
}
</script>
