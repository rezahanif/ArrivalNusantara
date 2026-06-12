<!-- components/contact/Header.vue
     "Contact Us" page heading + "We'd love to hear from you!" subtitle
     with an underline accent, plus a description paragraph.
-->
<template>
  <header class="flex flex-col gap-3 pt-6 pb-2">
    <h1 class="font-jakarta font-bold text-[32px] leading-[40px] tracking-[-0.64px] text-gray-900">
      Contact Us
    </h1>

    <div class="flex flex-col gap-2">
      <h2 class="font-jakarta font-semibold text-[20px] leading-[28px] text-[#03240e]">
        We'd love to hear from you!
      </h2>
      <div class="w-10 h-[3px] bg-forest-700 rounded-full" />
    </div>

    <p class="font-jakarta text-[14px] leading-[1.6] text-[#424842] max-w-[420px]">
      Have questions about our treks, coffee experiences, or
      custom trips? Reach out to us and our team will get back to
      you as soon as possible.
    </p>
  </header>
</template>