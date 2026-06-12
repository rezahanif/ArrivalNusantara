<!-- pages/contact/index.vue
     Contact Us page.
     Figma node: 516-3728

     Layout:
     ┌───────────────────────────┬───────────────────────┐
     │ Header (title + intro)     │  Hero photo            │
     ├───────────────────────────┤                        │
     │ Get in Touch card          ├───────────────────────┤
     │                            │  Send Us a Message     │
     │                            │  (form)                │
     ├────────────────────────────┴───────────────────────┤
     │ Connect With Us (social bar)                         │
     └───────────────────────────────────────────────────┘
-->
<template>
  <main class="flex-1 overflow-y-auto scrollbar-none px-6 pb-12 min-w-0">
    <div class="grid grid-cols-12 gap-8">
      <!-- Left column -->
      <div class="col-span-12 lg:col-span-6 flex flex-col gap-6">
        <ContactHeader />
        <ContactCard />
      </div>

      <!-- Right column -->
      <div class="col-span-12 lg:col-span-6 flex flex-col gap-6 lg:pt-6">
        <ContactPhoto />
        <ContactForm />
      </div>
    </div>

    <!-- Bottom: social bar -->
    <div class="mt-6">
      <ContactConnectWithUs />
    </div>
  </main>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'sidebar' })
</script>