<template>
  <section
    id="hero"
    class="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden"
  >
    <!-- Background Elements -->
    <div
      class="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full md:blur-3xl -z-10"
    ></div>
    <div
      class="absolute bottom-20 left-0 w-72 h-72 bg-blue-900/10 rounded-full md:blur-3xl -z-10"
    ></div>

    <div class="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
      <!-- Hero Text -->
      <div class="order-2 md:order-1 space-y-6">
        <p class="reveal-element text-accent font-medium tracking-wide">
          HELLO, I'M M. REVAN GIBRAN A.
        </p>
        <h1
          class="reveal-element delay-100 text-5xl md:text-7xl font-bold leading-tight text-white"
        >
          I'm a <br />
          <span
            id="typewriter"
            ref="typewriterElement"
            class="text-accent"
          ></span
          ><span class="cursor">|</span>
        </h1>
        <p
          class="reveal-element delay-200 text-slate-400 text-md max-w-lg leading-relaxed"
        >
          Creative Frontend Developer and Novelist eager to gain valuable experience and personal growth through high-performance, pixel-perfect digital projects.
        </p>
        <div
          class="reveal-element delay-300 mt-10 flex flex-col sm:flex-row gap-6 items-center sm:items-start"
        >
          <a href="#contact" class="slice w-full sm:w-auto" aria-label="Action: Contact me to discuss a project">
            <span class="text">Let's Talk</span>
          </a>
          <a
            href="#education"
            class="btn-glitch w-full sm:w-auto"
            data-text="My Journey"
            aria-label="Navigation: View my educational journey"
          >
            My Journey
          </a>

          <!-- Premium Download CV Button with Tooltip -->
          <div class="group relative w-full sm:w-auto">
            <a
              href="/CV_Alex_Developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full sm:w-auto px-8 h-[52px] bg-white/5 border border-white/10 rounded-xl flex items-center justify-center gap-2 text-white hover:bg-white/10 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] active:scale-95 transition-all duration-500 premium-transition [backface-visibility:hidden]"
              aria-label="Action: Download my Curriculum Vitae"
              title="Download CV"
            >
              <span>My Cv</span>
              <FileText
                :size="20"
                class="text-accent hover:scale-125 transition-transform duration-500 premium-transition [backface-visibility:hidden]"
                aria-hidden="true"
              />
            </a>
            <!-- Tooltip -->
            <span
              class="absolute -top-12 left-1/2 -translate-x-1/2 z-30 scale-0 px-3 py-1.5 rounded-lg border border-accent bg-[#0B1120] text-accent text-xs font-bold shadow-xl transition-all duration-300 origin-bottom group-hover:scale-100 whitespace-nowrap premium-transition [backface-visibility:hidden]"
            >
              My CV
            </span>
          </div>
        </div>
      </div>

      <!-- Hero Image -->
      <div
        class="order-1 md:order-2 flex justify-center md:justify-end [backface-visibility:hidden]"
        :class="{ 'floating-animation': isMounted }"
      >
        <img
          src="/poto ai1.1.webp"
          alt="M. Revan Gibran A. - Frontend Developer and Novelist Profile Picture"
          width="256"
          height="256"
          loading="eager"
          fetchpriority="high"
          decoding="async"
          class="rounded-full w-64 h-64 object-cover border-4 border-accent mx-auto shadow-[0_0_20px_rgba(56,189,248,0.5)] [backface-visibility:hidden]"
          :class="{ 'glow-animation': isMounted }"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref, onUnmounted } from "vue";
import { FileText } from "lucide-vue-next";

const typewriterElement = ref<HTMLElement | null>(null);
const isMounted = ref(false);

// Typewriter Effect
const words: string[] = [
  "Frontend Developer",
  "Creative Web Developer",
  "Novelist",
];
let i = 0;
let timer: number | undefined;

const typeWriter = () => {
  if (!typewriterElement.value || !words || words.length === 0) {
    return;
  }

  const word = words[i];
  if (word === undefined || word === null) {
    return;
  }

  const text = typewriterElement.value.innerHTML;

  // Typing
  if (
    text.length < word.length &&
    !typewriterElement.value.classList.contains("deleting")
  ) {
    typewriterElement.value.innerHTML = word.substring(0, text.length + 1);
    timer = setTimeout(typeWriter, 100) as unknown as number;
  }
  // Deleting
  else if (typewriterElement.value.classList.contains("deleting")) {
    typewriterElement.value.innerHTML = word.substring(0, text.length - 1);
    if (text.length === 0) {
      typewriterElement.value.classList.remove("deleting");
      i = (i + 1) % words.length;
      timer = setTimeout(typeWriter, 500) as unknown as number;
    } else {
      timer = setTimeout(typeWriter, 50) as unknown as number;
    }
  }
  // Pause before deleting
  else {
    typewriterElement.value.classList.add("deleting");
    timer = setTimeout(typeWriter, 2000) as unknown as number;
  }
};

onMounted(() => {
  isMounted.value = true;
  timer = setTimeout(typeWriter, 1000) as unknown as number;
});

onUnmounted(() => {
  if (timer) {
    clearTimeout(timer);
  }
});
</script>

<style scoped>
@keyframes floating {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

.floating-animation {
  animation: floating 3s ease-in-out infinite;
}

@keyframes pulse-glow {
  0% {
    box-shadow: 0 0 10px rgba(56, 189, 248, 0.5);
  }
  50% {
    box-shadow:
      0 0 30px rgba(56, 189, 248, 0.8),
      0 0 60px rgba(56, 189, 248, 0.4);
  }
  100% {
    box-shadow: 0 0 10px rgba(56, 189, 248, 0.5);
  }
}

.glow-animation {
  animation: pulse-glow 2s ease-in-out infinite;
}

/* Glitch Button Styles */
.btn-glitch,
.btn-glitch::after {
  height: 52px;
  padding: 0 1.5em;
  font-size: 1.1rem;
  background: linear-gradient(45deg, transparent 5%, #38bdf8 5%);
  border: 0;
  color: #0b1120;
  letter-spacing: 1px;
  line-height: 1;
  box-shadow: 6px 0px 0px #0b1120;
  outline: transparent;
  position: relative;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-family: inherit;
  transition: transform 0.2s;
  box-sizing: border-box;
  backface-visibility: hidden;
}

.btn-glitch::after {
  --slice-0: inset(50% 50% 50% 50%);
  --slice-1: inset(80% -6px 0 0);
  --slice-2: inset(50% -6px 30% 0);
  --slice-3: inset(10% -6px 85% 0);
  --slice-4: inset(40% -6px 43% 0);
  --slice-5: inset(80% -6px 5% 0);
  content: attr(data-text);
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    transparent 3%,
    #0b1120 3%,
    #0b1120 5%,
    #38bdf8 5%
  );
  text-shadow:
    -3px -3px 0px #0ea5e9,
    3px 3px 0px #0b1120;
  clip-path: var(--slice-0);
}

.btn-glitch:hover::after {
  animation: 1s glitch;
  animation-timing-function: steps(2, end);
}

.btn-glitch:active {
  transform: scale(0.95);
}

@keyframes glitch {
  0% {
    clip-path: var(--slice-1);
    transform: translate(-20px, -10px);
  }

  10% {
    clip-path: var(--slice-3);
    transform: translate(10px, 10px);
  }

  20% {
    clip-path: var(--slice-1);
    transform: translate(-10px, 10px);
  }

  30% {
    clip-path: var(--slice-3);
    transform: translate(0px, 5px);
  }

  40% {
    clip-path: var(--slice-2);
    transform: translate(-5px, 0px);
  }

  50% {
    clip-path: var(--slice-3);
    transform: translate(5px, 0px);
  }

  60% {
    clip-path: var(--slice-4);
    transform: translate(5px, 10px);
  }

  70% {
    clip-path: var(--slice-2);
    transform: translate(-10px, 10px);
  }

  80% {
    clip-path: var(--slice-5);
    transform: translate(20px, -10px);
  }

  90% {
    clip-path: var(--slice-1);
    transform: translate(-10px, 0px);
  }

  100% {
    clip-path: var(--slice-1);
    transform: translate(0);
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Slice Button Styles */
.slice {
  --c1: #0b1120;
  --c2: #38bdf8;
  --c3: #f8fafc;
  --size-letter: 1.1rem;
  height: 52px;
  padding: 0 1.5em;
  font-size: var(--size-letter);
  text-decoration: none;

  background-color: transparent;
  border: 3px solid var(--c2);
  border-radius: 0.5em;
  cursor: pointer;

  overflow: hidden;
  position: relative;
  transition: 300ms cubic-bezier(0.83, 0, 0.17, 1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  letter-spacing: 1px;
  backface-visibility: hidden;
}

.slice > .text {
  font-weight: 700;
  color: var(--c3);
  position: relative;
  z-index: 1;
  transition: color 700ms cubic-bezier(0.83, 0, 0.17, 1);
}

.slice::after {
  content: "";

  width: 0;
  height: calc(300% + 1em);

  position: absolute;
  translate: -50% -50%;
  inset: 50%;
  rotate: 30deg;

  background-color: var(--c2);
  transition: 1000ms cubic-bezier(0.83, 0, 0.17, 1);
}

.slice:hover > .text {
  color: var(--c1);
}

.slice:hover::after {
  width: calc(120% + 1em);
}

.slice:active {
  scale: 0.95;
  filter: brightness(0.9);
}

/* Premium Transition for micro-interactions */
.premium-transition {
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;
}
</style>
