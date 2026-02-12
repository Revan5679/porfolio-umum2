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
import Lenis from 'lenis';
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Education from './components/Education.vue';
import Skills from './components/Skills.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

// Intersection Observer
let observer: IntersectionObserver | null = null;
let lenis: Lenis | null = null;
let rafId: number | null = null;

const initLenis = () => {
  const isMobile = window.innerWidth < 768;

  lenis = new Lenis({
    duration: isMobile ? 1.0 : 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: isMobile ? 1.5 : 2,
    infinite: false,
  });

  function raf(time: number) {
    lenis?.raf(time);
    rafId = requestAnimationFrame(raf);
  }

  rafId = requestAnimationFrame(raf);

  // Performance & LCP Safety: Pointer events optimization
  let isScrollingFast = false;
  lenis.on('scroll', ({ velocity }: { velocity: number }) => {
    const fast = Math.abs(velocity) > 10;
    if (fast !== isScrollingFast) {
      isScrollingFast = fast;
      document.body.style.pointerEvents = fast ? 'none' : 'auto';
    }
  });
};

const handleAnchorClick = (e: MouseEvent) => {
  const target = e.target as HTMLElement;
  const anchor = target.closest('a');

  if (!anchor) return;

  const href = anchor.getAttribute('href');
  
  // Target specific triggers as requested
  const isNavLink = anchor.classList.contains('nav-link');
  const isHeroTalk = anchor.classList.contains('slice');
  const isHeroJourney = anchor.classList.contains('btn-glitch');
  const isMobileLink = anchor.classList.contains('mobile-link');
  const isBackToTop = anchor.classList.contains('back-to-top');

  if ((isNavLink || isHeroTalk || isHeroJourney || isMobileLink || isBackToTop) && href?.startsWith('#')) {
    e.preventDefault();
    const targetEl = document.querySelector(href);
    if (targetEl && lenis) {
      lenis.scrollTo(targetEl as HTMLElement, {
        offset: 0,
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  }
};

onMounted(() => {
  // Delay Lenis for LCP Safety
  setTimeout(() => {
    initLenis();
  }, 2000);

  // Global Click Interceptor
  document.addEventListener('click', handleAnchorClick);

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
  if (rafId) {
    cancelAnimationFrame(rafId);
  }
  if (lenis) {
    lenis.destroy();
  }
  document.removeEventListener('click', handleAnchorClick);
});
</script>

<style>
body {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
