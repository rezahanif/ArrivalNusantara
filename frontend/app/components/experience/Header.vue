<!-- components/experience/Header.vue
     "Discover" heading + category tab bar (Mountain / Nature / Cultural).
     Active tab underlined with forest-900 indicator.
-->
<template>
  <div class="mb-6">
    <h1 class="font-jakarta font-bold text-[32px] leading-tight text-gray-900 mb-6">
      Discover
    </h1>

    <!-- Tab bar -->
    <div class="flex items-center gap-8 border-b border-gray-200">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        type="button"
        class="relative pb-3 font-jakarta font-medium text-[14px] transition-colors duration-200"
        :class="modelValue === tab.id
          ? 'text-gray-900'
          : 'text-gray-400 hover:text-gray-600'"
        @click="emit('update:modelValue', tab.id)"
      >
        {{ tab.label }}

        <!-- Active underline -->
        <span
          v-if="modelValue === tab.id"
          class="absolute bottom-0 left-0 right-0 h-[2.5px] bg-forest-900 rounded-full"
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const tabs = [
  { id: 'mountain', label: 'Mountain' },
  { id: 'nature',   label: 'Nature'   },
  { id: 'cultural', label: 'Cultural' },
]
</script>