<!-- components/contact/MobileConnect.vue
     Mobile "Connect With Us" panel — centered heading + description,
     followed by a 2x2 grid of social links (icon + name + handle).
     Figma node: 521-4955
-->
<template>
  <section class="lg:hidden bg-[#f5f3f3] rounded-3xl p-6 flex flex-col items-center gap-3 w-full">
    <h3 class="font-jakarta font-semibold text-[18px] leading-[24px] text-[#03240e] text-center">
      Connect With Us
    </h3>
    <p class="font-jakarta text-[14px] leading-[1.6] text-[#424842] text-center max-w-[384px]">
      Follow our journey and get the latest updates on new trips, promotions, and stories.
    </p>

    <div class="grid grid-cols-2 gap-x-6 gap-y-8 pt-4 w-full max-w-[280px]">
      <a
        v-for="social in socialLinks"
        :key="social.name"
        href="#"
        class="flex flex-col items-center gap-2 group"
      >
        <div class="w-14 h-14 rounded-full bg-forest-900 flex items-center justify-center group-hover:bg-forest-800 transition-colors">
          <component :is="social.icon" class="w-5 h-5 text-white" :stroke-width="1.75" />
        </div>
        <div class="flex flex-col items-center">
          <p class="font-jakarta font-medium text-[12px] leading-[16px] text-[#03240e] text-center">
            {{ social.name }}
          </p>
          <p class="font-jakarta text-[10px] leading-[15px] text-[#727971] text-center">
            {{ social.handle }}
          </p>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
const { socialLinks } = useContactInfo()
</script>