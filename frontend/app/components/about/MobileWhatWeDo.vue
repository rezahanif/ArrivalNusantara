<!-- node 522:5315 — What We Do: 3 icon+title+desc rows -->
<template>
  <div class="lg:hidden mx-6 bg-[#f5f3f3] rounded-[32px] px-6 py-10
               drop-shadow-[0px_4px_10px_rgba(26,58,34,0.05)]
               flex flex-col gap-1">
    <!-- Label -->
    <h2 class="font-jakarta font-semibold text-[18px] leading-[24px] text-[#03240e]">
      What We Do
    </h2>
    <!-- Green accent bar -->
    <div class="w-12 h-1 rounded-full bg-[#1a3a22]" />

    <div class="flex flex-col gap-6 pt-5">
      <div
        v-for="item in items"
        :key="item.title"
        class="flex gap-4 items-start"
      >
        <!-- Dark green circle icon -->
        <div class="size-14 rounded-full bg-[#1a3a22] flex items-center justify-center shrink-0
                     shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]">
          <component :is="item.icon" :size="item.iconSize ?? 20" class="text-white" />
        </div>
        <!-- Text -->
        <div class="flex flex-col gap-1">
          <h3 class="font-jakarta font-semibold text-[14px] leading-[20px] text-[#03240e]">
            {{ item.title }}
          </h3>
          <p class="font-jakarta font-normal text-[14px] leading-[20px] text-[#424842]">
            {{ item.desc }}
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
    iconSize: 22,
    title: 'Rinjani Mountain Tracking',
    desc: 'Guided treks to the summit, crater lake, and hidden gems around Rinjani.',
  },
  {
    icon: Coffee,
    iconSize: 20,
    title: 'Coffee Garden Experience',
    desc: 'Discover local coffee plantations and enjoy authentic Lombok coffee.',
  },
  {
    icon: Sparkles,
    iconSize: 20,
    title: 'Authentic Experiences',
    desc: 'Culture, nature, and warm hospitality from local communities.',
  },
]
</script>