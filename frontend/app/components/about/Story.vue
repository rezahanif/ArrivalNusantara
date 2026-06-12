<!-- components/about/Story.vue
     "Our Story" section: square photo on the left, title + copy
     on the right.
-->
<template>
  <div class="flex gap-6 items-center w-full">
    <!-- Photo -->
    <div class="flex-1 min-w-0 h-[256px] rounded-3xl overflow-hidden shrink-0">
      <img
        src="/images/about/our-story.jpg"
        alt="Sunrise over Rinjani crater lake"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Text -->
    <div class="flex-1 min-w-0 flex flex-col gap-3">
      <h3 class="font-jakarta font-semibold text-[18px] leading-[24px] text-[#03240e]">
        Our Story
      </h3>
      <p class="font-jakarta text-[14px] leading-[1.6] text-[#424842]">
        Born from a passion for the mountains and our homeland, Arrival Nusantara was
        created to share the beauty of Rinjani Mountain and the richness of Lombok
        with the world.
      </p>
      <p class="font-jakarta text-[14px] leading-[1.6] text-[#424842]">
        We believe every step brings a story worth remembering.
      </p>
    </div>
  </div>
</template>