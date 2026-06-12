<!-- components/gallery/HeroQuoteCard.vue
     Full-bleed photo card with gradient scrim, large heading, and
     a description block. Used for "Nature. People. Purpose."
-->
<template>
  <div class="relative rounded-[20px] overflow-hidden h-full">
    <!-- Photo -->
    <img
      :src="image"
      alt=""
      class="absolute inset-0 w-full h-full object-cover"
    />

    <!-- Scrim for legibility -->
    <div class="absolute inset-0 bg-gradient-to-t from-[#03240e]/90 via-[#03240e]/40 to-transparent" />

    <!-- Content -->
    <div class="relative h-full flex flex-col justify-between p-8">
      <div class="flex flex-col gap-6">
        <h2 class="font-jakarta font-normal text-[32px] leading-[40px] text-white whitespace-pre-line">
          {{ heading }}
        </h2>
        <p class="font-jakarta text-[14px] leading-[1.625] text-white/90 max-w-[384px] whitespace-pre-line">
          {{ description }}
        </p>
      </div>

      <!-- Bottom-right icon -->
      <div class="flex justify-end">
        <ArrowUpRight class="w-8 h-8 text-white/90" :stroke-width="1.5" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'

defineProps<{
  image: string
  heading: string
  description: string
}>()
</script>