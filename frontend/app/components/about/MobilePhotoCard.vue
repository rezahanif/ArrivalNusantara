<!-- node 522:5388 — Pull quote section: mountain silhouette bg + italic quote -->
<template>
  <div class="lg:hidden relative overflow-hidden rounded-tl-[40px] rounded-tr-[40px] bg-[#efeded] pt-6">
    <!-- Mountain silhouette bg image — overlay blend -->
    <div class="absolute bottom-0 left-0 right-0 h-48 mix-blend-overlay opacity-40 pointer-events-none">
      <img
        src="/images/aboutrightmain.webp"
        alt=""
        aria-hidden="true"
        class="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
    <!-- Gradient overlay — node 522:5390 -->
    <div class="absolute inset-[24px_0_0_0] bg-gradient-to-t from-[rgba(251,249,248,0.8)] to-[rgba(251,249,248,0.2)] pointer-events-none" />

    <!-- Quote content — node 522:5391 -->
    <div class="relative flex gap-4 items-start px-6 py-12">
      <!-- Quote mark -->
      <svg class="shrink-0 mt-1" width="34" height="24" viewBox="0 0 34 24" fill="none">
        <path d="M0 24V14C0 6 5.33 2 8 0l2 2.67C7.33 4 5.33 6 5.33 10H12V24H0ZM18 24V14C18 6 23.33 2 26 0l2 2.67C25.33 4 23.33 6 23.33 10H30V24H18Z"
          fill="#03240e" opacity="0.5"/>
      </svg>
      <!-- Quote text -->
      <p class="font-jakarta font-semibold italic text-[18px] leading-[29.25px] text-[#03240e] pt-2">
        The mountain teaches us patience,<br/>
        the coffee brings us together.<br/>
        And the journey changes us<br/>
        forever.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
// no state
</script>