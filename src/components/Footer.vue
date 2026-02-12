<template>
  <footer class="py-12 bg-[#0B1120]/80 backdrop-blur-md border-t border-white/5 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center gap-10">
        <!-- Left Section: Branding -->
        <div class="text-center md:text-left space-y-3">
          <a href="#" class="text-xl font-bold tracking-tighter text-white group">
            ALEX<span class="text-accent transition-all duration-300 group-hover:text-accentHover">.DEV</span>
          </a>
          <p class="text-slate-500 text-sm max-w-xs leading-relaxed">
            Crafting high-performance digital experiences with precision and subtle motion.
          </p>
        </div>

        <!-- Right Section: Back to Top -->
        <div class="flex justify-center md:justify-end">
          <button @click="scrollToTop" 
                  class="group flex items-center gap-3 text-sm font-semibold text-slate-400 hover:text-white transition-all duration-300">
            <span class="tracking-widest uppercase text-[10px]">Back to Top</span>
            <div class="p-2.5 bg-white/5 border border-white/10 rounded-full group-hover:bg-accent/10 group-hover:border-accent/30 group-hover:text-accent transition-all duration-500 group-hover:animate-bounce shadow-lg">
              <ArrowUp :size="18" />
            </div>
          </button>
        </div>
      </div>

      <!-- Bottom Bar: Copyright -->
      <div class="mt-12 pt-8 border-t border-white/5 text-center">
        <p class="text-slate-500 text-[13px] tracking-widest uppercase">
          &copy; {{ new Date().getFullYear() }} Alex Developer. Built with Vue 3 & UnoCSS.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ArrowUp } from 'lucide-vue-next';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
</script>

<style scoped>
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.group-hover\:animate-bounce {
  animation: bounce 1s infinite;
}
</style>
