<!-- components/shared/Sidebar.vue
     Desktop sidebar navigation — used by Experience, Gallery, About, Contact.
     Left column: forest-green, full-height, with background photo overlay.
     Auto-imported as <SharedSidebar /> by the `sidebar` layout.
-->
<template>
  <aside
    class="relative w-[280px] h-screen shrink-0 flex flex-col overflow-hidden bg-forest-900 bg-cover bg-center"
    style="background-image: url('/images/hero-bg.webp')"
  >

    <div v-if="!isMobile" class="absolute top-0 -left-[42vw] w-screen h-screen pointer-events-none select-none">
      <video
        src="/video/hero-bg.mp4"
        autoplay
        loop
        muted
        playsinline
        poster="/images/hero-bg.webp"
        class="w-full h-full object-cover transform scale-110 opacity-100" 
      ></video>
      <div class="absolute inset-0 bg-black/20" />
    </div>

    <!-- Sidebar content -->
    <div class="relative z-10 flex flex-col h-full px-6 py-8">

      <!-- Logo -->
      <div class="flex justify-center mb-8">
        <img 
          src="/images/logo-white.webp"
          alt="Arrival Nusantara"
          class="h-[195.5px] w-[170.26px] object-contain"
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
      <!-- Get in Touch — pushed to bottom -->
      <div class="mt-auto pt-6">
        <SharedGetInTouch />
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Compass, Images, Globe, Phone } from 'lucide-vue-next'

const route = useRoute()

const isMobile = ref(true)

onMounted(() => {
  isMobile.value = window.innerWidth < 1024
  const checkMobile = () => {
    isMobile.value = window.innerWidth < 1024
  }
  window.addEventListener('resize', checkMobile)
  onUnmounted(() => {
    window.removeEventListener('resize', checkMobile)
  })
})

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