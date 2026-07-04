<script setup lang="ts">
import ExperienceSection from './components/content/ExperienceSection.vue';
import EducationSection from './components/content/EducationSection.vue';
import SkillsSection from './components/content/SkillsSection.vue';
import HeroSection from './components/content/HeroSection.vue';
import AppFooter from './components/layout/AppFooter.vue';
import AppHeader from './components/layout/AppHeader.vue';
</script>

<template>
    <div class="min-h-screen flex flex-col">
        <AppHeader />
        <main class="grow container mx-auto px-4 pt-12 pb-16 flex flex-col gap-16 md:gap-24">
            <HeroSection />
            <SkillsSection />
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                <ExperienceSection />
                <EducationSection />
            </div>
        </main>
        <AppFooter />
    </div>
</template>
