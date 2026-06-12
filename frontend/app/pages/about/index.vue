<!-- pages/about/index.vue
     About Us page.
     Figma node: 516-3506

     Layout:
     ┌─────────────────────────────┬──────────────────────┐
     │ Hero headline + intro copy   │  Image bento cluster │
     │ 4x value chips               │                       │
     │ Our Story (photo + text)     │  What We Do card     │
     ├───────────────────────────┬─┴───────────────────────┤
     │ 4x stat cards              │  Quote                  │
     └───────────────────────────┴─────────────────────────┘
-->
<template>
  <main class="flex-1 overflow-y-auto scrollbar-none px-6 min-w-0">
    <AboutHeader />

    <!-- Top section: 12-col grid, left col spans 7, right col spans 5 -->
    <div class="grid grid-cols-12 gap-8 mb-6">
      <!-- Left column -->
      <div class="col-span-12 lg:col-span-7 flex flex-col gap-8">
        <AboutTitleDescription />

        <!-- Value chips -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 drop-shadow-[0px_4px_2px_rgba(0,0,0,0.04)]">
          <AboutCard
            v-for="chip in chips"
            :key="chip.label"
            :icon="chip.icon"
            :label="chip.label"
          />
        </div>

        <AboutStory />
      </div>

      <!-- Right column -->
      <div class="col-span-12 lg:col-span-5 flex flex-col gap-6">
        <AboutPhotocard />
        <AboutWhatwedo />
      </div>
    </div>

    <!-- Bottom section: stats + quote -->
    <div class="grid grid-cols-12 gap-6 pb-12">
      <div class="col-span-12 lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
        <AboutStat
          v-for="stat in stats"
          :key="stat.label"
          :icon="stat.icon"
          :value="stat.value"
          :label="stat.label"
        />
      </div>
      <div class="col-span-12 lg:col-span-4">
        <AboutQuote />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { Footprints, Coffee, Users, Leaf, Mountain, Compass, Star } from 'lucide-vue-next'

definePageMeta({ layout: 'sidebar' })

const chips = [
  { icon: Footprints, label: 'Rinjani\nTracking' },
  { icon: Coffee,     label: 'Coffee\nGarden' },
  { icon: Users,      label: 'Local\nGuides' },
  { icon: Leaf,       label: 'Sustainable\nTourism' },
]

const stats = [
  { icon: Mountain, value: '500+', label: 'Happy\nTrekkers' },
  { icon: Compass,  value: '10+',  label: 'Destinations' },
  { icon: Star,     value: '4.8',  label: 'Average\nRating' },
  { icon: Leaf,     value: '100%', label: 'Local\nSupport' },
]
</script>