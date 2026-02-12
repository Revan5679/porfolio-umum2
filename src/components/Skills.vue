<template>
  <section id="skills" class="py-24 px-6 bg-[#0B1120] relative overflow-hidden">
    <!-- Background Decorative Glow -->
    <div
      class="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
    ></div>
    <div
      class="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"
    ></div>

    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2
          class="reveal-element text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Technical Skills
        </h2>
        <div class="w-16 h-1 bg-accent mx-auto rounded reveal-element"></div>
        <p
          class="reveal-element delay-100 text-slate-400 mt-6 max-w-2xl mx-auto"
        >
          A constantly evolving toolkit designed to build fast, scalable, and
          interactive applications.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <!-- Category Card Loop -->
        <div
          v-for="(category, index) in skillsData"
          :key="category.title"
          class="reveal-element p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-accent/50 transition-all duration-500 group [backface-visibility:hidden]"
          :style="{ animationDelay: `${index * 200}ms` }"
        >
          <div
            class="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 text-accent group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-500 border border-white/5 [backface-visibility:hidden]"
          >
            <component :is="category.icon" :size="24" stroke-width="2" />
          </div>

          <h3 class="text-2xl font-bold text-white mb-6">
            {{ category.title }}
          </h3>

          <ul class="space-y-6">
            <li
              v-for="skill in category.skills"
              :key="skill.name"
              class="space-y-2"
            >
              <div
                class="flex justify-between text-slate-200 text-sm font-medium"
              >
                <span>{{ skill.name }}</span>
                <span>{{ skill.percentage }}%</span>
              </div>
              <div
                class="w-full h-1.5 bg-white/10 rounded-full overflow-hidden"
              >
                <div
                  class="skill-progress h-full bg-accent shadow-[0_0_10px_rgba(56,189,248,0.5)]"
                  :style="{ '--progress': `${skill.percentage}%` }"
                ></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Layout, Server, Wrench } from "lucide-vue-next";

const skillsData = [
  {
    title: "Frontend",
    icon: Layout,
    skills: [
      { name: "React / Next.js", percentage: 95 },
      { name: "Tailwind CSS", percentage: 90 },
      { name: "TypeScript", percentage: 85 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", percentage: 80 },
      { name: "PostgreSQL", percentage: 75 },
      { name: "API Design", percentage: 85 },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git / GitHub", percentage: 90 },
      { name: "Docker", percentage: 70 },
      { name: "Figma", percentage: 80 },
    ],
  },
];
</script>

<style scoped>
.skill-progress {
  width: 0%;
  transition: width 1.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.active .skill-progress {
  width: var(--progress);
}
</style>
