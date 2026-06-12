<!-- components/about/Whatwedo.vue
     "What We Do" card — light gray panel with 3 service items,
     each with a dark circular icon badge, title, and description.
-->
<template>
  <div class="flex flex-col gap-6 bg-[#efeded] rounded-3xl p-8 drop-shadow-[0px_4px_10px_rgba(26,58,34,0.05)]">
    <h3 class="font-jakarta font-semibold text-[18px] leading-[24px] text-[#03240e]">
      What We Do
    </h3>

    <div class="flex flex-col gap-6">
      <div
        v-for="item in items"
        :key="item.title"
        class="flex gap-4 items-start"
      >
        <div class="w-12 h-12 rounded-full bg-[#03240e] flex items-center justify-center shrink-0">
          <component :is="item.icon" class="w-5 h-5 text-white" :stroke-width="1.75" />
        </div>
        <div class="flex flex-col gap-1">
          <h4 class="font-jakarta font-semibold text-[14px] leading-[20px] text-[#03240e]">
            {{ item.title }}
          </h4>
          <p class="font-jakarta text-[14px] leading-[20px] text-[#424842] whitespace-pre-line">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Mountain, Coffee, Sparkles } from 'lucide-vue-next'

const items = [
  {
    icon: Mountain,
    title: 'Rinjani Mountain Tracking',
    description: 'Guided treks to the summit, crater lake,\nand hidden gems around Rinjani.',
  },
  {
    icon: Coffee,
    title: 'Coffee Garden Experience',
    description: 'Discover local coffee plantations and\nenjoy authentic Lombok coffee.',
  },
  {
    icon: Sparkles,
    title: 'Authentic Experiences',
    description: 'Culture, nature, and warm hospitality\nfrom local communities.',
  },
]
</script>