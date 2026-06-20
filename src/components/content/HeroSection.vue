<script setup lang="ts">
import { PROFILE } from "../../data/profile";
</script>

<template>
    <div class="hero bg-base-200 mt-10 rounded-lg">
        <div class="hero-content flex-col lg:flex-row">
            <img src="/src/assets/images/josue_garcia_asensi.webp" class="max-w-sm rounded-lg shadow-2xl" />
            <div>
                <h1 class="text-5xl font-bold">{{ PROFILE.name }}</h1>
                <h2 class="text-xl font-medium mt-2 opacity-80">{{ PROFILE.headline }}</h2>
                <div class="py-6 space-y-4 text-justify">
                    <p v-for="(paragraph, index) in PROFILE.about" :key="index">
                        {{ paragraph }}
                    </p>
                </div>
                <button class="btn btn-primary">Contactar</button>
            </div>
        </div>
    </div>
</template>