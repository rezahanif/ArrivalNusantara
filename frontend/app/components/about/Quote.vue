<!-- components/about/Quote.vue
     Italic testimonial quote with a large quote-mark icon to the left.
-->
<template>
  <div class="flex items-center gap-4 h-full pl-2">
    <Quote class="w-8 h-8 text-[#c2c8bf] shrink-0 -scale-x-100" :stroke-width="1.5" fill="currentColor" />
    <p class="font-jakarta italic text-[14px] leading-[1.6] text-[#424842]">
      "The mountain teaches us patience, the coffee brings us together. And the
      journey changes us forever."
    </p>
  </div>
</template>

<script setup lang="ts">
import { Quote } from 'lucide-vue-next'
</script>