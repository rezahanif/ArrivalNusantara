<!-- components/contact/Card.vue
     "Get in Touch" white panel — a heading followed by 4 contact
     rows (WhatsApp, Email, Phone, Office), each with a dark circular
     icon badge, label, value, and helper text.
-->
<template>
  <div class="bg-white rounded-3xl p-8 flex flex-col gap-6 shadow-[0px_4px_20px_0px_rgba(26,58,34,0.05)] h-full">
    <h3 class="font-jakarta font-bold text-[24px] leading-[32px] text-[#03240e]">
      Get in Touch
    </h3>

    <div class="flex flex-col gap-6">
      <div
        v-for="item in items"
        :key="item.label"
        class="flex gap-4 items-start"
      >
        <div class="w-12 h-12 rounded-full bg-[#03240e] flex items-center justify-center shrink-0">
          <component :is="item.icon" class="w-5 h-5 text-white" :stroke-width="1.75" />
        </div>
        <div class="flex flex-col gap-0.5">
          <p class="font-jakarta font-semibold text-[14px] leading-[20px] text-[#03240e]">
            {{ item.label }}
          </p>
          <a
            v-if="item.link"
            :href="item.link"
            target="_blank"
            class="font-jakarta font-bold text-[16px] leading-[24px] text-[#03240e] whitespace-pre-line hover:underline"
          >
            {{ item.value }}
          </a>
          <p v-else class="font-jakarta font-bold text-[16px] leading-[24px] text-[#03240e] whitespace-pre-line">
            {{ item.value }}
          </p>
          <p class="font-jakarta text-[13px] leading-[18px] text-[#424842] whitespace-pre-line">
            {{ item.helper }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { contactItems: items } = useContactInfo()
</script>