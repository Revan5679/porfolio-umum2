<template>
  <header class="fixed top-0 w-full z-50 bg-[#0B1120]/80 backdrop-blur-md border-b border-slate-800 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <!-- Logo -->
      <a href="#" class="text-2xl font-bold tracking-tight text-white">
        Dev<span class="text-accent">Portfolio</span>.
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex gap-8 text-sm font-medium text-slate-300">
        <a href="#hero" class="nav-link relative transition-all duration-300 hover:scale-110 hover:text-accent
            after:content-empty after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 after:-translate-x-1/2
            hover:after:w-full">Home</a>
        <a href="#about" class="nav-link relative transition-all duration-300 hover:scale-110 hover:text-accent
            after:content-empty after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 after:-translate-x-1/2
            hover:after:w-full">About</a>
        <a href="#education" class="nav-link relative transition-all duration-300 hover:scale-110 hover:text-accent
            after:content-empty after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 after:-translate-x-1/2
            hover:after:w-full">Education</a>
        <a href="#skills" class="nav-link relative transition-all duration-300 hover:scale-110 hover:text-accent
            after:content-empty after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 after:-translate-x-1/2
            hover:after:w-full">Skills</a>
        <a href="#contact" class="nav-link relative transition-all duration-300 hover:scale-110 hover:text-accent
            after:content-empty after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 after:-translate-x-1/2
            hover:after:w-full">Contact</a>
      </nav>

                  <!-- Mobile Menu Button -->

                  <button id="mobile-menu-btn" class="md:hidden text-white hover:text-accent transition-colors relative z-100 p-2" @click="toggleMobileMenu">

                    <svg v-if="!mobileMenuOpen" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

                      <line x1="3" y1="12" x2="21" y2="12"></line>

                      <line x1="3" y1="6" x2="21" y2="6"></line>

                      <line x1="3" y1="18" x2="21" y2="18"></line>

                    </svg>

                    <svg v-else width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

                      <line x1="18" y1="6" x2="6" y2="18"></line>

                      <line x1="6" y1="6" x2="18" y2="18"></line>

                    </svg>

                  </button>

                </div>

      

          <!-- Mobile Nav Overlay -->

          <div id="mobile-menu" :class="{ 'flex': mobileMenuOpen, 'hidden': !mobileMenuOpen }" class="absolute top-20 left-0 w-full bg-primary border-b border-slate-800 p-6 flex-col gap-4 shadow-xl">

            <a href="#hero" class="mobile-link text-slate-300 hover:text-accent py-2 block" @click="toggleMobileMenu">Home</a>

            <a href="#about" class="mobile-link text-slate-300 hover:text-accent py-2 block" @click="toggleMobileMenu">About</a>

            <a href="#education" class="mobile-link text-slate-300 hover:text-accent py-2 block" @click="toggleMobileMenu">Education</a>

            <a href="#skills" class="mobile-link text-slate-300 hover:text-accent py-2 block" @click="toggleMobileMenu">Skills</a>

            <a href="#contact" class="mobile-link text-slate-300 hover:text-accent py-2 block" @click="toggleMobileMenu">Contact</a>

          </div>

        </header>

      </template>

      

      <script setup lang="ts">

      import { ref } from 'vue';

      

      const mobileMenuOpen = ref(false);

      const toggleMobileMenu = () => {

        mobileMenuOpen.value = !mobileMenuOpen.value;

      };

      </script>