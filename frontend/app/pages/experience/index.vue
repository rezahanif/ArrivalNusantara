<!-- pages/experience/index.vue
     Experience page: sidebar layout, Discover header, bento carousel,
     top destinations, and sliding detail panel on card click.
-->
<template>
  <!-- Main scrollable content area -->
  <main class="flex-1 overflow-y-auto scrollbar-none px-10 py-8 min-w-0 transition-all duration-300">
    <!-- Header: "Discover" + tab filters -->
    <ExperienceHeader v-model="activeTab" />

    <!-- Horizontal bento carousel -->
    <ExperienceCarousel
      :experiences="filteredExperiences"
      @select="openDetail"
    />

    <!-- Top Destinations grid -->
    <ExperienceTopDestination :destinations="destinations" />
  </main>

  <!-- Detail panel — slides in from right when a card is selected -->
  <Transition name="panel">
    <ExperienceDetailExperience
      v-if="selectedExperience"
      :experience="selectedExperience"
      @close="selectedExperience = null"
    />
  </Transition>
</template>

<script setup lang="ts">
import type { Experience, Destination } from '~/types/experience'

definePageMeta({ layout: 'sidebar' })

// ── Active tab & selection state ──────────────────────────────
const activeTab = ref<string>('mountain')
const selectedExperience = ref<Experience | null>(null)

function openDetail(exp: Experience) {
  selectedExperience.value = exp
}

// ── Mock data (replace with API / Supabase fetch) ─────────────
const experiences: Experience[] = [
  {
    id: 1,
    title: 'Rinjani Tracking',
    subtitle: 'Waterfall, Bali, Indonesia',
    category: 'mountain',
    image: '/images/exp-rinjani.webp',
    images: ['/images/exp-rinjani-2.jpg', '/images/exp-rinjani-3.jpg'],
    location: 'Rinjani Mountain',
    distance: '10 Km',
    temp: '17° C',
    rating: 4.9,
    price: 120,
    description:
      'Indonesia is a Southeast Asian archipelago known for dramatic volcanic peaks, lush rainforests, ancient temples, and communities deeply rooted in tradition. In Lombok, the island, a rugged landscape rises alongside quiet mountain villages and the iconic trek of Mount Rinjani — a 3,726-meter stratovolcano with a crater lake at its heart. Nearby experiences include the pristine beaches of Gili Islands and the spiritual crater rim walks where sunrise breaks over the caldera. Rinjani Tracking immerses you in this untamed terrain, from misty forest trails to alpine meadows, guided by locals who know every switchback and story the mountain holds.',
  },
  {
    id: 2,
    title: 'Coffee Walk',
    subtitle: 'Beach, Bali, Indonesia',
    category: 'nature',
    image: '/images/exp-coffee.webp',
    images: [],
    location: 'Bali, Indonesia',
    distance: '5 Km',
    temp: '28° C',
    rating: 4.7,
    price: 85,
    description:
      'Wander through lush Balinese coffee plantations with a local guide, discovering the art of traditional coffee cultivation. Learn how Kopi Luwak and arabica beans are grown, processed, and brewed — then taste a flight of artisan roasts at a jungle terrace with sweeping valley views.',
  },
  {
    id: 3,
    title: 'Panoramic Walk',
    subtitle: 'Awaits',
    category: 'mountain',
    image: '/images/exp-panoramic.webp',
    images: [],
    location: 'Lombok, Indonesia',
    distance: '8 Km',
    temp: '22° C',
    rating: 4.6,
    price: 95,
    description:
      'Follow a curated ridge-line trail above the clouds where 360° panoramas stretch from the Gili Islands across the Lombok strait. The walk passes through sacred Sasak villages, ancient banyan groves, and cascading rice terraces — every turn a new canvas.',
  },
  {
    id: 4,
    title: 'Rice Terrace Tour',
    subtitle: 'Tegallalang, Bali',
    category: 'cultural',
    image: '/images/exp-rice.webp',
    images: [],
    location: 'Tegallalang, Bali',
    distance: '3 Km',
    temp: '30° C',
    rating: 4.8,
    price: 65,
    description:
      'Explore the iconic Tegallalang terraces carved into hillsides for over a thousand years using the Subak irrigation system — a UNESCO-listed cultural heritage. Walk narrow paths between mirrored paddies, meet farming families, and witness a living agricultural tradition unchanged by modernity.',
  },
  {
    id: 5,
    title: 'Waterfall Hike',
    subtitle: 'North Lombok',
    category: 'nature',
    image: '/images/exp-waterfall.webp',
    images: [],
    location: 'North Lombok',
    distance: '6 Km',
    temp: '24° C',
    rating: 4.7,
    price: 75,
    description:
      'Trek through dense tropical jungle to reach Sendang Gile and Tiu Kelep — two of Lombok\'s most spectacular waterfalls. The trail rewards hikers with cool mists, exotic birdlife, and refreshing natural pools perfect for a swim.',
  },
]

const destinations: Destination[] = [
  { id: 1, name: 'Segara Anak',      type: 'Alpine Lake',          rating: 4.8, image: '/images/dest-segara.webp'   },
  { id: 2, name: 'Aiq Kalak',        type: 'Natural Hot Springs',  rating: 4.7, image: '/images/dest-aiq.webp'      },
  { id: 3, name: 'Sembalun Savanna', type: 'Green Savanna',        rating: 4.7, image: '/images/dest-sembalun.webp' },
  { id: 4, name: 'Torean Valley',    type: 'Majestic sunset spot', rating: 4.7, image: '/images/dest-torean.webp'   },
]

// ── Filter experiences by active tab ─────────────────────────
const filteredExperiences = computed(() =>
  experiences.filter(e => e.category === activeTab.value)
)
</script>

<style scoped>
/* Detail panel slide-in from right */
.panel-enter-active,
.panel-leave-active {
  transition: transform 0.32s cubic-bezier(0.4, 0, 0.2, 1),
              opacity 0.32s cubic-bezier(0.4, 0, 0.2, 1);
}
.panel-enter-from,
.panel-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>