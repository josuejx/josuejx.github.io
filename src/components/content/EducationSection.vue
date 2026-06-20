<script setup lang="ts">
import { EDUCATION } from "../../data/education";
</script>

<template>
  <h2 class="text-3xl font-bold mb-10">Educación</h2>
  <ul
    class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"
  >
    <li v-for="(edu, index) in EDUCATION" :key="index">
      <div class="timeline-middle">
        <img :src="edu.schoolLogo" :alt="edu.school" class="size-12 rounded bg-white" v-if="edu.schoolLogo" />
      </div>
      <div class="timeline-end mb-10">
        <div class="text-lg font-black">{{ edu.school }}</div>
        <div v-if="edu.degree">{{ edu.degree }}</div>
        <time class="font-mono italic text-sm text-gray-400"
          >{{ edu.startDate }} – {{ edu.endDate }}</time
        >
        <p class="mt-2 text-sm" v-if="edu.skills"><strong>Aptitudes:</strong> {{ edu.skills }}</p>
      </div>
      <hr />
    </li>
  </ul>
</template>

<style scoped>
li {
  --timeline-col-start: 0;
}
</style>
