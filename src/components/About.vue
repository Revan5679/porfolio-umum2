<template>
  <section id="about" class="py-24 px-6 bg-[#0d1526]">
    <div class="max-w-4xl mx-auto text-center space-y-12">
      <!-- Content -->
      <div class="space-y-6">
        <h2
          class="reveal-element delay-100 text-3xl md:text-4xl font-bold text-white"
        >
          About Me
        </h2>
        <div
          class="w-16 h-1 bg-accent mx-auto rounded reveal-element delay-100"
        ></div>

        <p
          class="reveal-element delay-200 text-slate-300 text-lg leading-relaxed"
        >
          Currently, I work as a freelance novel writer, dedicating my time and
          creativity to crafting stories that resonate with readers. While this
          role allows me the flexibility to balance my responsibilities as a
          student.
        </p>

        <p class="reveal-element delay-300 text-slate-400 leading-relaxed">
          it also comes with its challenges, such as inconsistent income and the
          uncertainty of project availability. As much as I enjoy exploring my
          passion for writing, I am now seeking a more stable, permanent
          position that aligns with my skills and aspirations. Ideally, I hope
          to find a job that provides financial security while still allowing me
          to continue my studies. This step is essential for building a more
          structured career path and ensuring long-term professional growth.
        </p>
      </div>

      <!-- Bento Grid -->

      <div
        class="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16 text-left relative"
      >
        <!-- Card 1: Mindset (Large) -->

        <article
          class="group relative md:col-span-2 md:row-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-accent/50 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 ease-out reveal-element delay-400 overflow-hidden [backface-visibility:hidden]"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          ></div>

          <div class="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div
                class="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 [backface-visibility:hidden]"
              >
                <Lightbulb class="text-accent" :size="24" />
              </div>

              <h3 class="text-2xl font-bold text-white mb-4">Mindset</h3>

              <p
                class="text-xl text-slate-300 font-medium leading-relaxed italic"
              >
                "My mindset: getting married in poverty is a long-term criminal
                act"
              </p>
            </div>

            <div class="mt-8">
              <span
                class="text-sm font-semibold tracking-widest text-accent uppercase"
                >Writer & Coder</span
              >
            </div>
          </div>
        </article>

        <!-- Card 2: Hobbies (Medium) -->

        <article
          class="group relative md:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-accent/50 hover:-translate-y-2 hover:scale-[1.01] transition-all duration-500 ease-out reveal-element delay-500 overflow-hidden [backface-visibility:hidden]"
        >
          <div
            class="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          ></div>

          <div class="relative z-10">
            <h3 class="text-xl font-bold text-white mb-4">
              Outside the Editor
            </h3>

            <div class="flex flex-wrap gap-4">
              <div
                class="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-2xl border border-white/5 group-hover:border-white/10 transition-colors duration-300"
              >
                <Gamepad2 class="text-accent" :size="18" />

                <span class="text-sm text-slate-300">Gaming</span>
              </div>

              <div
                class="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-2xl border border-white/5 group-hover:border-white/10 transition-colors duration-300"
              >
                <Coffee class="text-accent" :size="18" />

                <span class="text-sm text-slate-300">Coffee Brewing</span>
              </div>

              <div
                class="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-2xl border border-white/5 group-hover:border-white/10 transition-colors duration-300"
              >
                <Film class="text-accent" :size="18" />

                <span class="text-sm text-slate-300">Watch YouTube</span>
              </div>

              <div
                class="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-2xl border border-white/5 group-hover:border-white/10 transition-colors duration-300"
              >
                <Book class="text-accent" :size="18" />

                <span class="text-sm text-slate-300">Reading The Book</span>
              </div>
            </div>
          </div>
        </article>

        <!-- Card 3: Current Focus (Small) -->

        <article
          class="group relative md:col-span-1 bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-accent/50 hover:-translate-y-2 hover:scale-[1.03] transition-all duration-500 ease-out reveal-element delay-600 overflow-hidden [backface-visibility:hidden]"
        >
          <div
            class="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          ></div>

          <div class="relative z-10">
            <Rocket
              class="text-accent mb-4 group-hover:animate-bounce [backface-visibility:hidden]"
              :size="32"
            />

            <h3 class="text-lg font-bold text-white mb-1">Current Focus</h3>

            <p class="text-sm text-slate-400 leading-tight">
              Exploring the meaning of real life
            </p>
          </div>
        </article>

        <!-- Card 4: Fun Fact (Small) -->

        <article
          class="group relative md:col-span-1 bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-accent/50 hover:-translate-y-2 hover:scale-[1.03] transition-all duration-500 ease-out reveal-element delay-700 overflow-hidden [backface-visibility:hidden]"
        >
          <div
            class="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          ></div>

          <div class="relative z-10">
            <Zap
              class="text-accent mb-4 group-hover:animate-pulse [backface-visibility:hidden]"
              :size="32"
            />

            <h3 class="text-lg font-bold text-white mb-1">Fun Fact</h3>

            <p class="text-sm text-slate-400 leading-tight">100% curiosity</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  Lightbulb,
  Gamepad2,
  Coffee,
  Camera,
  Plane,
  Rocket,
  Zap,
  Book,
  Film,
} from "lucide-vue-next";
</script>
