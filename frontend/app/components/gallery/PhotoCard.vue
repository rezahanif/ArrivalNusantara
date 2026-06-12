<!-- components/gallery/PhotoCard.vue
     Bento card: photo (top, flexible height) + white caption block (bottom).
     Used for: Journey to the Summit, From Seed to Cup, Rinjani Magic Hour,
     Coffee Walk, Hidden Paradise.
-->
<template>
  <div
    class="
      relative bg-white rounded-[20px] overflow-hidden h-full
      flex flex-col
      shadow-[0px_4px_20px_0px_rgba(26,58,34,0.05)]
    "
  >
    <!-- Photo -->
    <div class="flex-1 min-h-0 relative">
      <img
        :src="image"
        :alt="title"
        class="absolute inset-0 w-full h-full object-cover"
      />
    </div>

    <!-- Caption -->
    <div class="shrink-0 p-6 flex gap-4 items-start">
      <!-- Icon badge -->
      <div
        class="bg-[#efeded] rounded-full flex items-center justify-center shrink-0"
        :class="iconSize === 'sm' ? 'w-8 h-8' : 'w-10 h-10'"
      >
        <component
          :is="icon"
          class="text-forest-900"
          :class="iconSize === 'sm' ? 'w-4 h-4' : 'w-5 h-5'"
        />
      </div>

      <!-- Text -->
      <div class="flex flex-col gap-1 min-w-0">
        <h3 class="font-jakarta font-semibold text-[18px] leading-[24px] text-gray-900">
          {{ title }}
        </h3>
        <p class="font-jakarta text-[14px] leading-[1.4] text-[#424842] whitespace-pre-line">
          {{ description }}
        </p>
        <p class="font-jakarta font-medium text-[12px] leading-[16px] tracking-[0.3px] uppercase text-[#03240e]/60 pt-1.5">
          {{ location }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'

withDefaults(defineProps<{
  image: string
  icon: Component
  title: string
  description: string
  location: string
  iconSize?: 'sm' | 'md'
}>(), {
  iconSize: 'md',
})
</script>