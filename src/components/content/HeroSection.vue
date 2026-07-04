<script setup lang="ts">
import { PROFILE } from "../../data/profile";
</script>

<template>
    <div class="hero bg-base-200/40 rounded-[2.5rem] p-6 lg:p-10 shadow-2xl relative overflow-hidden group">
        <!-- Decorative background blurs -->
        <div class="absolute -top-32 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors duration-700"></div>
        <div class="absolute -bottom-32 -left-32 w-80 h-80 bg-secondary/20 rounded-full blur-3xl group-hover:bg-secondary/30 transition-colors duration-700"></div>
        
        <div class="hero-content flex-col lg:flex-row gap-8 lg:gap-12 relative z-10">
            <div class="perspective-wrapper">
                <img src="/src/assets/images/josue_garcia_asensi.webp" 
                     class="max-w-[14rem] md:max-w-[18rem] rounded-2xl shadow-2xl transition-all duration-500 ease-out tilt-image" 
                     alt="Josué García Asensi" />
            </div>
            <div class="max-w-2xl text-center lg:text-left">
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-br from-primary via-secondary to-accent bg-clip-text text-transparent pb-2">{{ PROFILE.name }}</h1>
                <h2 class="text-xl md:text-2xl font-bold mt-2 text-base-content/80">{{ PROFILE.headline }}</h2>
                <div class="py-4 space-y-3 text-base text-base-content/70 leading-relaxed text-justify lg:text-left">
                    <p v-for="(paragraph, index) in PROFILE.about" :key="index">
                        {{ paragraph }}
                    </p>
                </div>
                <div class="flex flex-wrap gap-4 mt-4 justify-center lg:justify-start">
                    <a href="#experience" class="btn btn-primary rounded-full px-6 shadow-lg shadow-primary/30 hover:scale-105 transition-transform">Ver Experiencia</a>
                    <a href="#" class="btn btn-outline rounded-full px-6 hover:scale-105 transition-transform">Contactar</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.perspective-wrapper {
    perspective: 1000px;
}
.tilt-image:hover {
    transform: rotateY(10deg) rotateX(10deg) scale(1.05);
    box-shadow: -20px 20px 30px rgba(0,0,0,0.2);
}
</style>