<!-- components/experience/Card.vue
     Bento-style organic card: tall image + bottom white label pill.
     Slight hover scale on photo, emits 'click' for parent to open detail panel.
-->
<template>
  <div
    class="relative rounded-3xl overflow-hidden cursor-pointer shrink-0 w-[260px] h-[340px] group shadow-sm"
    @click="emit('click')"
  >
    <!-- Photo -->
    <img
      :src="experience.image"
      :alt="experience.title"
      class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
    />

    <!-- Bottom label pill -->
    <div
      class="absolute bottom-3 left-3 right-3 bg-white rounded-2xl px-4 py-3 shadow-md"
    >
      <p class="font-jakarta font-bold text-[15px] text-gray-900 leading-tight">
        {{ experience.title }}
      </p>
      <p class="font-jakarta text-[12px] text-gray-400 mt-0.5">
        {{ experience.subtitle }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Experience } from '~/types/experience'

defineProps<{
  experience: Experience
}>()

const emit = defineEmits<{
  click: []
}>()
</script>