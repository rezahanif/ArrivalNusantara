<!-- components/gallery/StatCard.vue
     Solid forest-green card with a large stat (e.g. founding year),
     title, and description. Used for "2018 / Founded in Lombok".
-->
<template>
  <div class="relative bg-forest-900 rounded-[20px] h-full p-8 flex flex-col justify-center gap-2">
    <p class="font-jakarta font-light text-[48px] leading-[48px] text-white">
      {{ stat }}
    </p>
    <h3 class="font-jakarta font-semibold text-[18px] leading-[24px] text-white">
      {{ title }}
    </h3>
    <p class="font-jakarta text-[14px] leading-[1.625] text-white/80 whitespace-pre-line">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  stat: string
  title: string
  description: string
}>()
</script>