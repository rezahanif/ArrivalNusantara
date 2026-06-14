<!-- node 522:5278 — Core Services 4-icon grid: Rinjani Tracking, Coffee Garden, Local Guides, Sustainable Tourism -->
<template>
  <div class="lg:hidden mx-6 bg-white border border-[#e4e2e2] rounded-3xl p-[25px]
               drop-shadow-[0px_4px_10px_rgba(26,58,34,0.05)]">
    <div class="grid grid-cols-4 gap-2">
      <div
        v-for="(service, i) in services"
        :key="service.label"
        class="flex flex-col items-center gap-2"
        :class="i > 0 ? 'border-l border-[#e4e2e2] pl-px' : ''"
      >
        <!-- Dark circle icon -->
        <div class="size-12 rounded-full bg-[#03240e] flex items-center justify-center shrink-0">
          <component :is="service.icon" :size="service.iconSize ?? 18" class="text-white" />
        </div>
        <!-- Label -->
        <p class="font-jakarta font-medium text-[12px] leading-[16px] text-[#424842] text-center whitespace-nowrap">
          {{ service.line1 }}<br />{{ service.line2 }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Mountain, Coffee, Users, Leaf } from 'lucide-vue-next'

const services = [
  { label: 'Rinjani Tracking', line1: 'Rinjani', line2: 'Tracking', icon: Mountain, iconSize: 22 },
  { label: 'Coffee Garden', line1: 'Coffee', line2: 'Garden', icon: Coffee, iconSize: 18 },
  { label: 'Local Guides', line1: 'Local', line2: 'Guides', icon: Users, iconSize: 17 },
  { label: 'Sustainable Tourism', line1: 'Sustainable', line2: 'Tourism', icon: Leaf, iconSize: 17 },
]
</script>