<script lang="ts" setup></script>

<template>
  <div class="h-44 border-t mt-12 pt-7">
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-4">
        <RouterLink to="/" class="flex items-center gap-4">
          <div>
            <img src="/logo.png">
          </div>
          <div class="text-3xl font-bold">LoomCode</div>
        </RouterLink>
      </div>
      <div>
        <ul class="flex gap-8 text-lg">
          <li><RouterLink to="/">Главная</RouterLink></li>
          <li><RouterLink to="/projects">Мои проекты</RouterLink></li>
        </ul>
      </div>
    </div>
  </div>
</template>
