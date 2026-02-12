<template>
  <section id="education" class="py-24 px-6 bg-[#0B1120] relative overflow-hidden">
    <!-- Background Glows -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-20">
        <h2 class="reveal-element text-3xl md:text-4xl font-bold text-white mb-4">Education</h2>
        <div class="w-16 h-1 bg-accent mx-auto rounded reveal-element"></div>
      </div>

      <div class="relative">
        <!-- Vertical Line (The Tree Trunk) -->
        <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent transform md:-translate-x-1/2 reveal-line"></div>

        <!-- Node 1 (Content Right) -->
        <div class="relative flex items-center mb-16 md:justify-between group">
          <!-- Year Desktop (Left) -->
          <div class="hidden md:block w-5/12 text-right pr-12 reveal-element delay-100">
            <span class="text-accent font-mono text-lg font-bold tracking-wider">2021 - 2023</span>
          </div>
          
          <!-- Glowing Dot -->
          <div class="absolute left-4 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-[#0B1120] transform -translate-x-1/2 z-10 shadow-[0_0_20px_rgba(56,189,248,0.8)] group-hover:scale-150 transition-transform duration-500"></div>

          <!-- Content (Right) -->
          <div class="w-full md:w-5/12 pl-10 md:pl-12 reveal-element delay-200">
            <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-accent/50 hover:-translate-y-1 transition-all duration-500">
              <span class="md:hidden block text-accent font-mono text-sm mb-2 font-bold">2021 - 2023</span>
              <h3 class="text-xl md:text-2xl font-bold text-white mb-2">Master of Interactive Media</h3>
              <p class="text-slate-300 font-medium mb-4">Creative Arts University</p>
              <p class="text-slate-400 text-sm leading-relaxed">
                Specialized in human-centered design and advanced web technologies. Researched the impact of 3D interfaces on user engagement.
              </p>
            </div>
          </div>
        </div>

        <!-- Node 2 (Content Left) -->
        <div class="relative flex items-center mb-16 md:justify-between group">
          <!-- Content (Left) -->
          <div class="w-full md:w-5/12 pl-10 md:pl-0 md:pr-12 reveal-element delay-300">
             <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:text-right hover:border-accent/50 hover:-translate-y-1 transition-all duration-500">
              <span class="md:hidden block text-accent font-mono text-sm mb-2 font-bold">2017 - 2021</span>
              <h3 class="text-xl md:text-2xl font-bold text-white mb-2">BS Computer Science</h3>
              <p class="text-slate-300 font-medium mb-4">Global Institute of Technology</p>
              <p class="text-slate-400 text-sm leading-relaxed">
                Foundation in algorithms, data structures, and computer architecture. Led the university web development club for two years.
              </p>
            </div>
          </div>
          
          <!-- Glowing Dot -->
          <div class="absolute left-4 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-[#0B1120] transform -translate-x-1/2 z-10 shadow-[0_0_20px_rgba(56,189,248,0.8)] group-hover:scale-150 transition-transform duration-500"></div>

          <!-- Year Desktop (Right) -->
          <div class="hidden md:block w-5/12 pl-12 reveal-element delay-400">
            <span class="text-accent font-mono text-lg font-bold tracking-wider">2017 - 2021</span>
          </div>
        </div>

        <!-- Node 3 (Content Right) -->
        <div class="relative flex items-center mb-16 md:justify-between group">
          <!-- Year Desktop (Left) -->
          <div class="hidden md:block w-5/12 text-right pr-12 reveal-element delay-500">
            <span class="text-accent font-mono text-lg font-bold tracking-wider">2023 - Present</span>
          </div>
          
          <!-- Glowing Dot -->
          <div class="absolute left-4 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-[#0B1120] transform -translate-x-1/2 z-10 shadow-[0_0_20px_rgba(56,189,248,0.8)] group-hover:scale-150 transition-transform duration-500"></div>

          <!-- Content (Right) -->
          <div class="w-full md:w-5/12 pl-10 md:pl-12 reveal-element delay-600">
            <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-accent/50 hover:-translate-y-1 transition-all duration-500">
              <span class="md:hidden block text-accent font-mono text-sm mb-2 font-bold">2023 - Present</span>
              <h3 class="text-xl md:text-2xl font-bold text-white mb-2">Self-Driven Learning</h3>
              <p class="text-slate-300 font-medium mb-4">Continuous Exploration</p>
              <p class="text-slate-400 text-sm leading-relaxed">
                Currently deep-diving into AI-assisted development, 3D web frameworks (Three.js), and advanced performance optimization techniques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.reveal-line {
  animation: grow-down 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  transform-origin: top;
}

@keyframes grow-down {
  from {
    transform: scaleY(0) translateX(-50%);
  }
  to {
    transform: scaleY(1) translateX(-50%);
  }
}

.reveal-element {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease-out;
}

.reveal-element.active {
  opacity: 1;
  transform: translateY(0);
}
</style>