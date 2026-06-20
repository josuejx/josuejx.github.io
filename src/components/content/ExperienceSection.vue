<script setup lang="ts">
import { EXPERIENCE } from "../../data/experience";
</script>

<template>
  <div>
    <h2 class="text-4xl font-black mb-12 text-center lg:text-left bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent pb-2">Experiencia</h2>
    <ul
      class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"
    >
      <li v-for="(experience, index) in EXPERIENCE" :key="index" class="group">
        <hr v-if="index !== 0" class="bg-base-300 group-hover:bg-primary transition-colors duration-500" />
        <div class="timeline-middle">
          <div class="relative">
            <div class="absolute inset-0 bg-primary/20 blur-md rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
            <img :src="experience.copmanyLogo" :alt="experience.company" class="size-12 rounded shadow-md relative z-10 group-hover:scale-110 transition-transform duration-300" />
          </div>
        </div>
        <div class="timeline-end mb-10 md:mb-16">
          <div class="card bg-base-200/50 backdrop-blur-sm border border-base-300 shadow-xl group-hover:shadow-primary/10 group-hover:-translate-y-1 transition-all duration-500 ml-4 md:ml-6 w-full">
            <div class="card-body p-6 md:p-8 text-left">
              <div class="text-2xl font-black group-hover:text-primary transition-colors duration-300">{{ experience.company }}</div>
              <time class="font-mono italic text-sm text-base-content/60"
                ><span v-if="experience.type">{{ experience.type }} • </span
                >{{ experience.totalDuration }}</time
              >
              <p class="text-base-content/70 mt-1 mb-6 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clip-rule="evenodd" /></svg>
                {{ experience.location }}
              </p>
              
              <div class="divider mt-0 mb-4"></div>
              
              <div
                v-for="(role, index) in experience.roles"
                :key="index"
                class="mb-6 last:mb-0"
              >
                <div class="text-xl font-bold">{{ role.title }}</div>
                <time class="font-mono italic text-sm text-base-content/60 block mb-3"
                  ><span v-if="role.type">{{ role.type }} • </span>{{ role.duration }}
                </time>
                <p class="text-justify text-base-content/80">{{ role.description }}</p>
              </div>
            </div>
          </div>
        </div>
        <hr v-if="index !== EXPERIENCE.length - 1" class="bg-base-300 group-hover:bg-primary transition-colors duration-500" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
li {
  --timeline-col-start: 0;
}
</style>
