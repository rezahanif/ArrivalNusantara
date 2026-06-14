<!-- components/experience/DetailExperience.vue
     Right-panel detail view, slides in when a card is clicked.
     Figma node: 493-1086
     
     Sections:
     ① Image gallery (main photo + thumbnail strip + prev/next/heart controls)
     ② Title + location
     ③ Stats row: Distance | Temp | Rating
     ④ Scrollable description
     ⑤ Sticky bottom: Total Price + "Book This Trip" CTA
-->
<template>
  <aside
    class="
      w-[370px] shrink-0 flex flex-col
      bg-sand-50 border-l border-gray-100
      overflow-hidden
    "
  >
    <!-- Scrollable body -->
    <div class="flex-1 overflow-y-auto scrollbar-none">

      <!-- ① Image block ──────────────────────────────────────── -->
      <div class="relative mx-4 mt-4 rounded-3xl overflow-hidden h-[300px] shrink-0">

        <!-- Main photo -->
        <img
          :src="experience.images[activeImg] ?? experience.image"
          :alt="experience.title"
          class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
        />

        <!-- Gradient scrim for title readability -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <!-- Prev arrow -->
        <button
          type="button"
          aria-label="Previous photo"
          class="absolute top-3 left-3 w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          @click="prevImg"
        >
          <ChevronLeft class="w-4 h-4 text-white" />
        </button>

        <!-- Heart / wishlist -->
        <button
          type="button"
          :aria-label="isWishlisted(experience.id) ? 'Remove from wishlist' : 'Add to wishlist'"
          class="absolute top-3 right-3 w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors active:scale-95"
          @click="toggleWishlist(experience.id)"
        >
          <Heart
            class="w-4 h-4 transition-colors"
            :class="isWishlisted(experience.id) ? 'fill-red-400 text-red-400' : 'text-white'"
          />
        </button>

        <!-- Thumbnail strip (right edge) -->
        <div class="absolute right-3 top-14 flex flex-col gap-2">
          <button
            v-for="(img, i) in thumbs"
            :key="i"
            type="button"
            class="w-12 h-12 rounded-xl overflow-hidden border-2 transition-all"
            :class="activeImg === i ? 'border-white' : 'border-white/30 hover:border-white/60'"
            @click="activeImg = i"
          >
            <img :src="img" alt="" class="w-full h-full object-cover" />
          </button>

          <!-- +N overflow badge -->
          <div
            v-if="extraCount > 0"
            class="w-12 h-12 rounded-xl bg-black/50 backdrop-blur-sm flex items-center justify-center border-2 border-white/20"
          >
            <span class="font-jakarta font-bold text-white text-xs">+{{ extraCount }}</span>
          </div>
        </div>

        <!-- ② Title + location overlay ──────────────────────── -->
        <div class="absolute bottom-0 left-0 right-16 p-4">
          <h2 class="font-jakarta font-bold text-[22px] text-white leading-tight">
            {{ experience.title }}
          </h2>
          <div class="flex items-center gap-1 mt-1">
            <MapPin class="w-3.5 h-3.5 text-white/70 shrink-0" />
            <span class="font-jakarta text-[12px] text-white/80">{{ experience.location }}</span>
          </div>
        </div>
      </div>

      <!-- ③ Stats row ─────────────────────────────────────────── -->
      <div class="flex gap-2.5 px-4 py-4">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="flex-1 border border-gray-200 rounded-2xl p-3 text-center bg-white"
        >
          <div class="flex items-center justify-center gap-1 text-gray-400 mb-1.5">
            <component :is="stat.icon" class="w-3.5 h-3.5" v-bind="stat.iconProps ?? {}" />
            <span class="font-jakarta text-[11px]">{{ stat.label }}</span>
          </div>
          <p class="font-jakarta font-bold text-[15px] text-gray-900">{{ stat.value }}</p>
        </div>
      </div>

      <!-- ④ Description ─────────────────────────────────────── -->
      <div class="px-4 pb-6">
        <h3 class="font-jakarta font-bold text-[16px] text-gray-900 mb-3">Description</h3>
        <p class="font-jakarta text-[13px] text-gray-500 leading-relaxed">
          {{ experience.description }}
        </p>
      </div>
    </div>

    <!-- ⑤ Sticky bottom CTA ─────────────────────────────────── -->
    <div
      class="
        shrink-0 bg-sand-50 border-t border-gray-100
        px-4 py-4 flex items-center justify-between
      "
    >
      <div>
        <p class="font-jakarta text-[11px] text-gray-400 mb-0.5">Total Price</p>
        <p class="font-jakarta font-bold text-[28px] text-gray-900 leading-none">
          ${{ experience.price }}
        </p>
      </div>

      <button
        type="button"
        class="
          flex items-center gap-2.5
          bg-forest-900 text-white
          font-jakarta font-semibold text-[14px]
          rounded-full px-6 py-3.5
          hover:bg-forest-800 active:scale-95
          transition-all duration-200
        "
      >
        Book This Trip
        <div class="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
          <ArrowRight class="w-3.5 h-3.5" />
        </div>
      </button>
    </div>
  </aside>
</template>

<script setup lang="ts">
import {
  ChevronLeft, Heart, MapPin,
  Route, Clock, Star, ArrowRight,
} from 'lucide-vue-next'
import type { Experience } from '~/types/experience'

const props = defineProps<{
  experience: Experience
}>()

const emit = defineEmits<{
  close: []
}>()

// ── Image gallery state ────────────────────────────────────────
const activeImg = ref(0)
const { isWishlisted, toggleWishlist } = useWishlist()

// Show up to 3 thumbnails; remainder shown as "+N"
const MAX_THUMBS = 3
const allImgs    = computed(() => [props.experience.image, ...props.experience.images])
const thumbs     = computed(() => allImgs.value.slice(0, MAX_THUMBS))
const extraCount = computed(() => Math.max(0, allImgs.value.length - MAX_THUMBS))

function prevImg() {
  emit('close')
}

// Reset state when a different experience is selected
watch(() => props.experience.id, () => {
  activeImg.value = 0
})

// ── Stats row ─────────────────────────────────────────────────
const stats = computed(() => [
  {
    label: 'Distance',
    value: props.experience.distance,
    icon: Route,
  },
  {
    label: 'Duration',
    value: props.experience.duration,
    icon: Clock,
  },
  {
    label: 'Rating',
    value: props.experience.rating.toFixed(1),
    icon: Star,
    iconProps: { class: 'w-3.5 h-3.5 fill-amber-400 text-amber-400' },
  },
])
</script>