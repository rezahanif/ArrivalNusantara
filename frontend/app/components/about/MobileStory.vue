<!-- node 522:5304 — Our Story: section label + green bar + image + 2 paragraphs -->
<template>
  <div class="lg:hidden mx-6 bg-[#f5f3f3] rounded-[32px] px-6 pt-12 pb-6
               drop-shadow-[0px_4px_10px_rgba(26,58,34,0.05)]
               flex flex-col gap-1">
    <!-- Label -->
    <h2 class="font-jakarta font-semibold text-[18px] leading-[24px] text-[#03240e]">
      Our Story
    </h2>
    <!-- Green accent bar -->
    <div class="w-12 h-1 rounded-full bg-[#1a3a22]" />

    <div class="flex flex-col gap-6 pt-5">
      <!-- Story image -->
      <div class="w-full h-48 rounded-2xl overflow-hidden shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
        <img
          src="/images/aboutleft.webp"
          alt="Crater lake at sunset"
          class="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <!-- Text -->
      <div class="flex flex-col gap-4">
        <p class="font-jakarta font-normal text-[14px] leading-[22.4px] text-[#424842]">
          Born from a passion for the mountains and our homeland, Arrival Nusantara was created to share the beauty of Rinjani Mountain and the richness of Lombok with the world.
        </p>
        <p class="font-jakarta font-normal text-[14px] leading-[22.4px] text-[#424842]">
          We believe every step brings a story worth remembering.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// no state
</script>