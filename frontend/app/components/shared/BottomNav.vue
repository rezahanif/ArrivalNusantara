<!-- components/shared/BottomNav.vue
     Mobile bottom tab bar — shown only below the `lg` breakpoint,
     fixed to the bottom of the viewport.
     Figma node: 507:3015 ("BottomNavBar for Mobile")
-->
<template>
  <nav
    class="
      lg:hidden fixed bottom-0 inset-x-0 z-30
      flex items-center justify-around
      bg-[#fbf9f8] rounded-tl-[12px] rounded-tr-[12px]
      px-[10px]
      drop-shadow-[0px_-4px_10px_rgba(26,58,34,0.05)]
    "
    style="padding-bottom: calc(12px + env(safe-area-inset-bottom)); padding-top: 12px;"
  >
    <NuxtLink
      v-for="item in navItems"
      :key="item.to"
      :to="item.to"
      class="flex flex-col items-center justify-center flex-1 py-1"
    >
      <component
      :is="item.icon"
      class="size-5"
      :class="isActive(item.to) ? 'text-[#03240e]' : 'text-[rgba(66,72,66,0.8)]'"
      :stroke-width="isActive(item.to) ? 2.5 : 1.8"
      fill="none" 
    />
      <span
        class="pt-1 leading-[16px] font-jakarta whitespace-nowrap"
        :class="isActive(item.to)
          ? 'text-[14px] font-semibold text-[#03240e]'
          : 'text-[12px] font-medium text-[rgba(66,72,66,0.8)]'"
      >
        {{ item.label }}
      </span>
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
import { Compass, Image, Globe, Phone } from 'lucide-vue-next'

const route = useRoute()

const navItems = [
  { label: 'Explore', to: '/experience', icon: Compass },
  { label: 'Gallery', to: '/gallery',    icon: Image   },
  { label: 'About',   to: '/about',      icon: Globe   },
  { label: 'Contact', to: '/contact',    icon: Phone   },
]

function isActive(path: string): boolean {
  return route.path.startsWith(path)
}
</script>