<!-- components/shared/SidebarNav.vue
     Desktop sidebar navigation — used by Experience, Gallery, About, Contact.
     Left column: forest-green, full-height, with background photo overlay.
-->
<template>
  <aside class="relative w-[280px] shrink-0 flex flex-col overflow-hidden bg-forest-900">

    <!-- Background photo (same as hero) -->
    <div class="absolute inset-0 pointer-events-none select-none">
      <img
        src="/images/hero-bg.webp"
        alt=""
        aria-hidden="true"
        class="w-full h-full object-cover opacity-50"
      />
      <div class="absolute inset-0 bg-forest-900/60" />
    </div>

    <!-- Sidebar content -->
    <div class="relative z-10 flex flex-col h-full px-6 py-8">

      <!-- Logo -->
      <div class="flex justify-center mb-12">
        <img
          src="/images/logo.webp"
          alt="Arrival Nusantara"
          class="h-[101px] w-[87px] object-contain"
        />
      </div>

      <!-- Navigation -->
      <nav class="flex flex-col gap-1">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="flex items-center gap-3 px-4 py-3 rounded-2xl transition-colors duration-200 group"
          :class="[
            isActive(item.to)
              ? 'bg-white/15 text-white'
              : 'text-white/60 hover:bg-white/10 hover:text-white/90'
          ]"
        >
          <component
            :is="item.icon"
            class="w-5 h-5 shrink-0"
            :stroke-width="isActive(item.to) ? 2.2 : 1.8"
          />
          <span class="font-jakarta font-medium text-[15px] tracking-wide">
            {{ item.label }}
          </span>
        </NuxtLink>
      </nav>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { Compass, Images, Globe, Phone } from 'lucide-vue-next'

const route = useRoute()

const navItems = [
  { label: 'Experience', to: '/experience', icon: Compass },
  { label: 'Gallery',    to: '/gallery',    icon: Images  },
  { label: 'About',      to: '/about',      icon: Globe   },
  { label: 'Contact',    to: '/contact',    icon: Phone   },
]

function isActive(path: string): boolean {
  return route.path.startsWith(path)
}
</script>