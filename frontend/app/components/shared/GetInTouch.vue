<!-- components/shared/GetInTouch.vue
     "Get in Touch" button for the desktop sidebar.
     
     Design:
     ─ Dark forest blob (painted SVG shape) as background
     ─ "Get in Touch" in Dancing Script cursive, white
     ─ Thin light-green brush-stroke underline
     ─ Sage-green phone circle on the right, partially
       overlapping the blob's right edge
     
     Interaction:
     ─ Hover the phone circle → circle + icon scale up smoothly
-->
<template>
  <div class="relative flex items-center justify-between w-full select-none">
    <!-- Left side link to Contact page (Blob background) -->
    <NuxtLink
      to="/contact"
      class="absolute left-0 top-0 bottom-0 pointer-events-auto"
      style="width: calc(100% - 26px)"
      aria-label="Get in Touch"
    >
      <!-- Painted blob background -->
      <svg
        class="absolute left-0 top-0 w-full h-full pointer-events-none"
        viewBox="0 0 200 72"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="
            M18,9
            C11,2  2,9  2,24
            C-1,40  3,58 12,66
            C20,73  50,74  94,72
            C138,70  178,67  195,60
            C210,53  212,42  208,30
            C213,18  206,5  188,3
            C164,-2  95,-3  50,4
            C30,7  24,15  18,9Z
          "
          fill="#0d1f10"
        />
      </svg>
    </NuxtLink>

    <!-- Text content on the left linking to Contact page -->
    <NuxtLink
      to="/contact"
      class="relative z-10 pl-5 py-[18px] flex flex-col gap-[7px] pointer-events-auto"
    >
      <!-- Cursive heading -->
      <span class="font-script font-semibold text-[26px] leading-none text-white whitespace-nowrap">
        Get in Touch
      </span>

      <!-- Hand-drawn underline accent -->
      <svg
        viewBox="0 0 110 6"
        class="w-[110px] h-[6px]"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <path
          d="M2,4 C20,1 50,1 108,4"
          stroke="#4a8c5c"
          stroke-width="2.5"
          stroke-linecap="round"
          fill="none"
          opacity="0.85"
        />
      </svg>
    </NuxtLink>

    <!-- Right side phone circle linking to WhatsApp -->
    <a
      href="https://wa.me/6281234567890"
      target="_blank"
      class="
        relative z-20 shrink-0
        w-[52px] h-[52px] rounded-full
        bg-[#4a8c5c]
        flex items-center justify-center
        shadow-[0px_4px_14px_rgba(0,0,0,0.35)]
        transition-transform duration-300 ease-out
        hover:scale-[1.25]
        hover:shadow-[0px_6px_22px_rgba(74,140,92,0.55)]
        cursor-pointer
      "
      aria-label="Chat on WhatsApp"
    >
      <Phone
        class="w-5 h-5 text-white"
        :stroke-width="1.75"
      />
    </a>
  </div>
</template>

<script setup lang="ts">
import { Phone } from 'lucide-vue-next'
</script>