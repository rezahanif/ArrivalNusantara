<!-- components/experience/DetailTopDestination.vue
     Clean, premium modal popup detail view for a Top Destination.
     Includes marketing copy, rating, and Google Maps integration.
-->
<template>
  <div
    class="
      fixed inset-0 z-50 flex items-center justify-center
      bg-[#0e2116]/40 backdrop-blur-[6px] p-6
    "
    @click.self="emit('close')"
  >
    <div
      class="
        bg-white rounded-3xl w-full max-w-md overflow-hidden relative flex flex-col
        shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_10px_10px_-5px_rgba(0,0,0,0.04)]
        animate-in fade-in zoom-in-95 duration-200
      "
    >
      <!-- Hero Image Block -->
      <div class="relative h-[240px] w-full shrink-0">
        <img
          :src="destination.image"
          :alt="destination.name"
          class="w-full h-full object-cover"
          loading="eager"
        />
        <!-- Top Gradient Scrim for Close Button visibility -->
        <div class="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/40 to-transparent" />

        <!-- Close Button (Top Left per instructions) -->
        <button
          type="button"
          class="
            absolute top-4 left-4 w-9 h-9 rounded-full
            bg-white/80 backdrop-blur-[6px] flex items-center justify-center
            shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]
            hover:bg-white active:scale-95 transition-all
          "
          aria-label="Close details"
          @click="emit('close')"
        >
          <X class="w-4 h-4 text-[#03240e]" />
        </button>
      </div>

      <!-- Content Container -->
      <div class="p-6 flex flex-col gap-5">
        <!-- Title & Category Row -->
        <div class="flex flex-col gap-1">
          <span class="font-jakarta font-semibold text-[11px] uppercase tracking-wider text-forest-700">
            {{ destination.type }}
          </span>
          <h3 class="font-jakarta font-bold text-[24px] leading-tight text-[#03240e]">
            {{ destination.name }}
          </h3>
        </div>

        <!-- Rating Row -->
        <div class="flex items-center gap-1.5 bg-amber-50 self-start px-3 py-1.5 rounded-xl border border-amber-100">
          <Star class="w-4 h-4 fill-amber-400 text-amber-400 shrink-0" />
          <span class="font-jakarta text-[13px] text-amber-900 font-bold leading-none">
            {{ destination.rating.toFixed(1) }}
          </span>
          <span class="font-jakarta text-[11px] text-amber-700 font-medium leading-none">
            / 5.0 Rating
          </span>
        </div>

        <!-- Description -->
        <div class="flex flex-col gap-2">
          <h4 class="font-jakarta font-semibold text-[13px] text-gray-500 uppercase tracking-wider">
            About the destination
          </h4>
          <p class="font-jakarta text-[14px] leading-[22px] text-[#424842]">
            {{ marketingData.description }}
          </p>
        </div>

        <!-- Action Bar: Google Maps Link -->
        <a
          :href="marketingData.mapUrl"
          target="_blank"
          class="
            w-full flex items-center justify-center gap-2.5 mt-2
            bg-forest-900 text-white font-jakarta font-semibold text-[14px]
            rounded-full py-4 shadow-sm hover:bg-forest-800 active:scale-[0.98]
            transition-all duration-200
          "
        >
          <Compass class="w-4 h-4" />
          Open in Google Maps
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { X, Star, Compass } from 'lucide-vue-next'
import type { Destination } from '~/types/experience'

const props = defineProps<{
  destination: Destination
}>()

const emit = defineEmits<{
  close: []
}>()

interface DestinationMarketing {
  description: string
  mapUrl: string
}

// Tourism-centric descriptions and verified coordinates for Lombok's highlights
const marketingInfo: Record<string, DestinationMarketing> = {
  'Segara Anak': {
    description: 'A breathtaking crescent-shaped volcanic crater lake nested 2,008 meters high inside the Mount Rinjani caldera. Framed by towering rock walls, its azure waters embrace Mount Baru Jari, an active volcano rising dramatically from the center. It holds deep spiritual significance and offers refreshing alpine camping.',
    mapUrl: 'https://maps.google.com/?q=Segara+Anak+Lombok'
  },
  'Aiq Kalak': {
    description: 'Situated only a short walk from Segara Anak Lake, these natural hot springs flow straight from volcanic channels. Infused with mineral-rich sulfur, local pilgrims and hikers revere Aiq Kalak for its therapeutic hot pools, perfect for relaxing sore muscles and restoring energy after hiking.',
    mapUrl: 'https://maps.google.com/?q=Aiq+Kalak+Hot+Spring+Lombok'
  },
  'Sembalun Savanna': {
    description: 'An endless landscape of emerald-green grass and rolling hills sitting right at the base of Mount Rinjani. Known for its cool mountain breezes and striking sunrises, the Sembalun highlands are the photographic gateway to the peaks, presenting a quiet contrast to Lombok\'s rugged coastline.',
    mapUrl: 'https://maps.google.com/?q=Sembalun+Valley+Lombok'
  },
  'Torean Valley': {
    description: 'Famed as the "Jurassic Park" path of Mount Rinjani, the Torean route cuts a spectacular vertical cleft between sheer cliffs wrapped in tropical jungle. This majestic canyon is known for mist-laden pathways, cascading waterfalls, and jaw-dropping valley sunsets.',
    mapUrl: 'https://maps.google.com/?q=Torean+Trail+Lombok'
  }
}

// Fallback logic in case names mismatch
const marketingData = computed<DestinationMarketing>(() => {
  return marketingInfo[props.destination.name] ?? {
    description: `Discover the raw beauty of ${props.destination.name}, one of Lombok's premier natural landmarks. Experience pristine environments, local heritage, and stunning views off the beaten track.`,
    mapUrl: `https://maps.google.com/?q=${encodeURIComponent(props.destination.name + ' Lombok')}`
  }
})
</script>
