<!-- node 522:5350 — Metrics: 2×2 grid of stat+label pairs -->
<template>
  <div class="lg:hidden mx-6 bg-white border border-[#e4e2e2] rounded-3xl p-[25px]
               drop-shadow-[0px_4px_10px_rgba(26,58,34,0.05)]">
    <div class="grid grid-cols-2 gap-x-2 gap-y-6">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="flex items-center gap-3 h-10"
      >
        <!-- Light grey icon circle -->
        <div class="size-10 rounded-full bg-[#efeded] flex items-center justify-center shrink-0">
          <component :is="stat.icon" :size="stat.iconSize ?? 16" class="text-[#03240e]" />
        </div>
        <!-- Value + label -->
        <div class="flex flex-col">
          <span class="font-jakarta font-semibold text-[18px] leading-[24px] text-[#03240e]">
            {{ stat.value }}
          </span>
          <span class="font-jakarta font-medium text-[12px] leading-[16px] text-[#424842]">
            {{ stat.label }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Mountain, MapPin, Star, Heart } from 'lucide-vue-next'

const stats = [
  { value: '500+', label: 'Happy Trekkers', icon: Mountain, iconSize: 20 },
  { value: '10+',  label: 'Destinations',   icon: MapPin,   iconSize: 18 },
  { value: '4.8',  label: 'Average Rating', icon: Star,     iconSize: 18 },
  { value: '100%', label: 'Local Support',  icon: Heart,    iconSize: 17 },
]
</script>