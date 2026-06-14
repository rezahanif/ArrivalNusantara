<!-- Featured Destinations horizontal scroll cards — node 478:1069 -->
<template>
  <div class="flex flex-col gap-4 px-6">
    <!-- Section header -->
    <div class="flex items-center justify-between">
      <h2 class="font-jakarta font-semibold text-[18px] leading-[24px] text-[#03240e]">
        Featured Destinations
      </h2>
    </div>

    <!-- Horizontal scroll strip with hard margins via parent px-6 -->
    <div class="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
      <article
        v-for="exp in props.experiences"
        :key="exp.id"
        class="snap-start shrink-0 w-[312px] bg-white rounded-2xl overflow-hidden
               shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]
               flex flex-col cursor-pointer active:scale-[0.98] transition-transform"
        @click="$emit('select', exp)"
      >
        <!-- Image — 192px tall -->
        <div class="relative h-[192px] w-full overflow-hidden">
          <img
            :src="exp.image"
            :alt="exp.title"
            class="w-full h-full object-cover"
            loading="lazy"
          />
          <!-- Wishlist button — top right -->
          <button
            class="absolute top-4 right-4 size-8 rounded-full flex items-center justify-center
                   bg-[rgba(251,249,248,0.8)] backdrop-blur-[4px] active:scale-95 transition-transform"
            @click.stop="toggleWishlist(exp.id)"
          >
            <svg width="12" height="11" viewBox="0 0 12 11" fill="none">
              <path
                d="M6 10.5S1 7 1 3.5A2.5 2.5 0 0 1 6 2.27 2.5 2.5 0 0 1 11 3.5C11 7 6 10.5 6 10.5Z"
                :stroke="isWishlisted(exp.id) ? '#ef4444' : '#03240e'"
                :fill="isWishlisted(exp.id) ? '#ef4444' : 'none'"
                stroke-width="1.2"
              />
            </svg>
          </button>

          <!-- Bottom label pill -->
          <div class="absolute bottom-3 left-3 right-3 bg-white rounded-2xl px-4 py-3 shadow-md">
            <p class="font-jakarta font-bold text-[15px] text-gray-900 leading-tight">
              {{ exp.title }}
            </p>
            <p class="font-jakarta text-[12px] text-gray-400 mt-0.5">
              {{ exp.subtitle }}
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Experience } from '~/types/experience'

const props = defineProps<{ experiences: Experience[] }>()
defineEmits<{ 'see-all': []; select: [exp: Experience] }>()

const { isWishlisted, toggleWishlist } = useWishlist()
</script>