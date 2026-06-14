<!-- components/gallery/Fab.vue
     Floating action button — fixed to bottom-right of the viewport.
     Mobile: bottom-[96px] (above BottomNav, Figma node 554:125)
     Desktop: bottom-8 (standard position)
-->
<template>
  <button
    type="button"
    aria-label="Add photo"
    class="
      fixed right-6 z-30
      bottom-[96px] lg:bottom-8
      w-14 h-14 rounded-full
      bg-forest-900 text-white
      flex items-center justify-center
      shadow-lg hover:shadow-xl
      hover:bg-forest-800 active:scale-95
      transition-all duration-200
    "
  >
    <Plus class="w-5 h-5" :stroke-width="2.5" />
  </button>
</template>

<script setup lang="ts">
import { Plus } from 'lucide-vue-next'
</script>