<script setup lang="ts">
import ThemeToggle from '../global/ThemeToggle.vue';

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
</script>

<template>
    <div class="navbar bg-base-100/70 backdrop-blur-lg sticky top-0 z-50 shadow-sm transition-all duration-300">
        <div class="navbar-start">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul tabindex="-1"
                    class="menu menu-sm dropdown-content bg-base-100/90 backdrop-blur-lg rounded-box z-[1] mt-3 w-52 p-2 shadow-lg">
                    <li><a href="#" @click.prevent="scrollToTop">Sobre Mí</a></li>
                    <li><a href="#skills">Habilidades</a></li>
                    <li><a href="#experience">Experiencia</a></li>
                    <li><a href="#education">Educación</a></li>
                </ul>
            </div>
            <a href="#" class="btn btn-ghost text-xl tracking-widest font-bold">JGA</a>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1 gap-2 font-medium">
                <li><a href="#" @click.prevent="scrollToTop" class="hover:text-primary transition-colors">Sobre Mí</a></li>
                <li><a href="#skills" class="hover:text-primary transition-colors">Habilidades</a></li>
                <li><a href="#experience" class="hover:text-primary transition-colors">Experiencia</a></li>
                <li><a href="#education" class="hover:text-primary transition-colors">Educación</a></li>
            </ul>
        </div>
        <div class="navbar-end">
            <ThemeToggle />
        </div>
    </div>
</template>