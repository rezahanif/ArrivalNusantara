<!-- components/about/MobileHeader.vue
     node 522:5260 — "About Us" title + subtitle + description
     + hero image with floating thumbnails overlapping bottom-left corner.
-->
<template>
  <div class="lg:hidden flex flex-col gap-6 px-6 pt-6 pb-8">
    <!-- Page title -->
    <h1 class="font-jakarta font-bold text-[32px] leading-[40px] tracking-[-0.64px] text-[#03240e]">
      About Us
    </h1>

    <div class="flex flex-col gap-6">
      <!-- Subtitle + body -->
      <div class="flex flex-col gap-2">
        <h2 class="font-jakarta font-semibold text-[18px] leading-[27px] tracking-[0.5px] text-[#03240e]">
          Connecting Nature, People, and
          <!-- "Adventure." wrapped in a span so the underline SVG tracks the word -->
          <span class="relative inline-block">
            Adventure.
            <svg
              class="absolute left-0 bottom-[-4px] w-full"
              height="8" viewBox="0 0 100 8" preserveAspectRatio="none" fill="none"
            >
              <path d="M0 6 Q50 1 100 6" stroke="#1a3a22" stroke-width="2" stroke-linecap="round" fill="none"/>
            </svg>
          </span>
        </h2>
        <p class="font-jakarta font-normal text-[14px] leading-[22.4px] text-[#424842] pt-2 max-w-[280px]">
          We are a local tracking organizer based in Lombok, Indonesia, specializing in
          unforgettable adventures on Mount Rinjani and experiences that go beyond the trail.
        </p>
      </div>

      <!-- Hero image block — node 522:5274
           Floating thumbnails overlap the bottom-left corner of the hero image -->
      <div class="relative">
        <!-- Main hero image -->
        <div class="h-[288px] rounded-[32px] overflow-hidden shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
          <img
            src="/images/aboutrightmain.webp"
            alt="Hiker looking at mountain"
            class="w-full h-full object-cover"
            loading="eager"
          />
        </div>

        <!-- Floating thumbnails — node 522:5275
             Overlap the bottom-left of the hero image -->
        <div class="absolute bottom-[-24px] left-[-16px] flex flex-col gap-3 z-10">
          <div
            class="size-20 rounded-2xl overflow-hidden border-4 border-[#fbf9f8]
                   shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]"
          >
            <img
              src="/images/aboutrightrectangel.webp"
              alt="Coffee cherries"
              class="w-full h-full object-cover"
            />
          </div>
          <div
            class="size-20 rounded-2xl overflow-hidden border-4 border-[#fbf9f8]
                   shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]"
          >
            <img
              src="/images/aboutrightsquare.webp"
              alt="Local coffee experience"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <!-- Spacer to clear the overhanging thumbnails -->
      <div class="h-[48px]" />
    </div>
  </div>
</template>

<script setup lang="ts">
// no state
</script>