<!-- Individual gallery card — various card types from Figma node 554:141 grid
     Accepts a `card` prop describing which variant to render
-->
<template>
  <component :is="'div'" class="w-full">

    <!-- VARIANT: photo-caption — white card, photo top, text bottom (nodes 554:142, 554:167, 554:200, 554:212) -->
    <div
      v-if="card.type === 'photo-caption'"
      class="bg-white rounded-3xl overflow-hidden shadow-[0px_4px_20px_0px_rgba(26,58,34,0.05)] flex flex-col"
    >
      <div class="w-full overflow-hidden" :style="{ height: card.imageHeight ?? '192px' }">
        <img :src="card.image" :alt="card.title" class="w-full h-full object-cover" loading="lazy"/>
      </div>
      <div class="flex flex-col p-4 gap-1">
        <!-- Icon + title row -->
        <div class="flex items-center gap-2">
          <div class="border border-[#c2c8bf] rounded-full flex items-center justify-center shrink-0"
            :style="{ width: card.iconSize ?? '20px', height: card.iconSize ?? '32px' }">
            <component :is="card.icon" :size="card.iconPx ?? 10" class="text-[#03240e]" />
          </div>
          <h3 class="font-jakarta text-[#03240e]" :class="[card.titleSize ?? 'text-[18px] leading-[24px]', card.titleWeight ?? 'font-semibold']">
            {{ card.title }}
          </h3>
        </div>
        <!-- Body text -->
        <p class="font-jakarta font-normal text-[#424842]"
          :class="[card.bodySize ?? 'text-[16px] leading-[24px]', card.italic ? 'italic' : '']">
          {{ card.body }}
        </p>
        <!-- Location -->
        <p v-if="card.location" class="font-jakarta font-normal text-[#424842] opacity-60"
          :class="card.locationSize ?? 'text-[11px] leading-[16.5px] tracking-[0.275px]'">
          {{ card.location }}
        </p>
      </div>
    </div>

    <!-- VARIANT: brand-identity — dark green card (node 554:154) -->
    <div
      v-else-if="card.type === 'brand-identity'"
      class="bg-[#1a3a22] rounded-3xl overflow-hidden p-6 flex flex-col justify-between
             shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]
             relative"
    >
      <!-- Subtle blur glow -->
      <div class="absolute bottom-[-16px] right-[-16px] size-24 rounded-full bg-[#c6ecc9] blur-[20px] opacity-5 pointer-events-none"/>
      <div class="flex flex-col gap-4">
        <p class="font-jakarta font-bold text-[10px] leading-[15px] tracking-[2px] uppercase text-white opacity-80">
          BRAND IDENTITY
        </p>
        <h2 class="font-jakarta font-normal text-[28px] leading-[35px] text-white">
          Nature.<br/>People.<br/>Purpose.
        </h2>
        <p class="font-jakarta font-normal text-[13px] leading-[21px] text-white opacity-90">
          We connect adventurers with nature through meaningful experiences, local partnerships, and a deep respect for the land we explore.
        </p>
      </div>
      <!-- Mountain icon bottom right -->
      <div class="flex justify-end pt-8 opacity-40">
        <svg width="33" height="18" viewBox="0 0 33 18" fill="none">
          <path d="M1 17L8 5l5 8 5-10 5 10 5-8 4 8" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>

    <!-- VARIANT: promise — white bordered card (node 554:181) -->
    <div
      v-else-if="card.type === 'promise'"
      class="bg-white border border-[rgba(194,200,191,0.3)] rounded-3xl p-5"
    >
      <div class="border border-[#c2c8bf] rounded-full size-10 flex items-center justify-center mb-3">
        <component :is="card.icon" class="w-5 h-5 text-forest-900" :stroke-width="1.5" />
      </div>
      <h3 class="font-jakarta font-normal text-[16px] leading-[24px] text-[#03240e] mb-1">Our Promise</h3>
      <p class="font-jakarta font-normal text-[11px] leading-[17.88px] text-[#424842]">
        Sustainable adventures that empower local communities and protect the nature we love.
      </p>
    </div>

    <!-- VARIANT: stat — dark green stat card (node 554:191) -->
    <div
      v-else-if="card.type === 'stat'"
      class="bg-[#1a3a22] rounded-3xl p-5 flex flex-col h-[128px] justify-center"
    >
      <h2 class="font-jakarta font-normal text-[24px] leading-[36px] text-white">2018</h2>
      <p class="font-jakarta font-bold text-[12px] leading-[18px] text-white">Founded in Lombok</p>
      <p class="font-jakarta font-normal text-[11px] leading-[16.5px] text-white opacity-80 mt-[7px]">
        Built with passion,<br/>guided by nature.
      </p>
    </div>

    <!-- VARIANT: text-then-image — text top, image bottom (node 554:238 Hidden Paradise) -->
    <div
      v-else-if="card.type === 'text-then-image'"
      class="bg-white border border-[#e4e2e2] rounded-3xl overflow-hidden flex flex-col
             shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
    >
      <!-- Text block first -->
      <div class="flex flex-col gap-[3.3px] p-4">
        <h3 class="font-jakarta font-normal text-[#03240e]" :class="card.titleSize ?? 'text-[16px] leading-[24px]'">{{ card.title }}</h3>
        <p class="font-jakarta font-normal text-[#424842]" :class="card.bodySize ?? 'text-[11px] leading-[16.5px]'">{{ card.body }}</p>
        <p v-if="card.location" class="font-jakarta font-normal text-[#424842] opacity-60" :class="card.locationSize ?? 'text-[10px] leading-[15px]'">{{ card.location }}</p>
      </div>
      <!-- Image at bottom -->
      <div class="h-[128px] relative overflow-hidden shrink-0">
        <img :src="card.image" :alt="card.title" class="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      </div>
    </div>

    <!-- VARIANT: quote — full-width quote block (node 554:224) -->
    <div
      v-else-if="card.type === 'quote'"
      class="col-span-2 bg-[#f5f3f3] rounded-3xl p-8 flex flex-col items-center text-center"
    >
      <!-- Quote mark -->
      <div class="mb-4">
        <svg width="26" height="18" viewBox="0 0 26 18" fill="none">
          <path d="M0 18V10.5C0 4.5 4 1.5 8 0l1.5 2C7 3 5.5 4.5 5.5 7.5H9V18H0ZM14 18V10.5C14 4.5 18 1.5 22 0l1.5 2C21 3 19.5 4.5 19.5 7.5H23V18H14Z" fill="#03240e" opacity="0.6"/>
        </svg>
      </div>
      <p class="font-jakarta font-normal italic text-[17px] leading-[27.63px] text-[#03240e]">
        "We don't just organize trips. We create
        <span class="font-bold not-italic border-b-2 border-[#c2edca]"> connections</span>
        that last a lifetime."
      </p>
      <div class="w-10 h-px bg-[#c2c8bf] my-6"/>
      <p class="font-jakarta font-normal text-[16px] leading-[24px] text-[#424842] tracking-[1.6px] uppercase">
        ARRIVAL NUSANTARA
      </p>
    </div>

    <!-- VARIANT: text-image-dark — dark card with image at bottom (node 554:250) -->
    <div
      v-else-if="card.type === 'text-image-dark'"
      class="bg-[#1a3a22] rounded-3xl overflow-hidden flex flex-col"
    >
      <div class="flex flex-col gap-1 p-5">
        <h3 class="font-jakarta font-normal text-[16px] leading-[24px] text-white">{{ card.title }}</h3>
        <p class="font-jakarta font-normal text-[11px] leading-[15.13px] text-white opacity-80">{{ card.body }}</p>
        <p class="font-jakarta font-normal text-[10px] leading-[15px] text-white mt-1">{{ card.location }}</p>
      </div>
      <div class="relative overflow-hidden opacity-80" style="height: 128px;">
        <img :src="card.image" :alt="card.title" class="w-full h-full object-cover" loading="lazy"/>
      </div>
    </div>

    <!-- VARIANT: image-left — horizontal card with image on left (node 554:260) -->
    <div
      v-else-if="card.type === 'image-left'"
      class="col-span-2 bg-white rounded-3xl overflow-hidden flex h-[167px]
             shadow-[0px_4px_20px_0px_rgba(26,58,34,0.05)]"
    >
      <div class="w-[114px] shrink-0 overflow-hidden">
        <img :src="card.image" :alt="card.title" class="w-full h-full object-cover" loading="lazy"/>
      </div>
      <div class="flex flex-col justify-center p-5 flex-1">
        <h3 class="font-jakarta font-normal text-[16px] leading-[24px] text-[#03240e] mb-2">{{ card.title }}</h3>
        <p class="font-jakarta font-normal text-[12px] leading-[19.5px] text-[#424842]">{{ card.body }}</p>
        <div class="w-8 h-px bg-[#1a3a22] mt-4"/>
      </div>
    </div>

    <!-- VARIANT: icon-card — white card with icon circle + text, no image (node 554:272) -->
    <div
      v-else-if="card.type === 'icon-card'"
      class="col-span-2 bg-white border border-[rgba(194,200,191,0.2)] rounded-3xl
             flex items-center gap-6 p-[25px]"
    >
      <div class="bg-[#e4e2e2] rounded-full size-14 flex items-center justify-center shrink-0">
        <component :is="card.icon" :size="18" class="text-[#03240e]" />
      </div>
      <div class="flex flex-col gap-1">
        <h3 class="font-jakarta font-normal text-[16px] leading-[24px] text-[#03240e]">{{ card.title }}</h3>
        <p class="font-jakarta font-normal text-[12px] leading-[19.5px] text-[#424842]">{{ card.body }}</p>
        <p v-if="card.location" class="font-jakarta font-bold text-[10px] leading-[15px] text-[#424842] mt-1">
          {{ card.location }}
        </p>
      </div>
    </div>

  </component>
</template>

<script setup lang="ts">
defineProps<{
  card: {
    type: string
    title?: string
    body?: string
    location?: string
    image?: string
    imageHeight?: string
    icon?: unknown
    iconSize?: string
    iconPx?: number
    titleSize?: string
    titleWeight?: string
    bodySize?: string
    locationSize?: string
    italic?: boolean
  }
}>()
</script>