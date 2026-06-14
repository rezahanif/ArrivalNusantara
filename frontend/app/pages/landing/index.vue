<!-- pages/landing/index.vue
     Landing splash page — uses the full-screen `landing` layout
     and renders the Hero component.
-->
<template>
  <LandingHero @go="goHome" />
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'landing',
})

const { transitionToExperience } = usePageTransition()

function goHome() {
  transitionToExperience()
}
</script>