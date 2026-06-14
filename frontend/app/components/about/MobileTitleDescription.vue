<!-- Reusable section header used by Story + Whatwedo internally,
     but also exported as a standalone for desktop parity.
     Props: title, description (optional) -->
<template>
  <div class="flex flex-col gap-1">
    <h2 class="font-jakarta font-semibold text-[18px] leading-[24px] text-[#03240e]">
      {{ title }}
    </h2>
    <div class="w-12 h-1 rounded-full bg-[#1a3a22]" />
    <p v-if="description" class="font-jakarta font-normal text-[14px] leading-[22.4px] text-[#424842] pt-2">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description?: string
}>()
</script>