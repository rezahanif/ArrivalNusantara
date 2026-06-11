<!-- components/experience/Carousel.vue
     Horizontal scroll carousel with left/right circle arrow buttons.
     Scroll snaps to each card. Arrow visibility auto-updates with scroll position.
-->
<template>
  <div class="relative mb-10">

    <!-- Left arrow -->
    <Transition name="fade">
      <button
        v-if="canScrollLeft"
        type="button"
        aria-label="Scroll left"
        class="
          absolute left-0 top-[calc(50%-18px)] -translate-x-1/2 z-20
          w-9 h-9 bg-white rounded-full shadow-lg
          flex items-center justify-center
          hover:shadow-xl transition-shadow duration-200
        "
        @click="scroll(-1)"
      >
        <ChevronLeft class="w-4 h-4 text-gray-700" />
      </button>
    </Transition>

    <!-- Cards scroll track -->
    <div
      ref="track"
      class="flex gap-4 overflow-x-auto scrollbar-none scroll-smooth snap-x snap-mandatory pb-3"
      @scroll="onScroll"
    >
      <ExperienceCard
        v-for="exp in experiences"
        :key="exp.id"
        :experience="exp"
        class="snap-start"
        @click="emit('select', exp)"
      />
      <!-- Right fade sentinel — gives partial peek feeling -->
      <div class="shrink-0 w-4" aria-hidden="true" />
    </div>

    <!-- Right arrow -->
    <Transition name="fade">
      <button
        v-if="canScrollRight"
        type="button"
        aria-label="Scroll right"
        class="
          absolute right-0 top-[calc(50%-18px)] translate-x-1/2 z-20
          w-9 h-9 bg-white rounded-full shadow-lg
          flex items-center justify-center
          hover:shadow-xl transition-shadow duration-200
        "
        @click="scroll(1)"
      >
        <ChevronRight class="w-4 h-4 text-gray-700" />
      </button>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import type { Experience } from '~/types/experience'

defineProps<{
  experiences: Experience[]
}>()

const emit = defineEmits<{
  select: [exp: Experience]
}>()

const track = ref<HTMLElement | null>(null)
const canScrollLeft  = ref(false)
const canScrollRight = ref(true)

const CARD_WIDTH = 260 + 16 // card width + gap

function scroll(dir: -1 | 1) {
  track.value?.scrollBy({ left: dir * CARD_WIDTH * 2, behavior: 'smooth' })
}

function onScroll() {
  const el = track.value
  if (!el) return
  canScrollLeft.value  = el.scrollLeft > 8
  canScrollRight.value = el.scrollLeft + el.clientWidth < el.scrollWidth - 8
}

onMounted(() => onScroll())
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to       { opacity: 0; }
</style>