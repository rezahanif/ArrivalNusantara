<!-- Default layout wrapper -->
<template>
  <div class="flex flex-col min-h-screen">
    <!-- Navigation will go here -->
    <header class="sticky top-0 z-50 bg-white shadow">
      <!-- Navbar component will be inserted here -->
    </header>

    <!-- Main content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white mt-auto">
      <!-- Footer component will be inserted here -->
    </footer>
  </div>
</template>

<script setup lang="ts">
// Layout setup
</script>

<style scoped>
/* Add any layout-specific styles here */
</style>
