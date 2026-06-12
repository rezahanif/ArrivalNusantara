<!-- components/about/TitleDescription.vue
     Hero headline: "Connecting Nature, People, and Adventure."
     with a hand-drawn mountain doodle and underline accent on
     "Adventure", plus two paragraphs of intro copy.
-->
<template>
  <div class="flex flex-col gap-2 max-w-[672px]">
    <!-- Headline -->
    <h2 class="font-jakarta font-bold text-[44px] leading-[1.1] tracking-[-0.64px] text-[#03240e]">
      Connecting Nature,
      <br />
      People, and
      <span class="relative inline-block">
        Adventure.
        <!-- Underline accent -->
        <svg
          class="absolute left-0 -bottom-1.5 w-full h-2 text-forest-700"
          viewBox="0 0 232 13"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M2 9.5C40 3 120 1 230 6"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      </span>
      <!-- Mountain doodle accent -->
      <Mountain
        class="hidden lg:inline-block w-[120px] h-[40px] text-forest-700/70 align-middle ml-2 -mt-6"
        :stroke-width="1.25"
      />
    </h2>

    <!-- Intro paragraphs -->
    <div class="flex flex-col gap-3 pt-2 font-jakarta text-[14px] leading-[1.6] text-[#424842]">
      <p>
        We are a local tracking organizer based in Lombok, Indonesia, specializing in
        unforgettable adventures on Mount Rinjani and experiences that go beyond the trail.
      </p>
      <p>
        From challenging treks to peaceful coffee gardens, we create meaningful journeys
        that connect you with nature, culture, and local communities.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Mountain } from 'lucide-vue-next'
</script>