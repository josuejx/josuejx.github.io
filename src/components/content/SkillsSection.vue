<script setup lang="ts">
import { SKILLS } from "../../data/skills";
</script>

<template>
  <div id="skills">
    <h2 class="text-3xl md:text-4xl font-black mb-8 text-center lg:text-left bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent pb-2">Habilidades Tecnológicas</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div v-for="(category, index) in SKILLS" :key="index" 
           class="card bg-base-200/50 backdrop-blur-sm border border-base-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 group">
        <div class="card-body p-6">
          <h3 class="card-title text-xl font-bold group-hover:text-primary transition-colors duration-300">{{ category.name }}</h3>
          <div class="flex flex-wrap gap-2.5 mt-3">
            <span v-for="skill in category.skills" :key="skill" 
                  class="badge badge-primary badge-sm md:badge-md badge-outline hover:bg-primary hover:text-primary-content cursor-default transition-colors duration-300 py-2.5 px-3 font-medium">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
