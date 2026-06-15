<template>
  <section
    class="relative w-full h-[100dvh] lg:w-screen lg:h-screen flex flex-col items-center overflow-hidden lg:justify-center bg-cover bg-center"
    style="background-color: #03240e; background-image: url('/images/hero-bg.webp')"
    aria-label="Landing Hero"
  >
    <!-- Full-screen video background -->
    <div class="absolute inset-0 pointer-events-none select-none z-0">
      <video
        v-if="!autoplayFailed"
        ref="videoRef"
        src="/video/hero-bg.mp4"
        autoplay
        loop
        muted
        playsinline
        poster="/images/hero-bg.webp"
        @playing="videoLoaded = true"
        class="w-full h-full object-cover transform scale-110 transition-opacity duration-700"
        :class="videoLoaded ? 'opacity-100' : 'opacity-0'"
      />
      <!-- Ambient overlays -->
      <div
        class="absolute inset-0"
        style="background: linear-gradient(to bottom, rgba(3,36,14,0.55) 0%, rgba(3,36,14,0.12) 30%, rgba(3,36,14,0.0) 55%, rgba(3,36,14,0.55) 85%, rgba(3,36,14,0.75) 100%)"
      />
    </div>

    <!-- Logo - visible on both mobile and desktop (responsive layout) -->
    <div class="absolute z-10 top-10 left-6 lg:top-10 lg:left-13.5">
      <img
        src="/images/logo-white.webp"
        alt="Arrival Nusantara"
        class="h-[150px] w-[130px] lg:h-[202px] lg:w-[174px] object-contain object-top"
      />
    </div>

    <!-- Headline + sub-headline -->
    <div
      class="relative z-10 flex flex-col items-center text-center transition-opacity duration-200
             px-[17px] mt-[145px] max-w-[390px] w-full
             lg:mt-0 lg:px-4 lg:max-w-none lg:w-auto"
      :class="{ 'opacity-0': isTriggered }"
    >
      <h1
        class="font-jakarta font-bold text-[27px] leading-[40px] text-white blur-[0.25px] pb-3 break-words w-[328px]
               lg:text-[64px] lg:leading-[1.17] lg:w-auto lg:pb-0"
      >
        Explore Your<br class="lg:hidden" /><span class="hidden lg:inline">&#10;</span> Favorite Journey
      </h1>
      <p
        class="font-jakarta font-normal text-[14px] leading-[22.4px] text-white/80
               lg:text-[20px] lg:leading-[1.12]"
      >
        Let's Make Our Life Beautiful
      </p>
    </div>

    <div class="flex-1 lg:hidden" />

    <!-- Spacebar CTA pill - desktop only -->
    <div
      class="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-5 text-center transition-opacity duration-200"
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

    <!-- GO Button - mobile only -->
    <div
      class="relative z-10 flex flex-col items-center mb-10 lg:hidden transition-opacity duration-200"
      :class="{ 'opacity-0': isTriggered }"
    >
      <div
        class="w-[1px]"
        style="height: 94px; background: linear-gradient(180deg, rgba(217,217,217,0) 28.56%, rgba(153,153,153,0.7) 99.91%);"
      />
      <button
        type="button"
        class="relative w-14 h-14 rounded-full flex items-center justify-center active:scale-95 transition-transform"
        style="filter: drop-shadow(0px 4px 2px rgba(0,0,0,0.25))"
        :disabled="isTriggered"
        @click="handleContinue"
      >
        <span
          class="absolute inset-0 rounded-full"
          style="background: #f5f3f3; box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1);"
        />
        <span
          class="relative font-bold text-[27px] text-black leading-none select-none font-jakarta"
        >
          GO
        </span>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const emit = defineEmits<{
  go: []
}>()

// Prevent double-firing while the transition is running
const isTriggered = ref(false)
const videoLoaded = ref(false)
const autoplayFailed = ref(false)
const videoRef = ref<HTMLVideoElement | null>(null)

function handleContinue(): void {
  if (isTriggered.value) return
  isTriggered.value = true
  emit('go')
}

// Spacebar / Gesture listeners — attached only on the client
onMounted(() => {
  // Autoplay check
  if (videoRef.value) {
    videoRef.value.play().then(() => {
      videoLoaded.value = true
    }).catch((err) => {
      console.warn('Video autoplay blocked by browser/system:', err)
      autoplayFailed.value = true
    })
  }

  // 1. Keyboard Spacebar listener
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.code === 'Space' || e.key === ' ') {
      e.preventDefault()
      handleContinue()
    }
  }

  // 2. Mouse/Trackpad wheel down listener
  const onWheel = (e: WheelEvent) => {
    if (e.deltaY > 20) {
      handleContinue()
    }
  }

  // 3. Touch swipe up listener (for mobile gestures)
  let touchStartY = 0
  const onTouchStart = (e: TouchEvent) => {
    touchStartY = e.touches[0]?.clientY ?? 0
  }
  const onTouchMove = (e: TouchEvent) => {
    const touchEndY = e.touches[0]?.clientY ?? 0
    const diffY = touchStartY - touchEndY
    // Swipe up threshold of 40px
    if (diffY > 40) {
      handleContinue()
    }
  }

  window.addEventListener('keydown', onKeyDown)
  window.addEventListener('wheel', onWheel, { passive: true })
  window.addEventListener('touchstart', onTouchStart, { passive: true })
  window.addEventListener('touchmove', onTouchMove, { passive: true })

  onUnmounted(() => {
    window.removeEventListener('keydown', onKeyDown)
    window.removeEventListener('wheel', onWheel)
    window.removeEventListener('touchstart', onTouchStart)
    window.removeEventListener('touchmove', onTouchMove)
  })
})
</script>