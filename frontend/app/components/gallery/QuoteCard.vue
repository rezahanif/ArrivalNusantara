<!-- components/gallery/QuoteCard.vue
     Light card with a large serif quote mark, an italic-accented
     quote, a divider, and an attribution label.
-->
<template>
  <div class="relative bg-[#f5f3f3] rounded-[20px] h-full p-8 flex flex-col justify-center">
    <!-- Quote mark -->
    <p class="font-serif text-[48px] leading-[48px] text-[#03240e] mb-4">
      &ldquo;
    </p>

    <!-- Quote text -->
    <p class="font-jakarta text-[22px] leading-[1.375] text-gray-900 mb-8">
      We don't just organize trips.
      We create <em class="font-serif italic">connections</em>
      that last a lifetime.
    </p>

    <div class="w-8 h-px bg-[#c2c8bf] mb-4" />

    <p class="font-jakarta font-medium text-[12px] leading-[16px] tracking-[0.3px] uppercase text-[#424842]">
      Arrival Nusantara
    </p>
  </div>
</template>