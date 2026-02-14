<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out',
      isScrolled
        ? 'bg-black/20 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
    ]"
  >
    <div
      :class="[
        'max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ease-in-out',
        isScrolled ? 'h-16' : 'h-20'
      ]"
    >
      <!-- Logo -->
      <a href="#" class="text-2xl font-bold tracking-tight text-white" aria-label="Go to home section">
        My<span class="text-accent">Portfolio</span>.
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex gap-8 text-sm font-medium text-slate-300">
        <a
          href="#hero"
          class="nav-link relative transition-all duration-300 hover:scale-110 hover:text-accent after:content-empty after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full [backface-visibility:hidden]"
          >Home</a
        >
        <a
          href="#about"
          class="nav-link relative transition-all duration-300 hover:scale-110 hover:text-accent after:content-empty after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full [backface-visibility:hidden]"
          >About</a
        >
        <a
          href="#education"
          class="nav-link relative transition-all duration-300 hover:scale-110 hover:text-accent after:content-empty after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full [backface-visibility:hidden]"
          >Education</a
        >
        <a
          href="#skills"
          class="nav-link relative transition-all duration-300 hover:scale-110 hover:text-accent after:content-empty after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full [backface-visibility:hidden]"
          >Skills</a
        >
        <a
          href="#contact"
          class="nav-link relative transition-all duration-300 hover:scale-110 hover:text-accent after:content-empty after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full [backface-visibility:hidden]"
          >Contact</a
        >
      </nav>

      <!-- Mobile Menu Button -->

      <button
        id="mobile-menu-btn"
        class="md:hidden text-white hover:text-accent transition-colors relative z-100 p-2"
        @click="toggleMobileMenu"
        :aria-label="mobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'"
        :aria-expanded="mobileMenuOpen"
      >
        <svg
          v-if="!mobileMenuOpen"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#38BDF8"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>

          <line x1="3" y1="6" x2="21" y2="6"></line>

          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>

        <svg
          v-else
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#38BDF8"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>

          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>

    <!-- Mobile Nav Overlay -->

    <div
      id="mobile-menu"
      :class="[
        mobileMenuOpen ? 'flex' : 'hidden',
        isScrolled ? 'top-16' : 'top-20'
      ]"
      class="absolute left-0 w-full bg-[#0B1120]/95 border-b border-slate-800 p-6 flex-col gap-4 shadow-xl transition-all duration-300"
    >
      <a
        href="#hero"
        class="mobile-link text-slate-300 hover:text-accent py-2 block"
        @click="toggleMobileMenu"
        >Home</a
      >

      <a
        href="#about"
        class="mobile-link text-slate-300 hover:text-accent py-2 block"
        @click="toggleMobileMenu"
        >About</a
      >

      <a
        href="#education"
        class="mobile-link text-slate-300 hover:text-accent py-2 block"
        @click="toggleMobileMenu"
        >Education</a
      >

      <a
        href="#skills"
        class="mobile-link text-slate-300 hover:text-accent py-2 block"
        @click="toggleMobileMenu"
        >Skills</a
      >

      <a
        href="#contact"
        class="mobile-link text-slate-300 hover:text-accent py-2 block"
        @click="toggleMobileMenu"
        >Contact</a
      >
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const mobileMenuOpen = ref(false);
const isScrolled = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
