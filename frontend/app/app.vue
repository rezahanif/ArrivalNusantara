<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <!-- Cinematic landing → experience transition overlay.
       Lives above all layouts/pages via Teleport to <body>. -->
  <SharedTransitionOverlay />
</template>
