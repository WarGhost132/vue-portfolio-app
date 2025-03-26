<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
</script>

<template>
  <div class="h-full overflow-x-hidden">
    <div class="container mx-auto h-full">
      <TheHeader />
  
      <RouterView class="py-20" />
    </div>
  </div>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
