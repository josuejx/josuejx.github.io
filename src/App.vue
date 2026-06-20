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
        <!-- Añadimos padding superior para que el header sticky no tape el contenido, y un gap generoso entre secciones -->
        <main class="grow container mx-auto px-4 pt-28 pb-16 flex flex-col gap-32">
            <HeroSection />
            <SkillsSection />
            <ExperienceSection />
            <EducationSection />
        </main>
        <AppFooter />
    </div>
</template>
