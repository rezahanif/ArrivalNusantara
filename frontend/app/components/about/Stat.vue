<!-- components/about/Stat.vue
     Small stat card: icon + bold value + label.
     Used 4x: Happy Trekkers, Destinations, Average Rating, Local Support.
-->
<template>
  <div class="flex items-center gap-3 bg-white border border-[#e4e2e2] rounded-xl p-[17px] h-[98px]">
    <component :is="icon" class="w-6 h-6 text-forest-900 shrink-0" :stroke-width="1.5" />
    <div class="flex flex-col">
      <p class="font-jakarta font-semibold text-[24px] leading-[32px] text-[#03240e]">
        {{ value }}
      </p>
      <p class="font-jakarta font-medium text-[12px] leading-[16px] text-[#424842] whitespace-pre-line">
        {{ label }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  icon: Component
  value: string
  label: string
}>()
</script>