<script setup lang="ts">

defineProps<{
  icon: string,
  title: string,
  description: string,
  bgColor: string,
  textColor: string,
  percentage: number
}>()
</script>

<template>
  <div class="border border-gray-500 rounded-xl p-5 flex flex-col">
    <div class="flex items-center mb-5">
      <img :src="icon" alt="icon" class="size-12" />
      <span class="text-xl font-semibold ml-1.5">{{ title }}</span>
    </div>
    <div>
      <p class="font-light mb-6">{{ description }}</p>
    </div>
    <div class="flex gap-4 items-center justify-between">
      <span class="font-light">skill</span>
      <div class="w-full h-1 bg-gray-900 rounded-full">
        <div :class="bgColor" class="h-1 rounded-full" :style="{ width: percentage + '%' }"></div>
      </div>
      <span :class="textColor" class="font-semibold">{{ percentage }}%</span>
    </div>
  </div>
</template>

<style scoped></style>
