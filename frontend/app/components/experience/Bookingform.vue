<!-- components/experience/Bookingform.vue
     Clean, premium booking modal overlay.
     Pre-fills and compiles fields to send as a WhatsApp template message.
-->
<template>
  <div
    class="
      fixed inset-0 z-50 flex items-center justify-center
      bg-[#0e2116]/40 backdrop-blur-[6px] p-6
    "
    @click.self="emit('close')"
  >
    <div
      class="
        bg-white rounded-3xl w-full max-w-md p-6 relative flex flex-col gap-6
        shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_10px_10px_-5px_rgba(0,0,0,0.04)]
        animate-in fade-in zoom-in-95 duration-200
      "
    >
      <!-- Close Button (Top Left per instructions) -->
      <button
        type="button"
        class="
          absolute top-6 left-6 w-9 h-9 rounded-full
          bg-[#f5f3f3] flex items-center justify-center
          hover:bg-[#e4e2e2] active:scale-95 transition-all
        "
        aria-label="Close booking form"
        @click="emit('close')"
      >
        <X class="w-4 h-4 text-[#03240e]" />
      </button>

      <!-- Title / Header (aligned right to avoid close button overlap) -->
      <div class="text-right pl-12">
        <h3 class="font-jakarta font-bold text-[20px] text-[#03240e] leading-tight">
          Book Experience
        </h3>
        <p class="font-jakarta text-[12px] text-gray-500 mt-1 truncate">
          {{ experience.title }} • ${{ experience.price }}/tour
        </p>
      </div>

      <!-- Booking Form -->
      <form @submit.prevent="submitBooking" class="flex flex-col gap-4 mt-2">
        <!-- Name Input -->
        <div class="flex flex-col gap-1.5">
          <label for="name" class="font-jakarta font-semibold text-[13px] text-[#03240e]">
            Your Name
          </label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            required
            placeholder="John Doe"
            class="
              w-full rounded-2xl border border-gray-200 px-4 py-3
              font-jakarta text-[14px] text-gray-800 placeholder-gray-400
              focus:outline-none focus:border-forest-700 focus:ring-1 focus:ring-forest-700
              transition-all
            "
          />
        </div>

        <!-- Date Input -->
        <div class="flex flex-col gap-1.5">
          <label for="date" class="font-jakarta font-semibold text-[13px] text-[#03240e]">
            Travel Date
          </label>
          <input
            id="date"
            v-model="form.date"
            type="date"
            required
            class="
              w-full rounded-2xl border border-gray-200 px-4 py-3
              font-jakarta text-[14px] text-gray-800
              focus:outline-none focus:border-forest-700 focus:ring-1 focus:ring-forest-700
              transition-all
            "
          />
        </div>

        <!-- Pack Amount Input -->
        <div class="flex flex-col gap-1.5">
          <label for="packs" class="font-jakarta font-semibold text-[13px] text-[#03240e]">
            Number of Packs (Persons)
          </label>
          <input
            id="packs"
            v-model.number="form.packs"
            type="number"
            min="1"
            required
            class="
              w-full rounded-2xl border border-gray-200 px-4 py-3
              font-jakarta text-[14px] text-gray-800
              focus:outline-none focus:border-forest-700 focus:ring-1 focus:ring-forest-700
              transition-all
            "
          />
        </div>

        <!-- Special Request Textarea -->
        <div class="flex flex-col gap-1.5">
          <label for="requests" class="font-jakarta font-semibold text-[13px] text-[#03240e]">
            Special Requests (Optional)
          </label>
          <textarea
            id="requests"
            v-model="form.requests"
            rows="3"
            placeholder="Dietary requests, pick up location, etc..."
            class="
              w-full rounded-2xl border border-gray-200 px-4 py-3
              font-jakarta text-[14px] text-gray-800 placeholder-gray-400 resize-none
              focus:outline-none focus:border-forest-700 focus:ring-1 focus:ring-forest-700
              transition-all
            "
          ></textarea>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="
            w-full flex items-center justify-center gap-2.5 mt-2
            bg-forest-900 text-white font-jakarta font-semibold text-[14px]
            rounded-full py-4 shadow-sm hover:bg-forest-800 active:scale-[0.98]
            transition-all duration-200
          "
        >
          Send Booking via WhatsApp
          <div class="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
            <ArrowRight class="w-3.5 h-3.5" />
          </div>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { X, ArrowRight } from 'lucide-vue-next'
import type { Experience } from '~/types/experience'
import { getWhatsAppLink } from '~/composables/Usecontactinfo'

const props = defineProps<{
  experience: Experience
}>()

const emit = defineEmits<{
  close: []
}>()

// Initialize date to tomorrow as a default helper
const tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1)
const defaultDate = tomorrow.toISOString().split('T')[0] ?? ''

const form = ref({
  name: '',
  date: defaultDate,
  packs: 1,
  requests: '',
})

function submitBooking() {
  const message = `Hello Arrival Nusantara!

I'd like to book the following tour:
*Tour*: ${props.experience.title}
*Price*: $${props.experience.price} / tour

*Booking Details*:
- *Name*: ${form.value.name}
- *Date*: ${form.value.date}
- *Packs*: ${form.value.packs} person(s)
- *Special Request*: ${form.value.requests.trim() || 'None'}

Thank you!`

  // Generate the WA link using the centralized composable function
  const waUrl = getWhatsAppLink(message)
  
  // Open link in new window/tab
  window.open(waUrl, '_blank')
  
  // Emit close after successful redirection
  emit('close')
}
</script>
