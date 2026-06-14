<!-- Gallery masonry grid — node 554:141
     Two-column CSS grid matching Figma layout order exactly
     Includes ConnectWithUs footer section at bottom
-->
<template>
  <div class="lg:hidden px-6 flex flex-col gap-0">

    <!-- Two-column grid -->
    <div class="grid grid-cols-2 gap-3">

      <!-- Row 1: photo-caption (tall) + brand-identity (tall) -->
      <GalleryMobilePhotoCard :card="cards.journeyToSummit" />
      <GalleryMobilePhotoCard :card="cards.brandIdentity" />

      <!-- Row 2: photo-caption (medium) + [promise + stat stacked] -->
      <GalleryMobilePhotoCard :card="cards.fromSeedToCup" />
      <div class="flex flex-col gap-3">
        <GalleryMobilePhotoCard :card="cards.ourPromise" />
        <GalleryMobilePhotoCard :card="cards.stat2018" />
      </div>

      <!-- Row 3: two small photo-captions side by side -->
      <GalleryMobilePhotoCard :card="cards.rinjaniMagicHour" />
      <GalleryMobilePhotoCard :card="cards.coffeeWalk" />

      <!-- Row 4: full-width quote — col-span-2 -->
      <div class="col-span-2">
        <GalleryMobilePhotoCard :card="cards.quote" />
      </div>

      <!-- Row 5: text-then-image (left) + text-image-dark (right) -->
      <GalleryMobilePhotoCard :card="cards.hiddenParadise" />
      <GalleryMobilePhotoCard :card="cards.intoTheWild" />

      <!-- Row 6: full-width image-left -->
      <div class="col-span-2">
        <GalleryMobilePhotoCard :card="cards.localImpact" />
      </div>

      <!-- Row 7: full-width icon-card -->
      <div class="col-span-2 pb-8">
        <GalleryMobilePhotoCard :card="cards.tasteOfLombok" />
      </div>

    </div>

    <!-- Connect With Us section — node 554:283 -->
    <div class="border-t border-[#e4e2e2] py-12 flex flex-col items-center gap-2">
      <h2 class="font-jakarta font-normal text-[16px] leading-[24px] text-[#03240e] text-center">
        Connect With Us
      </h2>
      <p class="font-jakarta font-normal text-[16px] leading-[24px] text-[#424842] text-center">
        Share your journey @arrivalnusantara
      </p>
      <div class="flex items-center gap-4 pt-6">
        <!-- Instagram — filled dark -->
        <button class="bg-[#1a3a22] size-12 rounded-full flex items-center justify-center">
          <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
            <rect x="1" y="1" width="16" height="18" rx="4" stroke="white" stroke-width="1.5" fill="none"/>
            <circle cx="9" cy="10" r="3.5" stroke="white" stroke-width="1.5" fill="none"/>
            <circle cx="13.5" cy="5.5" r="1" fill="white"/>
          </svg>
        </button>
        <!-- Twitter/X — outlined -->
        <button class="border border-[#1a3a22] size-12 rounded-full flex items-center justify-center">
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
            <path d="M19 1a9.5 9.5 0 0 1-2.8.8A4.8 4.8 0 0 0 18.5.4a9.6 9.6 0 0 1-3.1 1.2A4.8 4.8 0 0 0 .9 6a13.6 13.6 0 0 1-9.9-5A4.8 4.8 0 0 0 2.5 7.6 4.8 4.8 0 0 1 .3 7v.1a4.8 4.8 0 0 0 3.8 4.7 4.8 4.8 0 0 1-2.2.1 4.8 4.8 0 0 0 4.5 3.3A9.6 9.6 0 0 1 0 16.8" stroke="#1a3a22" stroke-width="1.4" stroke-linecap="round"/>
          </svg>
        </button>
        <!-- TikTok — outlined -->
        <button class="border border-[#1a3a22] size-12 rounded-full flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M14 1a5 5 0 0 0 5 5V10a9 9 0 0 1-5-1.5V14a6 6 0 1 1-6-6v4a2 2 0 1 0 2 2V1h4Z" stroke="#1a3a22" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          </svg>
        </button>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
// Component accepts unified data source from pages/gallery/index.vue
defineProps<{
  cards: Record<string, any>
}>()
</script>