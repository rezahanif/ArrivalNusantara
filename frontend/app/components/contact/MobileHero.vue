<!-- components/contact/MobileHero.vue
     Mobile "Header & Hero Section" — subtitle with underline accent,
     intro paragraph, and a full-width hero photo with a floating
     "We're Here for You" info pill.
     Figma node: 521-4857
-->
<template>
  <section class="lg:hidden flex flex-col gap-6 w-full">
    <!-- Subtitle + intro -->
    <div class="flex flex-col gap-2 pt-4">
      <h2 class="font-jakarta font-semibold text-[18px] leading-[24px] text-[#03240e]">
        We'd love to hear from you!
      </h2>
      <div class="w-12 h-[2px] bg-forest-900" />

      <p class="font-jakarta text-[14px] leading-[1.6] text-[#424842] max-w-[384px]">
        Have questions about our treks, coffee experiences, or custom trips? Reach
        out to us and our team will get back to you as soon as possible.
      </p>
    </div>

    <!-- Photo + floating pill -->
    <div class="relative w-full rounded-3xl overflow-hidden shadow-sm">
      <div class="h-[256px] w-full">
        <img
          v-if="heroImage"
          :src="heroImage"
          alt="Mount Rinjani at sunrise"
          class="w-full h-full object-cover"
        />
      </div>

      <div class="absolute left-4 right-4 bottom-4 flex items-center gap-4 bg-sand-50/95 backdrop-blur-sm border border-[#e4e2e2]/50 rounded-xl p-3.5 shadow-lg">
        <div class="w-12 h-12 rounded-full bg-forest-900 flex items-center justify-center shrink-0">
          <Headset class="w-5 h-5 text-white" :stroke-width="1.75" />
        </div>
        <div class="flex flex-col">
          <p class="font-jakarta font-semibold text-[14px] leading-[20px] text-[#03240e]">
            We're Here for You
          </p>
          <p class="font-jakarta text-[14px] leading-[20px] text-[#424842]">
            Respond within 24 hours
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Headset } from 'lucide-vue-next'

// Bind to a const so v-if guards against missing assets
const heroImage = '/images/lombok.webp'
</script>