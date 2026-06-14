<!-- components/contact/MobileCard.vue
     Mobile "Get in Touch" panel — heading + underline accent, then
     4 contact rows (WhatsApp, Email, Phone, Office). The first three
     rows have a bottom border separating them; Office (the last) does not.
     Figma node: 521-4879
-->
<template>
  <section class="lg:hidden bg-white rounded-3xl p-6 flex flex-col gap-4 drop-shadow-[0px_4px_10px_rgba(26,58,34,0.05)] w-full">
    <h3 class="font-jakarta font-semibold text-[18px] leading-[24px] text-[#03240e]">
      Get in Touch
    </h3>
    <div class="w-8 h-[2px] bg-forest-900" />

    <div class="flex flex-col gap-6 pt-2">
      <div
        v-for="(item, i) in contactItems"
        :key="item.label"
        class="flex gap-4 items-start"
        :class="i < contactItems.length - 1 ? 'pb-6 border-b border-[#e4e2e2]' : ''"
      >
        <div class="w-12 h-12 rounded-full bg-forest-900 flex items-center justify-center shrink-0">
          <component :is="item.icon" class="w-5 h-5 text-white" :stroke-width="1.75" />
        </div>
        <div class="flex flex-col gap-0.5 min-w-0">
          <p class="font-jakarta font-semibold text-[14px] leading-[20px] text-[#03240e]">
            {{ item.label }}
          </p>
          <a
            v-if="item.link"
            :href="item.link"
            target="_blank"
            class="font-jakarta text-[14px] leading-[1.6] text-[#424842] whitespace-pre-line hover:underline"
          >
            {{ item.value }}
          </a>
          <p v-else class="font-jakarta text-[14px] leading-[1.6] text-[#424842] whitespace-pre-line">
            {{ item.value }}
          </p>
          <p
            class="font-jakarta text-[12px] leading-[16px] pt-1 whitespace-pre-line"
            :class="item.helperEmphasis ? 'font-bold text-forest-900' : 'font-medium text-[#727971]'"
          >
            {{ item.helper }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { contactItems } = useContactInfo()
</script>