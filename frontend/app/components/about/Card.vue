<!-- components/about/Card.vue
     "Values chip" — small white card with a circular dark-green icon
     badge and a centered two-line label. Used 4x in a row:
     Rinjani Tracking, Coffee Garden, Local Guides, Sustainable Tourism.
-->
<template>
  <div
    class="
      flex flex-col items-center justify-center gap-3
      bg-white border-[3px] border-white rounded-xl
      p-[27px] h-[150px]
      shadow-[0px_4px_20px_0px_rgba(26,58,34,0.05)]
      drop-shadow-[0px_4px_2px_rgba(0,0,0,0.04)]
    "
  >
    <div class="w-12 h-12 rounded-full bg-forest-900 flex items-center justify-center shrink-0">
      <component :is="icon" class="w-5 h-5 text-white" :stroke-width="1.75" />
    </div>
    <p class="font-jakarta font-semibold text-[14px] leading-[20px] text-center text-[#03240e] whitespace-pre-line">
      {{ label }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  icon: Component
  label: string
}>()
</script>