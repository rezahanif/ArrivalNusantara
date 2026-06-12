<!-- pages/gallery/index.vue
     Gallery page — 9-card bento grid.
     Figma node: 495-1450
     
     Layout: 3-column CSS grid with dense auto-placement. Each card
     gets a row-span (in 100px auto-row units) approximating its
     proportions in the design. Dense packing fills gaps automatically.
-->
<template>
  <main class="flex-1 overflow-y-auto scrollbar-none px-6 min-w-0 relative">
    <GalleryHeader />

    <div
      class="
        grid grid-cols-3 gap-4 pb-12
        auto-rows-[100px]
        [grid-auto-flow:dense]
      "
    >
      <!-- 1. Journey to the Summit (tall) -->
      <GalleryPhotoCard
        class="row-span-6"
        image="/images/gallery/summit.jpg"
        :icon="Mountain"
        title="Journey to the Summit"
        description="Every step brings us closer to&#10;something greater."
        location="Rinjani Mountain, Lombok"
      />

      <!-- 2. Nature. People. Purpose. (tall hero) -->
      <GalleryHeroQuoteCard
        class="row-span-6"
        image="/images/gallery/purpose.jpg"
        heading="Nature. People.&#10;Purpose."
        description="We connect adventurers with nature&#10;through meaningful experiences,&#10;local partnerships, and a deep&#10;respect for the land we explore."
      />

      <!-- 3. From Seed to Cup -->
      <GalleryPhotoCard
        class="row-span-5"
        image="/images/gallery/seed-to-cup.jpg"
        :icon="Leaf"
        title="From Seed to Cup"
        description="Sourced locally, roasted&#10;mindfully, enjoyed deeply."
        location="Sembalun Coffee Garden"
      />

      <!-- 4. Our Promise -->
      <GalleryPromiseCard
        class="row-span-3"
        :icon="Sprout"
        title="Our Promise"
        description="Sustainable adventures that&#10;empower local communities and&#10;protect the nature we love."
      />

      <!-- 5. 2018 / Founded in Lombok -->
      <GalleryStatCard
        class="row-span-3"
        stat="2018"
        title="Founded in Lombok"
        description="Built with passion,&#10;guided by nature."
      />

      <!-- 6. Rinjani Magic Hour (wide, spans 2 cols) -->
      <GalleryPhotoCard
        class="row-span-5 col-span-2"
        image="/images/gallery/magic-hour.jpg"
        :icon="Sunrise"
        title="Rinjani Magic Hour"
        description="When the sun paints the sky, the mountain&#10;stands in silence."
        location="Rinjani Mountain, Lombok"
      />

      <!-- 7. Coffee Walk -->
      <GalleryPhotoCard
        class="row-span-5"
        image="/images/gallery/coffee-walk.jpg"
        :icon="Footprints"
        icon-size="sm"
        title="Coffee Walk"
        description="Walking among the&#10;beans, learning&#10;from the land."
        location="Sembalun, Lombok"
      />

      <!-- 8. Quote block -->
      <GalleryQuoteCard class="row-span-4" />

      <!-- 9. Hidden Paradise -->
      <GalleryPhotoCard
        class="row-span-5"
        image="/images/gallery/hidden-paradise.jpg"
        :icon="Waves"
        title="Hidden Paradise"
        description="Beyond the trail, beauty always&#10;finds a way."
        location="Gili Islands, Lombok"
      />
    </div>

    <GalleryFab />
  </main>
</template>

<script setup lang="ts">
import { Mountain, Leaf, Sprout, Sunrise, Footprints, Waves } from 'lucide-vue-next'

definePageMeta({ layout: 'sidebar' })
</script>