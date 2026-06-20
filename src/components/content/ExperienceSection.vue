<script setup lang="ts">
import { EXPERIENCE } from "../../data/experience";
</script>

<template>
  <h2 class="text-3xl font-bold mb-10">Experience</h2>
  <ul
    class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"
  >
    <li v-for="(experience, index) in EXPERIENCE" :key="index">
      <div class="timeline-middle">
        <img :src="experience.copmanyLogo" :alt="experience.company" class="size-12 rounded" />
      </div>
      <div class="timeline-end mb-10">
        <div class="text-lg font-black">{{ experience.company }}</div>
        <time class="font-mono italic"
          ><span v-if="experience.type">{{ experience.type }} • </span
          >{{ experience.totalDuration }}</time
        >
        <p>{{ experience.location }}</p>
        <div
          v-for="(role, index) in experience.roles"
          :key="index"
          class="mb-6"
        >
          <div class="text-lg font-black">{{ role.title }}</div>
          <time class="font-mono italic"
            ><span v-if="role.type">{{ role.type }} • </span>{{ role.duration }}
          </time>
          <p>{{ role.description }}</p>
        </div>
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
