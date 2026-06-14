<!--
  components/shared/TransitionOverlay.vue

  Full-screen overlay that drives the landing → experience cinematic transition.
  Mounted once in app.vue via <SharedTransitionOverlay />.

  Animation breakdown (600 ms total):
  ┌────────────────────────────────────────────────────────────────────────────┐
  │ 0 ms  → overlay appears (phase: 'overlay')                                 │
  │           • video fills 100 vw (mirrors landing exactly)                   │
  │           • white curtain width = 0                                        │
  │                                                                             │
  │ ~2 frames → CSS transitions start (phase: 'animating')                     │
  │           • video wrapper: 100 vw → 280 px  (eases right edge in)          │
  │           • video inner left: 0 → -42 vw   (shifts to sidebar crop)        │
  │           • white curtain: 0 → calc(100vw - 280px)                        │
  │                                                                             │
  │ 650 ms → router.push('/experience')                                        │
  │                                                                             │
  │ 650 ms → phase: 'fading' — overlay opacity 1 → 0 (350 ms)                 │
  │ 1000 ms → phase: 'idle' — overlay removed from DOM                         │
  └────────────────────────────────────────────────────────────────────────────┘
-->
<template>
  <!-- Teleport to <body> so it sits above every layout -->
  <Teleport to="body">
    <div
      v-if="phase !== 'idle'"
      class="fixed inset-0 pointer-events-none"
      :style="rootStyle"
      aria-hidden="true"
    >
      <!-- ── Video container — shrinks from 100 vw → 280 px ── -->
      <div
        class="absolute top-0 left-0 h-full overflow-hidden bg-forest-900"
        :style="videoWrapperStyle"
      >
        <!--
          Inner container: w-screen so the video always fills the viewport.
          Shifts from left: 0 → left: -42vw to reveal the same crop the
          sidebar shows through its overflow-hidden window.
        -->
        <div
          class="absolute top-0 h-screen w-screen"
          :style="videoInnerStyle"
        >
          <video
            src="/video/hero-bg.mp4"
            autoplay
            loop
            muted
            playsinline
            class="w-full h-full object-cover transform scale-110"
          />
          <!-- Gradient overlay matches landing hero -->
          <div class="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
          <!-- Subtle darkening overlay matches sidebar -->
          <div
            class="absolute inset-0 bg-black/20 transition-opacity duration-500"
            :style="{ opacity: isAnimating ? 1 : 0 }"
          />
        </div>
      </div>

      <!-- ── Logo — stays at the same position as the landing logo ── -->
      <!--
        top-2 (8 px) places the logo slightly lower than top-0,
        matching the visual alignment with the sidebar logo.
      -->
      <div class="absolute top-2 z-10" :style="logoStyle">
        <img
          src="/images/logo-white.webp"
          alt="Arrival Nusantara"
          class="object-contain"
          :style="logoImgStyle"
        />
      </div>

      <!-- ── White curtain — grows from right to fill content area ── -->
      <div
        class="absolute top-0 right-0 h-full bg-white"
        :style="curtainStyle"
      />
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const { phase } = usePageTransition()

// True once CSS transitions should be active
const isAnimating = computed(
  () => phase.value === 'animating' || phase.value === 'fading'
)

// ── Ease used for all transitions ─────────────────────────────────────────
const EASE = 'cubic-bezier(0.76, 0, 0.24, 1)'
const DURATION = '620ms'

// ── Root overlay ──────────────────────────────────────────────────────────
const rootStyle = computed(() => ({
  zIndex: '9999',
  opacity: phase.value === 'fading' ? '0' : '1',
  transition: phase.value === 'fading' ? 'opacity 350ms ease-out' : 'none',
}))

// ── Video wrapper (clips the inner to sidebar width when animating) ────────
const videoWrapperStyle = computed(() => ({
  width: isAnimating.value ? '280px' : '100vw',
  transition: isAnimating.value
    ? `width ${DURATION} ${EASE}`
    : 'none',
}))

// ── Video inner (shifts left so the sidebar shows its intended crop) ───────
const videoInnerStyle = computed(() => ({
  left: isAnimating.value ? '-42vw' : '0px',
  transition: isAnimating.value
    ? `left ${DURATION} ${EASE}`
    : 'none',
}))

// ── White curtain ──────────────────────────────────────────────────────────
const curtainStyle = computed(() => ({
  width: isAnimating.value ? 'calc(100vw - 280px)' : '0px',
  transition: isAnimating.value
    ? `width ${DURATION} ${EASE}`
    : 'none',
}))

// ── Logo: matches landing position (left-13.5 = 54 px) ───────────────────
//    During animation, gently scale down to match sidebar logo size.
const logoStyle = computed(() => ({
  left: '54px', // left-13.5 in Tailwind (13.5 * 4 = 54px)
}))

const logoImgStyle = computed(() => ({
  height: isAnimating.value ? '195.5px' : '202px',
  width: isAnimating.value ? '170.26px' : '174px',
  transition: isAnimating.value
    ? `height ${DURATION} ${EASE}, width ${DURATION} ${EASE}`
    : 'none',
}))
</script>
