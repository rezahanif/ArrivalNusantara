<!-- Experience Detail page — node 478:972
     Full single-page view: hero, photo strip, info chips, overview, bottom action bar
     Route: /experience/[id] — acts as one page per Figma spec
-->
<template>
  <div class="relative flex flex-col min-h-screen bg-[#fbf9f8]">

    <!-- Fixed top nav — node 478:1028 -->
    <div class="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-6 py-4">
      <button
        class="size-10 rounded-full bg-white/80 backdrop-blur-[6px] flex items-center justify-center
               shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
        @click="$emit('back')"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 13L5 8l5-5" stroke="#03240e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <button
        class="size-10 rounded-full bg-white/80 backdrop-blur-[6px] flex items-center justify-center
               shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] active:scale-95 transition-transform"
        @click="toggleWishlist(props.experience.id)"
      >
        <svg width="20" height="19" viewBox="0 0 20 19" fill="none">
          <path
            d="M10 17.5S2 12.5 2 6.5a4 4 0 0 1 8-1.17A4 4 0 0 1 18 6.5c0 6-8 11-8 11Z"
            :stroke="isWishlisted(props.experience.id) ? '#ef4444' : '#03240e'"
            :fill="isWishlisted(props.experience.id) ? '#ef4444' : 'none'"
            stroke-width="1.4"
          />
        </svg>
      </button>
    </div>

    <!-- Hero image section — node 478:974, 425px tall, rounded bottom corners -->
    <div class="relative h-[425px] shrink-0 z-[2]">
      <div class="absolute inset-0 rounded-b-[32px] overflow-hidden">
        <img
          :src="heroImage"
          :alt="props.experience?.title"
          class="w-full h-full object-cover"
          loading="eager"
        />
        <!-- Gradient scrim — node 478:976 -->
        <div class="absolute inset-0 bg-gradient-to-b from-transparent from-50% to-black/60 rounded-b-[32px]" />
      </div>

      <!-- Right-side option photos strip — node 478:1182
           Absolute tops: 138, 216, 301, 379 px (per Figma).  Middle photo (i=1) is 76px, others 69px. -->
      <div class="absolute right-6 top-0 h-[425px] pointer-events-auto z-10">
        <button
          v-for="(photo, i) in allImgs"
          :key="i"
          type="button"
          class="absolute right-0 rounded-[20px] overflow-hidden border-4 transition-all duration-200"
          :class="[
            i === 1 ? 'size-[76px]' : 'size-[69px]',
            activeImg === i ? 'border-white scale-105 shadow-md z-20' : 'border-white/50 hover:border-white/80'
          ]"
          :style="{ top: photoTops[i] + 'px' }"
          @click="activeImg = i"
        >
          <img :src="photo" :alt="`Option ${i + 1}`" class="w-full h-full object-cover" loading="lazy" />
        </button>
      </div>

      <!-- Hero text — node 478:977 -->
      <div class="absolute bottom-0 left-0 right-0 pb-8 px-6 flex flex-col gap-2">
        <div class="flex items-center gap-2">
          <svg width="12" height="15" viewBox="0 0 12 15" fill="none">
            <path d="M6 0C3.24 0 1 2.24 1 5c0 3.75 5 10 5 10S11 8.75 11 5c0-2.76-2.24-5-5-5Z" fill="white"/>
          </svg>
          <span class="font-jakarta font-semibold text-[14px] leading-[20px] text-white">
            {{ props.experience?.location }}
          </span>
        </div>
        <h1 class="font-jakarta font-bold text-[32px] leading-[40px] tracking-[-0.64px] text-white">
          {{ props.experience?.title }}
        </h1>
      </div>
    </div>

    <!-- Details section — node 478:985, overlaps hero with z-[1] -->
    <div class="flex flex-col gap-8 px-6 pt-[70px] pb-[120px] z-[1]">

      <!-- Info chips — node 478:986, 3-col grid -->
      <div class="grid grid-cols-3 gap-3">
        <div
          v-for="chip in chips"
          :key="chip.label"
          class="bg-white border border-[#c2c8bf] rounded-xl p-[13px]
                 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]
                 flex flex-col gap-1 items-center justify-center"
        >
          <div class="flex items-center gap-1">
            <component :is="chip.icon" :size="12" class="text-[#424842]" />
            <span class="font-jakarta font-medium text-[12px] leading-[16px] text-[#424842]">
              {{ chip.label }}
            </span>
          </div>
          <span class="font-jakarta font-semibold text-[18px] leading-[24px] text-[#03240e]">
            {{ chip.value }}
          </span>
        </div>
      </div>

      <!-- Overview — node 478:1011 -->
      <div class="flex flex-col gap-0">
        <h2 class="font-jakarta font-semibold text-[24px] leading-[32px] text-[#1b1c1c] mb-2">
          Overview
        </h2>
        <p class="font-jakarta font-normal text-[14px] leading-[22.75px] text-[#424842]">
          {{ expanded ? props.experience?.description : (props.experience?.description ?? '').slice(0, 200) + '...' }}
          <button
            v-if="!expanded"
            class="font-jakarta font-semibold text-[#03240e] ml-1"
            @click="expanded = true"
          >
            Read More...
          </button>
        </p>
      </div>
    </div>

    <!-- Bottom action bar — node 478:1017, fixed -->
    <div class="fixed bottom-0 left-0 right-0 z-30 bg-[#fbf9f8] flex items-center justify-between px-6 py-4">
      <!-- Price -->
      <div class="flex flex-col">
        <span class="font-jakarta font-medium text-[12px] leading-[16px] text-[#424842]">Total Price</span>
        <div class="flex items-baseline gap-1">
          <span class="font-jakarta font-bold text-[32px] leading-[40px] tracking-[-0.64px] text-[#03240e]">
            {{ priceDisplay }}
          </span>
          <span class="font-jakarta font-normal text-[14px] leading-[22.4px] text-[#424842]">
            / tour
          </span>
        </div>
      </div>

      <!-- Book button — node 478:1024, dark green FAB -->
      <button
        class="size-14 rounded-full bg-[#1a3a22] flex items-center justify-center
               shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]
               active:scale-95 transition-transform"
        @click="$emit('book')"
      >
        <svg width="8" height="13" viewBox="0 0 8 13" fill="none">
          <path d="M1 1l6 5.5L1 12" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MapPin, Thermometer, Star } from 'lucide-vue-next'
import type { Experience } from '~/types/experience'

defineEmits<{ back: []; book: [] }>()

const { isWishlisted, toggleWishlist } = useWishlist()

const expanded = ref(false)
const activeImg = ref(0)

const props = defineProps<{
  experience: Experience
}>()

// Reset state when a different experience is selected
watch(() => props.experience.id, () => {
  activeImg.value = 0
})

// Combined image list (main + gallery sub-images)
const allImgs = computed(() => [props.experience.image, ...props.experience.images])

// Use the active index to determine the hero image
const heroImage = computed(() => allImgs.value[activeImg.value] ?? props.experience.image)

// Format price with dollar sign
const priceDisplay = computed(() => `$${props.experience.price}`)

// Figma node 478:1182 — absolute top positions for each option photo
const photoTops = [138, 216, 301, 379]

const chips = computed(() => [
  { label: 'Distance', value: props.experience.distance, icon: MapPin },
  { label: 'Temp',     value: props.experience.temp,     icon: Thermometer },
  { label: 'Rating',   value: String(props.experience.rating), icon: Star },
])
</script>