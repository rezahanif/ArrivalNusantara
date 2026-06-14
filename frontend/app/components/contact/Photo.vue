<!-- components/contact/Photo.vue
     Top-right hero photo (volcano landscape) with a floating
     "We're Here for You" info pill in the bottom-left corner.
-->
<template>
  <div class="relative w-full h-[280px] rounded-3xl overflow-hidden">
    <img
      v-if="heroImage"
      :src="heroImage"
      alt="Mount Rinjani at sunrise"
      class="absolute inset-0 w-full h-full object-cover"
    />

    <!-- Info pill -->
    <div class="absolute left-6 bottom-6 flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-lg max-w-[260px]">
      <div class="w-10 h-10 rounded-full bg-forest-900 flex items-center justify-center shrink-0">
        <Headset class="w-5 h-5 text-white" :stroke-width="1.75" />
      </div>
      <div class="flex flex-col">
        <p class="font-jakarta font-semibold text-[14px] leading-[20px] text-[#03240e]">
          We're Here for You
        </p>
        <p class="font-jakarta text-[12px] leading-[16px] text-[#424842]">
          Respond within 24 hours
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Headset } from 'lucide-vue-next'

const heroImage = '/images/lombok.webp'
</script>