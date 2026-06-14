<!-- pages/contact/index.vue
     Contact Us page.
-->
<template>
  <main class="flex-1 overflow-y-auto scrollbar-none px-6 pb-12 lg:pb-12 min-w-0">
    <!-- ── Mobile layout (< lg) ──────────────────────────────────── -->
    <div class="lg:hidden flex flex-col gap-6 pb-24">
      <ContactMobileHeader />
      <ContactMobileHero />
      <ContactMobileCard />
      <ContactMobileForm />
      <ContactMobileConnect />
    </div>

    <!-- ── Desktop layout (lg and up) ───────────────────────────── -->
    <div class="hidden lg:block">
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
    </div>
  </main>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'sidebar' })
</script>