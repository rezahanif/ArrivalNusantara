<!-- components/contact/MobileForm.vue
     Mobile "Send Us a Message" form — stacked single-column fields
     (Full Name, Email Address, Subject, Message), submit button,
     and a privacy note.
     Figma node: 521-4928
-->
<template>
  <section class="lg:hidden bg-white rounded-3xl p-6 flex flex-col gap-4 drop-shadow-[0px_4px_10px_rgba(26,58,34,0.05)] w-full">
    <h3 class="font-jakarta font-semibold text-[18px] leading-[24px] text-[#03240e]">
      Send Us a Message
    </h3>
    <div class="w-8 h-[2px] bg-forest-900" />

    <form class="flex flex-col gap-4 pt-2" @submit.prevent="onSubmit">
      <input
        v-model="form.name"
        type="text"
        placeholder="Full Name"
        class="w-full rounded-lg bg-white border border-[#c2c8bf] px-4 py-3.5 font-jakarta text-[14px] text-[#03240e] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-forest-700/40 transition-colors"
      />
      <input
        v-model="form.email"
        type="email"
        placeholder="Email Address"
        class="w-full rounded-lg bg-white border border-[#c2c8bf] px-4 py-3.5 font-jakarta text-[14px] text-[#03240e] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-forest-700/40 transition-colors"
      />
      <input
        v-model="form.subject"
        type="text"
        placeholder="Subject"
        class="w-full rounded-lg bg-white border border-[#c2c8bf] px-4 py-3.5 font-jakarta text-[14px] text-[#03240e] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-forest-700/40 transition-colors"
      />
      <textarea
        v-model="form.message"
        rows="5"
        placeholder="Your Message"
        class="w-full rounded-lg bg-white border border-[#c2c8bf] px-4 py-3.5 font-jakarta text-[14px] text-[#03240e] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-forest-700/40 transition-colors resize-none"
      />

      <button
        type="submit"
        class="
          w-full flex items-center justify-center gap-2.5
          bg-forest-900 text-white
          font-jakarta font-normal text-[16px]
          rounded-lg px-6 py-4
          hover:bg-forest-800 active:scale-[0.99]
          transition-all duration-200
        "
      >
        Send Message
        <Send class="w-4 h-4" :stroke-width="2" />
      </button>

      <p class="flex items-center justify-center gap-2 font-jakarta font-medium text-[12px] leading-[16px] text-[#424842] text-center">
        <ShieldCheck class="w-3.5 h-3.5 shrink-0" :stroke-width="1.75" />
        <span>Your information is safe with us. We respect your privacy.</span>
      </p>
    </form>
  </section>
</template>

<script setup lang="ts">
import { Send, ShieldCheck } from 'lucide-vue-next'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

function onSubmit() {
  // TODO: wire up to API / email service
  console.log('Contact form submitted (mobile):', form)
}
</script>