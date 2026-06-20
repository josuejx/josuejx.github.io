<script setup lang="ts">
import { EDUCATION } from "../../data/education";
</script>

<template>
  <div>
    <h2 class="text-4xl font-black mb-12 text-center lg:text-left bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent pb-2">Educación</h2>
    <ul
      class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"
    >
      <li v-for="(edu, index) in EDUCATION" :key="index" class="group">
        <hr v-if="index !== 0" class="bg-base-300 group-hover:bg-primary transition-colors duration-500" />
        <div class="timeline-middle">
          <div class="relative">
            <div class="absolute inset-0 bg-primary/20 blur-md rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
            <img :src="edu.schoolLogo" :alt="edu.school" class="size-12 rounded bg-white shadow-md relative z-10 group-hover:scale-110 transition-transform duration-300" v-if="edu.schoolLogo" />
            <div v-else class="size-12 rounded bg-primary/10 flex items-center justify-center text-primary relative z-10 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M12 3L1 9L4 10.636V17C4 18.1046 8 20 12 20C16 20 20 18.1046 20 17V10.636L23 9L12 3ZM18 10.636L12 14L6 10.636L12 7.27273L18 10.636ZM21 16.5C21 16.7761 21 17.5 12 17.5C3 17.5 3 16.7761 3 16.5V12.3182L12 17.3636L21 12.3182V16.5Z"/></svg>
            </div>
          </div>
        </div>
        <div class="timeline-end mb-10 md:mb-16">
          <div class="card bg-base-200/50 backdrop-blur-sm border border-base-300 shadow-xl group-hover:shadow-primary/10 group-hover:-translate-y-1 transition-all duration-500 ml-4 md:ml-6 w-full text-left">
            <div class="card-body p-6 md:p-8">
              <div class="text-2xl font-black group-hover:text-primary transition-colors duration-300">{{ edu.school }}</div>
              <div v-if="edu.degree" class="text-lg font-medium mt-1">{{ edu.degree }}</div>
              <time class="font-mono italic text-sm text-base-content/60 mt-2 block"
                >{{ edu.startDate }} – {{ edu.endDate }}</time
              >
              <div v-if="edu.skills" class="mt-4 pt-4 border-t border-base-300/50">
                <span class="text-sm font-semibold block mb-2">Aptitudes principales:</span>
                <p class="text-sm text-base-content/80">{{ edu.skills }}</p>
              </div>
            </div>
          </div>
        </div>
        <hr v-if="index !== EDUCATION.length - 1" class="bg-base-300 group-hover:bg-primary transition-colors duration-500" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
li {
  --timeline-col-start: 0;
}
</style>
