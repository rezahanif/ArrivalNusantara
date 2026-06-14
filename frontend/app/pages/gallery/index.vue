<!-- pages/gallery/index.vue
     Gallery page — sidebar layout (desktop) / bottom-nav layout (mobile).

     Desktop (lg+):
       GalleryHeader → 9-card bento grid (3-col, dense auto-rows) + GalleryFab.

     Mobile (< lg):
       GalleryMobileHeader → GalleryMobilePhotoPlacement (2-col masonry + connect section)
       GalleryFab floats above BottomNav at bottom-[96px].
-->
<template>
  <!-- ── Mobile layout (< lg) ──────────────────────────────────────── -->
  <main class="lg:hidden flex-1 overflow-y-auto scrollbar-none min-w-0 pb-24 bg-[#fbf9f8] relative">
    <GalleryMobileHeader />
    <GalleryMobilePhotoPlacement :cards="cardsData" />
    <!-- FAB renders itself with bottom-[96px] on mobile -->
  </main>

  <!-- ── Desktop layout (lg+) ──────────────────────────────────────── -->
  <main class="hidden lg:block flex-1 overflow-y-auto scrollbar-none px-6 min-w-0 relative">
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
        image="/images/walk.webp"
        :icon="cardsData.journeyToSummit.icon!"
        :title="cardsData.journeyToSummit.title!"
        :description="cardsData.journeyToSummit.body!"
        :location="cardsData.journeyToSummit.location!"
      />

      <!-- 2. Nature. People. Purpose. (tall hero) -->
      <GalleryHeroQuoteCard
        class="row-span-6"
        image="/images/lombok.webp"
        :heading="cardsData.brandIdentity.heading!"
        :description="cardsData.brandIdentity.body!"
      />

      <!-- 3. From Seed to Cup -->
      <GalleryPhotoCard
        class="row-span-5"
        image="/images/aboutrightsquare.webp"
        :icon="cardsData.fromSeedToCup.icon!"
        :title="cardsData.fromSeedToCup.title!"
        :description="cardsData.fromSeedToCup.body!"
        :location="cardsData.fromSeedToCup.location!"
      />

      <!-- 4. Our Promise -->
      <GalleryPromiseCard
        class="row-span-3"
        :icon="cardsData.ourPromise.icon!"
        :title="cardsData.ourPromise.title!"
        :description="cardsData.ourPromise.body!"
      />

      <!-- 5. 2018 / Founded in Lombok -->
      <GalleryStatCard
        class="row-span-3"
        :stat="cardsData.stat2018.stat!"
        :title="cardsData.stat2018.title!"
        :description="cardsData.stat2018.body!"
      />

      <!-- 6. Rinjani Magic Hour (wide, spans 2 cols) -->
      <GalleryPhotoCard
        class="row-span-5 col-span-2"
        image="/images/mountain.webp"
        :icon="cardsData.rinjaniMagicHour.icon!"
        :title="cardsData.rinjaniMagicHour.title!"
        :description="cardsData.rinjaniMagicHour.body!"
        :location="cardsData.rinjaniMagicHour.location!"
      />

      <!-- 7. Coffee Walk -->
      <GalleryPhotoCard
        class="row-span-5"
        :image="cardsData.coffeeWalk.image!"
        :icon="cardsData.coffeeWalk.icon!"
        icon-size="sm"
        :title="cardsData.coffeeWalk.title!"
        :description="cardsData.coffeeWalk.body!"
        :location="cardsData.coffeeWalk.location!"
      />

      <!-- 8. Quote block -->
      <GalleryQuoteCard class="row-span-4" />

      <!-- 9. Hidden Paradise -->
      <GalleryPhotoCard
        class="row-span-5"
        :image="cardsData.hiddenParadise.image!"
        :icon="cardsData.hiddenParadise.icon!"
        :title="cardsData.hiddenParadise.title!"
        :description="cardsData.hiddenParadise.body!"
        :location="cardsData.hiddenParadise.location!"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import { Mountain, Leaf, Sprout, Sunrise, Footprints, Waves, Coffee } from 'lucide-vue-next'

definePageMeta({ layout: 'sidebar' })

// Unified data source for both desktop Bento Grid and mobile Masonry Grid.
const cardsData = {
  journeyToSummit: {
    type: 'photo-caption',
    image: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=400&q=75',
    imageHeight: '192px',
    icon: Mountain,
    iconSize: '20px',
    iconPx: 10,
    title: 'Journey to the Summit',
    titleSize: 'text-[18px] leading-[24px]',
    body: 'Every step brings us closer to\nsomething greater.',
    bodySize: 'text-[16px] leading-[24px]',
    location: 'Rinjani Mountain, Lombok',
    locationSize: 'text-[11px] leading-[16.5px] tracking-[0.275px]',
  },
  brandIdentity: {
    type: 'brand-identity',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=75', // Desktop hero image
    heading: 'Nature. People.\nPurpose.',
    body: 'We connect adventurers with nature\nthrough meaningful experiences,\nlocal partnerships, and a deep\nrespect for the land we explore.',
  },
  fromSeedToCup: {
    type: 'photo-caption',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&q=75',
    imageHeight: '160px',
    icon: Leaf,
    iconSize: '19px',
    iconPx: 10,
    title: 'From Seed to Cup',
    titleSize: 'text-[16px] leading-[24px]',
    body: 'Sourced locally, roasted\nmindfully, enjoyed deeply.',
    bodySize: 'text-[12px] leading-[16.5px]',
    location: 'Sembalun Coffee Garden',
    locationSize: 'text-[10px] leading-[15px]',
  },
  ourPromise: {
    type: 'promise',
    icon: Sprout,
    title: 'Our Promise',
    body: 'Sustainable adventures that\nempower local communities and\nprotect the nature we love.',
  },
  stat2018: {
    type: 'stat',
    stat: '2018',
    title: 'Founded in Lombok',
    body: 'Built with passion,\nguided by nature.',
  },
  rinjaniMagicHour: {
    type: 'photo-caption',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=75',
    imageHeight: '144px',
    icon: Sunrise,
    iconSize: '13px',
    iconPx: 8,
    title: 'Rinjani Magic Hour',
    titleSize: 'text-[13px] leading-[19.5px]',
    body: 'When the sun paints the sky, the mountain\nstands in silence.',
    bodySize: 'text-[11px] leading-[13.75px]',
    italic: true,
    location: 'Rinjani Mountain, Lombok',
    locationSize: 'text-[10px] leading-[15px]',
  },
  coffeeWalk: {
    type: 'photo-caption',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&q=75',
    imageHeight: '144px',
    icon: Footprints,
    iconSize: '13px',
    iconPx: 8,
    title: 'Coffee Walk',
    titleSize: 'text-[13px] leading-[19.5px]',
    body: 'Walking among the\nbeans, learning\nfrom the land.',
    bodySize: 'text-[11px] leading-[13.75px]',
    location: 'Sembalun, Lombok',
    locationSize: 'text-[10px] leading-[15px]',
  },
  quote: {
    type: 'quote',
  },
  hiddenParadise: {
    type: 'text-then-image',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&q=75',
    icon: Waves,
    iconSize: '13px',
    iconPx: 8,
    title: 'Hidden Paradise',
    titleSize: 'text-[16px] leading-[24px]',
    body: 'Beyond the trail, beauty always\nfinds a way.',
    bodySize: 'text-[11px] leading-[16.5px]',
    location: 'Gili Islands, Lombok',
    locationSize: 'text-[10px] leading-[15px]',
  },
  intoTheWild: {
    type: 'text-image-dark',
    title: 'Into the Wild',
    body: 'Disconnect to reconnect. The wild reminds us who we are.',
    location: 'Rinjani National Park',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&q=75',
  },
  localImpact: {
    type: 'image-left',
    title: 'Local Impact',
    body: 'We work hand in hand with local guides, farmers, and communities to create real impact.',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=300&q=75',
  },
  tasteOfLombok: {
    type: 'icon-card',
    title: 'Taste of Lombok',
    body: 'Every cup tells a story of the soil, the people, and the passion.',
    location: 'Sembalun Coffee',
    icon: Coffee,
  },
}
</script>