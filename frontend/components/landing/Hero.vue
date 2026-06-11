<!-- components/landing/Hero.vue
     Landing splash hero — matches Figma node 523:5834.
     
     Design spec:
     • Full-screen: 100vw × 100vh
     • Background: forest-green (#1a3a22) + background photo (cover)
     • Logo: top-left, h-[101px] w-[87px]
     • Headline: "Explore / Your Favorite Journey" — 64px bold, centered white
     • Sub-headline: "Let's Make Our Life Beautiful" — 20px, white/80
     • Spacebar pill: frosted pill w-[194px] h-[36px], two dash icons
     • Prompt: "Press Spacebar to Continue"
     • Spacebar keydown → navigates to /experience
-->
<template>
  <section
    class="relative w-screen h-screen overflow-hidden bg-forest-900 flex items-center justify-center"
    aria-label="Landing Hero"
  >
    <!-- ── Background Photo ─────────────────────────────────────── -->
    <div class="absolute inset-0 pointer-events-none select-none">
      <img
        src="/images/hero-bg.webp"
        alt=""
        aria-hidden="true"
        class="w-full h-full object-cover"
        fetchpriority="high"
      />
      <!-- subtle dark vignette so text stays readable -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
    </div>

    <!-- ── Logo ────────────────────────────────────────────────── -->
    <div class="absolute top-8 left-6 z-10">
      <img
        src="/images/logo-white.webp"
        alt="Arrival Nusantara"
        class="h-[101px] w-[87px] object-contain"
      />
    </div>

    <!-- ── Centre Content ──────────────────────────────────────── -->
    <div class="relative z-10 flex flex-col items-center gap-10 px-4 text-center">

      <!-- Headline -->
      <div class="flex flex-col items-center gap-3">
        <h1
          class="font-jakarta font-bold text-[64px] leading-[1.17] text-white blur-[0.25px] whitespace-pre-line"
        >
          Explore&#10;Your Favorite Journey
        </h1>
        <p class="font-jakarta font-normal text-[20px] leading-[1.12] text-white/80">
          Let's Make Our Life Beautiful
        </p>
      </div>

      <!-- Spacebar prompt -->
      <div class="flex flex-col items-center gap-5">
        <!-- Pill button -->
        <button
          type="button"
          aria-label="Press spacebar or click to continue"
          class="
            flex items-center justify-around
            w-[194px] h-[36px] px-5
            rounded-[20px]
            border border-white
            bg-white/10
            shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
            hover:bg-white/20
            transition-colors duration-200
            cursor-pointer
          "
          @click="handleContinue"
        >
          <!-- Two dash lines, matching the Figma spacebar key illustration -->
          <span class="block w-[46px] h-[2px] bg-white rounded-full" />
          <span class="block w-[46px] h-[2px] bg-white rounded-full" />
        </button>

        <p class="font-jakarta font-normal text-[20px] leading-[1.12] text-white/80">
          Press Spacebar to Continue
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function handleContinue(): void {
  router.push('/experience')
}

// Spacebar listener — attach only on client side
onMounted(() => {
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.code === 'Space' || e.key === ' ') {
      e.preventDefault()
      handleContinue()
    }
  }
  window.addEventListener('keydown', onKeyDown)
  onUnmounted(() => window.removeEventListener('keydown', onKeyDown))
})
</script>