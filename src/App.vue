<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <div class="h-full overflow-x-hidden">
    <div class="container mx-auto h-full">
      <TheHeader />
  
      <RouterView class="py-20" />

      <TheFooter />
    </div>
  </div>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
