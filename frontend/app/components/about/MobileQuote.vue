<!-- Standalone quote card variant — white card with quote mark, italic text, attribution -->
<template>
  <div class="mx-6 bg-white border border-[#e4e2e2] rounded-3xl p-6
               drop-shadow-[0px_4px_10px_rgba(26,58,34,0.05)]">
    <svg class="mb-4" width="28" height="20" viewBox="0 0 28 20" fill="none">
      <path d="M0 20V11.67C0 5 4.44 1.67 6.67 0l1.66 2.22C6.11 3.33 4.44 5 4.44 8.33H10V20H0ZM15 20V11.67C15 5 19.44 1.67 21.67 0l1.66 2.22C21.11 3.33 19.44 5 19.44 8.33H25V20H15Z"
        fill="#03240e" opacity="0.4"/>
    </svg>
    <p class="font-jakarta font-semibold italic text-[16px] leading-[26px] text-[#03240e]">
      <slot />
    </p>
    <p v-if="attribution" class="font-jakarta font-normal text-[12px] leading-[16px] text-[#424842] mt-4 tracking-[0.5px] uppercase">
      — {{ attribution }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  attribution?: string
}>()
</script>