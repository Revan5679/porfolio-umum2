<template>
  <div class="antialiased scroll-smooth">
    <Header />
    <Hero />
    <About />
    <Education />
    <Skills />
    <Contact />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Education from './components/Education.vue';
import Skills from './components/Skills.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

// Intersection Observer
let observer: IntersectionObserver | null = null;

onMounted(() => {
  const elements = document.querySelectorAll('.reveal-element');
  let revealedCount = 0;

  const observerOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.target instanceof HTMLElement) {
        if (entry.isIntersecting) {
          entry.target.classList.remove('initial-reveal-state');
          entry.target.classList.add('active');
          
          // Optimization: Unobserve after reveal and disconnect if all done
          observer?.unobserve(entry.target);
          revealedCount++;
          
          if (revealedCount === elements.length) {
            observer?.disconnect();
          }
        }
      }
    });
  }, observerOptions);

  elements.forEach((el: Element) => {
    if (el instanceof HTMLElement) {
      el.classList.add('initial-reveal-state');
      observer?.observe(el);
    }
  });
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style>
body {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
