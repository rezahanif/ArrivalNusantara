<!-- components/gallery/PromiseCard.vue
     White card with a bordered icon circle, title, description, and
     a small divider. Used for "Our Promise".
-->
<template>
  <div
    class="
      relative bg-white rounded-[20px] h-full p-8
      flex flex-col justify-center gap-3
      shadow-[0px_4px_10px_0px_rgba(26,58,34,0.05)]
    "
  >
    <!-- Icon badge -->
    <div class="w-16 h-16 rounded-full border border-[#c2c8bf] flex items-center justify-center mb-3">
      <component :is="icon" class="w-6 h-6 text-forest-900" :stroke-width="1.5" />
    </div>

    <h3 class="font-jakarta font-semibold text-[18px] leading-[24px] text-gray-900">
      {{ title }}
    </h3>
    <p class="font-jakarta text-[14px] leading-[1.625] text-[#424842] whitespace-pre-line">
      {{ description }}
    </p>

    <div class="w-8 h-px bg-[#c2c8bf] mt-3" />
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  icon: Component
  title: string
  description: string
}>()
</script>