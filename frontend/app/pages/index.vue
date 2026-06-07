<!-- pages/index.vue  — redirect root to the landing splash -->
<script setup lang="ts">
await navigateTo('/landing', { redirectCode: 301 })
</script>