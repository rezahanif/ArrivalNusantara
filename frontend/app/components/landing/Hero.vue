<!-- components/landing/Hero.vue
     Landing splash hero — matches Figma node 523:5834.
     
     Design spec:
     • Full-screen: 100vw × 100vh
     • Background: video (hero-bg.mp4), full cover
     • Logo: top-2 left-13.5 — aligns with sidebar logo x-axis, slightly below top
     • Headline: "Explore / Your Favorite Journey" — 64px bold, centered white
     • Sub-headline: "Let's Make Our Life Beautiful" — 20px, white/80
     • Spacebar pill: frosted pill w-[194px] h-[36px], two dash icons
     • Prompt: "Press Spacebar to Continue"
     • Spacebar keydown / click → triggers cinematic transition to /experience
-->
<template>
  <section
    class="relative w-screen h-screen overflow-hidden bg-forest-900 flex flex-col items-center justify-center"
    aria-label="Landing Hero"
  >
    <!-- Full-screen video background -->
    <div class="absolute inset-0 pointer-events-none select-none">
      <video
        src="/video/hero-bg.mp4"
        autoplay
        loop
        muted
        playsinline
        class="w-full h-full object-cover transform scale-110"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
    </div>

    <!--
      Logo — left-13.5 (54 px) keeps the same x-axis as the sidebar logo.
      top-2 (8 px) shifts it slightly down from the absolute top so the
      transition overlay logo matches and a seamless handoff is possible.
    -->
    <div class="absolute top-2 left-13.5 z-10">
      <img
        src="/images/logo-white.webp"
        alt="Arrival Nusantara"
        class="h-[202px] w-[174px] object-contain"
      />
    </div>

    <!-- Headline + sub-headline -->
    <div
      class="relative z-10 flex flex-col items-center gap-3 px-4 text-center transition-opacity duration-200"
      :class="{ 'opacity-0': isTriggered }"
    >
      <h1
        class="font-jakarta font-bold text-[64px] leading-[1.17] text-white blur-[0.25px] whitespace-pre-line"
      >
        Explore&#10;Your Favorite Journey
      </h1>
      <p class="font-jakarta font-normal text-[20px] leading-[1.12] text-white/80">
        Let's Make Our Life Beautiful
      </p>
    </div>

    <!-- Spacebar CTA pill -->
    <div
      class="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-5 text-center transition-opacity duration-200"
      :class="{ 'opacity-0': isTriggered }"
    >
      <button
        type="button"
        aria-label="Press spacebar or click to continue"
        :disabled="isTriggered"
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
          disabled:cursor-not-allowed
        "
        @click="handleContinue"
      >
        <span class="block w-[46px] h-[2px] bg-white rounded-full" />
        <span class="block w-[46px] h-[2px] bg-white rounded-full" />
      </button>

      <p class="font-jakarta font-normal text-[15px] leading-[1.12] text-white/60">
        Press Spacebar to Continue
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const { transitionToExperience } = usePageTransition()

// Prevent double-firing while the transition is running
const isTriggered = ref(false)

async function handleContinue(): Promise<void> {
  if (isTriggered.value) return
  isTriggered.value = true
  await transitionToExperience()
}

// Spacebar listener — attached only on the client
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