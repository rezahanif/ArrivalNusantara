<!-- layouts/sidebar.vue
     Two-column layout: fixed sidebar (280px) + scrollable slot area.
     Used by: Experience, Gallery, About, Contact pages.
-->
<template>
  <div class="flex h-screen overflow-hidden bg-sand-50 font-jakarta">
    <SharedSidebar />
    <div class="flex-1 flex min-w-0 overflow-hidden">
      <slot />
    </div>
  </div>
</template>