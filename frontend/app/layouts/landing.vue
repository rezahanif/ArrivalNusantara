<!-- layouts/landing.vue
     Full-screen layout used by the landing splash page.
     No Navbar or Footer — the hero owns the entire viewport.
-->
<template>
  <div class="relative w-full h-[100dvh] lg:w-screen lg:h-screen overflow-hidden">
    <slot />
  </div>
</template>