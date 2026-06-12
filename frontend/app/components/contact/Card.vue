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
          <p class="font-jakarta font-bold text-[16px] leading-[24px] text-[#03240e] whitespace-pre-line">
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
import { MessageCircle, Mail, Phone, MapPin } from 'lucide-vue-next'

const items = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+62 812-3456-7890',
    helper: 'Chat with us on WhatsApp',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@arrivalnusantara.com',
    helper: "We'll reply to your email",
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+62 370 123 4567',
    helper: 'Mon – Sun, 08:00 – 18:00 (WITA)',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: 'Jl. Pariwisata No. 12, Senaru,\nLombok Utara, NTB 83354 Indonesia',
    helper: 'Visit us by appointment',
  },
]
</script>