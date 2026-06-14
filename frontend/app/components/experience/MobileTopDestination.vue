<!-- Top Destinations list — node 478:1104 -->
<template>
  <div class="flex flex-col gap-4 px-6">
    <h2 class="font-jakarta font-semibold text-[18px] leading-[24px] text-[#03240e]">
      Top Destinations
    </h2>

    <div class="flex flex-col gap-3">
      <article
        v-for="dest in destinations"
        :key="dest.id"
        class="flex gap-4 items-center bg-white p-3 rounded-xl
               drop-shadow-[0px_4px_10px_rgba(26,58,34,0.05)]
               cursor-pointer active:scale-[0.98] transition-transform"
        @click="$emit('select', dest)"
      >
        <!-- Thumb -->
        <div class="size-[80px] rounded-lg overflow-hidden shrink-0">
          <img
            :src="dest.image"
            :alt="dest.name"
            class="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <!-- Info -->
        <div class="flex flex-col gap-1 flex-1 min-w-0">
          <h3 class="font-jakarta font-semibold text-[14px] leading-[20px] truncate text-[#03240e]">
            {{ dest.name }}
          </h3>
          <p class="font-jakarta font-normal text-[14px] leading-[20px] text-[#424842] truncate">
            {{ dest.type }}
          </p>
          <!-- Rating -->
          <div class="flex items-center gap-1 mt-1.5">
            <Star class="w-3.5 h-3.5 fill-amber-400 text-amber-400 shrink-0" />
            <span class="font-jakarta text-[12px] text-gray-600 font-medium">
              {{ dest.rating }}
            </span>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Star } from 'lucide-vue-next'
import type { Destination } from '~/types/experience'

defineProps<{
  destinations: Destination[]
}>()

defineEmits<{ select: [dest: Destination] }>()
</script>