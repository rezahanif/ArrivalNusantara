/**
 * composables/usePageTransition.ts
 *
 * Global state machine for the landing → experience page transition.
 *
 * Phases:
 *  'idle'      – overlay hidden, nothing happening
 *  'overlay'   – overlay appears instantly (clones landing look, no animation yet)
 *  'animating' – video shrinks to sidebar, white curtain grows from right
 *  'fading'    – overlay fades out after navigation (sidebar is visible underneath)
 */

type Phase = 'idle' | 'overlay' | 'animating' | 'fading'

// Singleton state — shared across all component instances
const phase = ref<Phase>('idle')

export function usePageTransition() {
  const router = useRouter()

  async function transitionToExperience(): Promise<void> {
    if (phase.value !== 'idle') return

    // 1. Show overlay immediately — it copies the landing look
    phase.value = 'overlay'
    await nextTick()

    // 2. Two rAF frames so the browser paints the overlay before transitions begin
    await new Promise<void>(resolve =>
      requestAnimationFrame(() => requestAnimationFrame(() => resolve()))
    )

    // 3. Kick off CSS transitions (video shrink + curtain grow)
    phase.value = 'animating'

    // 4. Navigate after the main animation completes (650 ms)
    await new Promise<void>(resolve => setTimeout(resolve, 650))
    await router.push('/experience')

    // 5. Let the page settle for one tick, then fade out the overlay
    await nextTick()
    phase.value = 'fading'

    // 6. After fade-out duration (350 ms), hide overlay entirely
    await new Promise<void>(resolve => setTimeout(resolve, 350))
    phase.value = 'idle'
  }

  return { phase: readonly(phase), transitionToExperience }
}
