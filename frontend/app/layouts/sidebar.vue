<!-- layouts/sidebar.vue
     Two-column layout: fixed sidebar (280px, desktop only) + scrollable
     slot area. On mobile, the sidebar is hidden and a fixed bottom tab
     bar (BottomNav) is shown instead.
     Used by: Experience, Gallery, About, Contact pages.
-->
<template>
  <div class="flex h-screen overflow-hidden bg-sand-50 font-jakarta">
    <div class="hidden lg:block lg:shrink-0">
      <SharedSidebar />
    </div>
    <div class="flex-1 flex min-w-0 overflow-hidden">
      <slot />
    </div>
    <SharedBottomNav />
  </div>
</template>