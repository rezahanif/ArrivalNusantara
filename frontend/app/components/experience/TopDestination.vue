<!-- components/experience/TopDestination.vue
     2-column grid of destination rows: thumbnail + name + category + star rating.
-->
<template>
  <section>
    <!-- Section header -->
    <div class="flex items-center justify-between mb-4">
      <h2 class="font-jakarta font-bold text-[24px] text-gray-900">
        Top Destinations
      </h2>
    </div>

    <!-- 2-column grid -->
    <div class="grid grid-cols-2 gap-2">
      <div
        v-for="dest in destinations"
        :key="dest.id"
        class="flex items-center gap-3 p-3 rounded-2xl hover:bg-white transition-colors duration-200 cursor-pointer"
      >
        <!-- Thumbnail -->
        <img
          :src="dest.image"
          :alt="dest.name"
          class="w-[72px] h-[72px] rounded-xl object-cover shrink-0"
        />

        <!-- Info -->
        <div class="min-w-0">
          <p class="font-jakarta font-semibold text-[14px] text-gray-900 truncate">
            {{ dest.name }}
          </p>
          <p class="font-jakarta text-[12px] text-gray-400 mt-0.5 truncate">
            {{ dest.type }}
          </p>
          <div class="flex items-center gap-1 mt-1.5">
            <Star class="w-3.5 h-3.5 fill-amber-400 text-amber-400 shrink-0" />
            <span class="font-jakarta text-[12px] text-gray-600 font-medium">
              {{ dest.rating }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MoreHorizontal, Star } from 'lucide-vue-next'
import type { Destination } from '~/types/experience'

defineProps<{
  destinations: Destination[]
}>()
</script>