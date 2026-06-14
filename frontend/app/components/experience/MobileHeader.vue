<!-- components/experience/MobileHeader.vue
     Mobile Explore page header — node 478:1037
     "Explore" title + horizontally-scrollable category tabs.
     Tab state is lifted to the parent via v-model:activeTab so that
     the card list can filter by the selected category.
     NOTE: Figma node 478:1037 contains NO logo — logo removed.
-->
<template>
  <div class="bg-[#fbf9f8]">
    <!-- Top bar: page title only -->
    <div class="px-6 pt-6 pb-0">
      <h1 class="font-jakarta font-bold text-[32px] leading-[40px] tracking-[-0.64px] text-[#03240e]">
        Explore
      </h1>
    </div>

    <!-- Category tabs — horizontal scroll, node 478:1047 -->
    <div class="flex gap-6 px-6 pt-[30px] pb-2 overflow-x-auto scrollbar-hide">
      <button
        v-for="cat in categories"
        :key="cat.value"
        class="shrink-0 flex flex-col items-center gap-0 pb-1 transition-colors"
        :class="activeTab === cat.value
          ? 'font-jakarta font-bold text-[15px] leading-[16px] text-[#03240e] border-b-2 border-[#03240e]'
          : 'font-jakarta font-medium text-[15px] leading-[16px] text-[#424842]'"
        @click="$emit('update:activeTab', cat.value)"
      >
        {{ cat.label }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ activeTab: string }>()
defineEmits<{ 'update:activeTab': [value: string] }>()

const categories = [
  { label: 'Mountain',  value: 'mountain'  },
  { label: 'Nature',    value: 'nature'    },
  { label: 'Cultural',  value: 'cultural'  },
]
</script>