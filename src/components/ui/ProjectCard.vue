<script setup lang="ts">
import { Icon } from "@iconify/vue"

defineProps<{
  id: number,
  type: string,
  previewImage: string,
  title: string,
  description: string,
  year: number,
  role: string,
  link: string,
  githubLink: string
}>()
</script>

<template>
  <div class="grid grid-cols-2 gap-12 h-[460px]">
    <div class="bg-zinc-800 rounded-xl relative">
      <div class="absolute top-5 left-5 bg-black px-4 py-2 rounded-full">
        {{ type }}
      </div>
      <div class="flex justify-center items-center h-full">
        <img :src="previewImage" :alt="title" class="w-4/5 h-4/5 object-contain rounded-xl">
      </div>
    </div>
    <div class="flex flex-col justify-center">
      <span class="text-4xl font-semibold mb-4">{{ title }}</span>

      <p class="font-light mb-8">{{ description }}</p>

      <div class="flex flex-col">
        <div class="border-b border-zinc-700 pb-4 mb-4">О проекте</div>
        <div class="border-b border-zinc-700 pb-4 mb-4 flex justify-between items-center">
          <span>Год</span>
          <span>{{ year }}</span>
        </div>
        <div class="border-b border-zinc-700 pb-4 mb-4 flex justify-between items-center">
          <span>Роль</span>
          <span>{{ role }}</span>
        </div>
      </div>

      <div class="flex gap-4">
        <a
          :href="link"
          target="_blank"
          class="cursor-pointer text-blue-500 hover:text-blue-600 border-b-2 border-blue-500 hover:border-blue-600 font-semibold"
        >
          <div class="flex uppercase items-center gap-2 hover:text-blue-600">
            Посмотреть демо
            <Icon icon="humbleicons:arrow-right-up" class="size-6" />
          </div>
        </a>
        <a
          :href="githubLink"
          target="_blank"
          class="cursor-pointer text-blue-500 hover:text-blue-600 border-b-2 border-blue-500 hover:border-blue-600 font-semibold"
        >
          <div class="flex uppercase items-center gap-2">
            Посмотреть на github
            <Icon icon="mdi:github" class="size-6" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
