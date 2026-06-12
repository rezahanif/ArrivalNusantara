<!-- components/contact/Form.vue
     "Send Us a Message" white panel — name/email row, subject input,
     message textarea, submit button, and a privacy note.
-->
<template>
  <div class="bg-white rounded-3xl p-8 flex flex-col gap-4 shadow-[0px_4px_20px_0px_rgba(26,58,34,0.05)] h-full">
    <h3 class="font-jakarta font-bold text-[24px] leading-[32px] text-[#03240e] mb-2">
      Send Us a Message
    </h3>

    <form class="flex flex-col gap-4" @submit.prevent="onSubmit">
      <!-- Name + Email row -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          v-model="form.name"
          type="text"
          placeholder="Your full name"
          class="w-full rounded-xl bg-[#f5f3f3] border border-transparent px-4 py-3.5 font-jakarta text-[14px] text-[#03240e] placeholder:text-[#9ba39c] focus:outline-none focus:ring-2 focus:ring-forest-700/40 focus:bg-white transition-colors"
        />
        <input
          v-model="form.email"
          type="email"
          placeholder="email address"
          class="w-full rounded-xl bg-[#f5f3f3] border border-transparent px-4 py-3.5 font-jakarta text-[14px] text-[#03240e] placeholder:text-[#9ba39c] focus:outline-none focus:ring-2 focus:ring-forest-700/40 focus:bg-white transition-colors"
        />
      </div>

      <!-- Subject -->
      <input
        v-model="form.subject"
        type="text"
        placeholder="How can we help?"
        class="w-full rounded-xl bg-[#f5f3f3] border border-transparent px-4 py-3.5 font-jakarta text-[14px] text-[#03240e] placeholder:text-[#9ba39c] focus:outline-none focus:ring-2 focus:ring-forest-700/40 focus:bg-white transition-colors"
      />

      <!-- Message -->
      <textarea
        v-model="form.message"
        rows="5"
        placeholder="Tell us more about your travel plans..."
        class="w-full rounded-xl bg-[#f5f3f3] border border-transparent px-4 py-3.5 font-jakarta text-[14px] text-[#03240e] placeholder:text-[#9ba39c] focus:outline-none focus:ring-2 focus:ring-forest-700/40 focus:bg-white transition-colors resize-none"
      />

      <!-- Submit -->
      <button
        type="submit"
        class="
          w-full flex items-center justify-center gap-2.5
          bg-forest-900 text-white
          font-jakarta font-semibold text-[16px]
          rounded-xl py-4
          hover:bg-forest-800 active:scale-[0.99]
          transition-all duration-200
        "
      >
        Send Message
        <Send class="w-4 h-4" :stroke-width="2" />
      </button>

      <!-- Privacy note -->
      <p class="flex items-center justify-center gap-1.5 font-jakarta text-[12px] text-[#9ba39c] text-center">
        <ShieldCheck class="w-3.5 h-3.5 shrink-0" :stroke-width="1.75" />
        Your information is safe with us. We respect your privacy.
      </p>
    </form>
  </div>
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
  console.log('Contact form submitted:', form)
}
</script>