<script setup lang="ts">
import { SKILLS } from "../../data/skills";
</script>

<template>
  <div>
    <h2 class="text-4xl font-black mb-12 text-center lg:text-left bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent pb-2">Habilidades Tecnológicas</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div v-for="(category, index) in SKILLS" :key="index" 
           class="card bg-base-200/50 backdrop-blur-sm border border-base-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group">
        <div class="card-body">
          <h3 class="card-title text-2xl font-bold group-hover:text-primary transition-colors duration-300">{{ category.name }}</h3>
          <div class="flex flex-wrap gap-3 mt-4">
            <span v-for="skill in category.skills" :key="skill" 
                  class="badge badge-primary badge-lg badge-outline hover:bg-primary hover:text-primary-content cursor-default transition-colors duration-300 py-4 px-4 font-medium">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
