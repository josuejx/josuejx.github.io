<script setup lang="ts">
// on mounted, check if prefers dark mode and set the theme accordingly
import { onMounted, ref } from 'vue';
import { THEMES } from '../../data/themes';

const selectedTheme = ref(localStorage.getItem('theme') || 'default');

const setTheme = (theme: string) => {
    console.log(`Setting theme to ${theme}`, document.documentElement);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    selectedTheme.value = theme;
};

onMounted(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = prefersDark ? 'dark' : 'light';
    setTheme(theme);
});
</script>

<template>
    <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn m-1">
            Theme
            <svg width="12px" height="12px" class="inline-block h-2 w-2 fill-current opacity-60"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
                <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
            </svg>
        </div>
        <div class="dropdown-content bg-base-300 rounded-box z-1 w-180 p-2 shadow-2xl">
            <div class="grid grid-cols-5 gap-4 m-4">
                <div v-for="theme in THEMES" :key="theme.value" class="tooltip tooltip-bottom rounded-2xl" :data-tip="theme.name" :data-theme="theme.value" @pointerdown="setTheme(theme.value)">
                    <div class="cursor-pointer rounded-2xl border-2 border-base-content p-2" :class="{ 'border-primary': selectedTheme === theme.value }">
                        <h3>{{ theme.name }}</h3>
                        <div class="grid grid-cols-4 gap-2">
                            <p class="bg-primary text-primary-content rounded font-bold text-center">A</p>
                            <p class="bg-secondary text-secondary-content rounded font-bold text-center">A</p>
                            <p class="bg-accent text-accent-content rounded font-bold text-center">A</p>
                            <p class="bg-neutral text-neutral-content rounded font-bold text-center">A</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>