<template>
  <section id="contact" class="py-24 px-6 relative overflow-hidden">
    <!-- Decorative Background Glows with Floating Animation -->
    <div
      class="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 animate-glow-1"
    ></div>
    <div
      class="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10 animate-glow-2"
    ></div>

    <div class="max-w-7xl mx-auto">
      <div class="reveal-element text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Get In Touch
        </h2>
        <div class="w-16 h-1 bg-accent mx-auto rounded mb-6"></div>
        <p class="text-slate-400 max-w-2xl mx-auto">
          Have a project in mind or just want to say hi? Feel free to reach out
          through the form or my social media.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <!-- Left Column: Info -->
        <div class="md:col-span-5 space-y-10 reveal-element reveal-left">
          <div>
            <h3 class="text-2xl font-bold text-white mb-6">Let's Talk</h3>
            <p class="text-slate-400 leading-relaxed">
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your visions.
            </p>
          </div>

          <div class="space-y-8">
            <div class="flex items-center gap-5 group">
              <div
                class="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-accent group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] group-hover:scale-110 transition-all duration-500 border border-white/5 [backface-visibility:hidden]"
                aria-hidden="true"
              >
                <Mail :size="24" />
              </div>
              <div>
                <p class="text-sm text-slate-400 font-medium">Email Me</p>
                <a
                  href="mailto:mohamadazraafi@gmail.com"
                  class="text-white font-semibold text-lg hover:text-accent transition-colors duration-300"
                >
                  mohamadazraafi@gmail.com
                </a>
              </div>
            </div>

            <div class="flex items-center gap-5 group">
              <div
                class="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-accent group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] group-hover:scale-110 transition-all duration-500 border border-white/5 [backface-visibility:hidden]"
                aria-hidden="true"
              >
                <MapPin :size="24" />
              </div>
              <div>
                <p class="text-sm text-slate-400 font-medium">Location</p>
                <p class="text-white font-semibold text-lg">
                  Blitar, Indonesia
                </p>
              </div>
            </div>
          </div>

          <div class="pt-6">
            <p
              class="text-sm text-slate-500 mb-2 font-bold uppercase tracking-[0.2em]"
            >
              Connect with me
            </p>

            <!-- Uiverse Social Icons -->
            <ul class="wrapper">
              <li class="icon facebook">
                <a
                  href="https://www.facebook.com/mohamad.azraafi.16"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center w-full h-full text-inherit no-underline"
                  aria-label="Visit my Facebook profile"
                >
                  <span class="tooltip" aria-hidden="true">Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    height="1.2em"
                    viewBox="0 0 320 512"
                    aria-hidden="true"
                  >
                    <path
                      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                    ></path>
                  </svg>
                </a>
              </li>
              <li class="icon github">
                <a
                  href="https://github.com/Revan5679"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center w-full h-full text-inherit no-underline"
                  aria-label="Visit my GitHub profile"
                >
                  <span class="tooltip" aria-hidden="true">Github</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.2em"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                    />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
              </li>
              <li class="icon instagram">
                <a
                  href="https://instagram.com/revanazra5"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center w-full h-full text-inherit no-underline"
                  aria-label="Visit my Instagram profile"
                >
                  <span class="tooltip" aria-hidden="true">Instagram</span>
                  <svg
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    height="1.2em"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                    ></path>
                  </svg>
                </a>
              </li>
              <li class="icon whatsapp">
                <a
                  href="https://wa.me/85143102415"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center w-full h-full text-inherit no-underline"
                  aria-label="Contact me on WhatsApp"
                >
                  <span class="tooltip" aria-hidden="true">Whatsapp</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.2em"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="m10 9-3 3 3 3" />
                    <path d="m14 15 3-3-3-3" />
                    <path
                      d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Right Column: Form -->
        <div class="md:col-span-7 reveal-element reveal-right delay-300">
          <div
            class="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden group/card"
          >
            <!-- Subtle inner glow -->
            <div
              class="absolute -top-24 -right-24 w-48 h-48 bg-accent/10 rounded-full blur-3xl group-hover/card:bg-accent/20 transition-colors duration-700"
            ></div>

              <form
                @submit.prevent="handleSubmit"
                class="space-y-8 relative z-10"
              >
                <!-- Honeypot Field (Bot Prevention) -->
                <div class="hidden" aria-hidden="true">
                  <input
                    v-model="formData.honeypot"
                    type="text"
                    name="website"
                    tabindex="-1"
                    autocomplete="off"
                  />
                </div>

                <div class="grid md:grid-cols-2 gap-8">
                <div class="space-y-2 group">
                  <label
                    for="name"
                    class="text-sm font-medium text-slate-400 ml-1 block transition-all duration-300 group-focus-within:-translate-y-1 group-focus-within:text-accent"
                    >Name</label
                  >
                  <input
                    v-model="formData.name"
                    type="text"
                    id="name"
                    required
                    class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 focus:bg-white/10 transition-all duration-300 placeholder:text-slate-600 shadow-inner"
                    placeholder="Your name"
                  />
                </div>
                <div class="space-y-2 group">
                  <label
                    for="email"
                    class="text-sm font-medium text-slate-400 ml-1 block transition-all duration-300 group-focus-within:-translate-y-1 group-focus-within:text-accent"
                    >Email</label
                  >
                  <input
                    v-model="formData.email"
                    type="email"
                    id="email"
                    required
                    class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 focus:bg-white/10 transition-all duration-300 placeholder:text-slate-600 shadow-inner"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div class="space-y-2 group">
                <label
                  for="message"
                  class="text-sm font-medium text-slate-400 ml-1 block transition-all duration-300 group-focus-within:-translate-y-1 group-focus-within:text-accent"
                  >Message</label
                >
                <textarea
                  v-model="formData.message"
                  id="message"
                  rows="5"
                  required
                  class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 focus:bg-white/10 transition-all duration-300 placeholder:text-slate-600 resize-none shadow-inner"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <div class="space-y-4">
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="btn-shimmer w-full py-4 bg-accent text-primary font-bold rounded-xl transition-all duration-300 active:scale-[0.98] relative overflow-hidden group/btn disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <div
                    v-if="isSubmitting"
                    class="flex items-center justify-center gap-2 relative z-10"
                  >
                    <Loader2 class="animate-spin" :size="20" />
                    <span>Sending...</span>
                  </div>
                  <span v-else class="relative z-10">Send Message</span>
                  <!-- Shimmer Light Streak -->
                  <div class="shimmer-streak"></div>
                </button>

                <!-- Success Message -->
                <Transition
                  enter-active-class="transition duration-300 ease-out"
                  enter-from-class="transform translate-y-4 opacity-0"
                  enter-to-class="transform translate-y-0 opacity-100"
                  leave-active-class="transition duration-200 ease-in"
                  leave-from-class="transform translate-y-0 opacity-100"
                  leave-to-class="transform translate-y-4 opacity-0"
                >
                  <div
                    v-if="showSuccess"
                    class="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center gap-3 text-emerald-400"
                  >
                    <CheckCircle2 :size="20" />
                    <p class="text-sm font-medium">
                      Message sent successfully! I'll get back to you soon.
                    </p>
                  </div>
                </Transition>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { Mail, MapPin, Loader2, CheckCircle2 } from "lucide-vue-next";
import emailjs from "@emailjs/browser";

const formData = reactive({
  name: "",
  email: "",
  message: "",
  honeypot: "",
});

const isSubmitting = ref(false);
const showSuccess = ref(false);

const handleSubmit = async () => {
  // Bot prevention: Honeypot check
  if (formData.honeypot) {
    return;
  }

  isSubmitting.value = true;

  // Simple sanitization: strip HTML tags
  const sanitize = (text: string) => text.replace(/<[^>]*>?/gm, "");
  const sanitizedName = sanitize(formData.name);
  const sanitizedMessage = sanitize(formData.message);

  try {
    // GANTI ID DI BAWAH INI DENGAN PUNYAMU
    await emailjs.send(
      "service_5hi2bsn",
      "template_setowks",
      {
        from_name: sanitizedName, // Memetakan ke {{from_name}} di dashboard
        name: sanitizedName, // Memetakan ke {{name}} di dashboard
        reply_to: formData.email, // Memetakan ke {{reply_to}} di dashboard
        email: formData.email, // Memetakan ke {{email}} di dashboard
        message: sanitizedMessage, // Memetakan ke {{message}} di dashboard
      },
      "lunoHlpjaMYgHBNmU",
    );

    // Reset form setelah berhasil
    formData.name = "";
    formData.email = "";
    formData.message = "";

    showSuccess.value = true;
    setTimeout(() => {
      showSuccess.value = false;
    }, 5000);
  } catch (error) {
    console.error("FAILED...", error);
    alert("Gagal mengirim pesan. Pastikan ID EmailJS kamu benar.");
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
/* Entrance Animations */
.reveal-left.initial-reveal-state {
  opacity: 0 !important;
  transform: translateX(-60px) rotate(-2deg) !important;
}

.reveal-right.initial-reveal-state {
  opacity: 0 !important;
  transform: translateX(60px) rotate(2deg) !important;
}

.reveal-left.active,
.reveal-right.active {
  opacity: 1 !important;
  transform: translateX(0) rotate(0deg) !important;
}

.reveal-element {
  transition: all 1s cubic-bezier(0.2, 0.8, 0.2, 1);
}

/* Form Interactivity */
input:focus,
textarea:focus {
  box-shadow:
    0 0 15px rgba(56, 189, 248, 0.2),
    inset 0 0 10px rgba(56, 189, 248, 0.05);
}

/* Button Shimmer */
.btn-shimmer {
  box-shadow: 0 0 15px 0 rgba(56, 189, 248, 0.2);
}

.shimmer-streak {
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  transform: skewX(-20deg);
  transition: none;
}

.group\/btn:hover .shimmer-streak {
  animation: shimmer 0.8s ease-in-out forwards;
}

@keyframes shimmer {
  0% {
    left: -100%;
  }
  100% {
    left: 200%;
  }
}

/* Background Magic Animations */
.animate-glow-1 {
  animation: float-slow-1 10s ease-in-out infinite;
}

.animate-glow-2 {
  animation: float-slow-2 10s ease-in-out infinite;
}

@keyframes float-slow-1 {
  0%,
  100% {
    transform: translate(-50%, -50%);
  }
  50% {
    transform: translate(-50%, calc(-50% - 25px));
  }
}

@keyframes float-slow-2 {
  0%,
  100% {
    transform: translate(25%, 25%);
  }
  50% {
    transform: translate(25%, calc(25% - 25px));
  }
}

/* --- Uiverse Social Icons Styling (Ported from loaded.css) --- */
.wrapper {
  display: inline-flex;
  list-style: none;
  height: 100px;
  width: 100%;
  padding-top: 20px;
  justify-content: flex-start;
  gap: 15px;
  contain: layout style;
}

.wrapper .icon {
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  z-index: 0;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #38bdf8; /* Default icon color (accent) */
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  backface-visibility: hidden;
}

.wrapper .icon::after {
  content: "";
  position: absolute;
  display: inline-block;
  height: 100%;
  width: 100%;
  background-color: transparent;
  z-index: -1;
  border-radius: 50%;
  top: 0;
  transform: translateY(100%);
  transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icon:hover:after {
  transform: translateY(0);
}

.wrapper .icon:hover {
  color: #fff !important;
  overflow: visible;
  border-color: transparent;
  transform: translateY(-5px);
}

.wrapper .tooltip {
  position: absolute;
  top: 0;
  transform: translateY(0);
  font-size: 14px;
  background: #fff;
  color: #fff;
  padding: 5px 10px;
  border-radius: 8px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip::before {
  position: absolute;
  content: "";
  height: 8px;
  width: 8px;
  background: #fff;
  bottom: -3px;
  left: 50%;
  transform: translate(-50%) rotate(45deg);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icon:hover .tooltip {
  transform: translateY(-55px);
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

/* Individual Brand Colors */
.wrapper .facebook:hover:after {
  background-color: #1877f2;
}
.wrapper .github:hover:after {
  background-color: #000000;
}
.wrapper .instagram:hover:after {
  background-color: #e4405f;
}
.wrapper .whatsapp:hover:after {
  background-color: #08c018;
}

.wrapper .facebook:hover .tooltip,
.wrapper .facebook:hover .tooltip::before {
  background: #1877f2;
}
.wrapper .github:hover .tooltip,
.wrapper .github:hover .tooltip::before {
  background: #1da1f2;
}
.wrapper .instagram:hover .tooltip,
.wrapper .instagram:hover .tooltip::before {
  background: #e4405f;
}
.wrapper .whatsapp:hover .tooltip,
.wrapper .whatsapp:hover .tooltip::before {
  background: #08c018;
}
</style>
