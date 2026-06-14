<!-- components/contact/ConnectWithUs.vue
     Light green bottom bar — "Connect With Us" heading + description
     on the left, 4 social links (icon + name + handle) on the right.
-->
<template>
  <div class="bg-[#e9efe6] rounded-3xl p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
    <!-- Left: heading + description -->
    <div class="flex flex-col gap-2 max-w-[320px]">
      <h3 class="font-jakarta font-bold text-[24px] leading-[32px] text-[#03240e]">
        Connect With Us
      </h3>
      <p class="font-jakarta text-[14px] leading-[1.6] text-[#424842]">
        Follow our journey and get the latest updates on
        new trips, promotions, and stories.
      </p>
    </div>

    <!-- Right: social links -->
    <div class="flex gap-8 sm:gap-10">
      <a
        v-for="social in socials"
        :key="social.name"
        href="#"
        class="flex flex-col items-center gap-2 group"
      >
        <div class="w-12 h-12 rounded-full bg-forest-900 flex items-center justify-center group-hover:bg-forest-800 transition-colors">
          <component :is="social.icon" class="w-5 h-5 text-white" :stroke-width="1.75" />
        </div>
        <div class="flex flex-col items-center">
          <p class="font-jakarta font-semibold text-[14px] leading-[20px] text-[#03240e]">
            {{ social.name }}
          </p>
          <p class="font-jakarta text-[12px] leading-[16px] text-[#424842]">
            {{ social.handle }}
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const { socialLinks: socials } = useContactInfo()
</script>