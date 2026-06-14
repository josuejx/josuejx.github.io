<script setup lang="ts">
import HeroSection from './components/content/HeroSection.vue';
import AppFooter from './components/layout/AppFooter.vue';
import AppHeader from './components/layout/AppHeader.vue';

</script>

<template>
    <div class="min-h-screen flex flex-col">
        <AppHeader />
        <main class="grow container mx-auto">
            <HeroSection />
        </main>
        <AppFooter />
    </div>
</template>
