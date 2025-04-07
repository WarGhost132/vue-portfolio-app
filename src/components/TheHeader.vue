<script lang="ts" setup>
</script>

<template>
  <header class="relative top-0 left-0 right-0 z-50 w-full">
    <div class="container mx-auto flex justify-between items-center py-6">
      <div class="flex items-center gap-4">
        <div>
          <img src="/logo.png">
        </div>
        <div class="text-3xl font-bold">LoomCode</div>
      </div>
      <div>
        <ul class="flex gap-8 text-lg">
          <li><RouterLink to="/">Главная</RouterLink></li>
          <li><RouterLink to="/projects">Мои проекты</RouterLink></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>
