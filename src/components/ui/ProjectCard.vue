<script setup lang="ts">
import type { Project } from "@/types/project";
import { Icon } from "@iconify/vue"
import { onMounted, ref } from "vue";

const props = defineProps<{
  project: Project
}>()

const projectData = ref()

onMounted(() => {
  projectData.value = props.project
})
</script>

<template>
  <div v-if="projectData">
    <div class="grid grid-cols-2 gap-12 h-full">
      <div class="bg-zinc-800 rounded-xl relative h-[460px]">
        <div class="absolute top-5 left-5 bg-black px-4 py-2 rounded-full">
          {{ projectData.type }}
        </div>
        <div class="flex justify-center items-center h-full">
          <img :src="projectData.previewImage" :alt="projectData.title" class="w-4/5 h-4/5 object-contain rounded-xl">
        </div>
      </div>
      <div class="flex flex-col justify-center">
        <span class="text-4xl font-semibold mb-4">{{ projectData.title }}</span>

        <p class="font-light mb-8">{{ projectData.description }}</p>

        <div class="flex flex-col">
          <div class="border-b border-zinc-700 pb-4 mb-4">О проекте</div>
          <div class="border-b border-zinc-700 pb-4 mb-4 flex justify-between items-center">
            <span>Год</span>
            <span>{{ projectData.year }}</span>
          </div>
          <div class="border-b border-zinc-700 pb-4 mb-4 flex justify-between items-center">
            <span>Адаптивность</span>
            <div class="flex items-center gap-2">
              <Icon icon="mynaui:desktop" class="size-8" :class="[projectData.responsive.includes('desktop') ? 'text-cyan-500' : 'text-gray-500']" />
              <Icon icon="material-symbols-light:tablet-outline" class="size-8" :class="[projectData.responsive.includes('tablet') ? 'text-cyan-500' : 'text-gray-500']" />
              <Icon icon="mynaui:mobile" class="size-8" :class="[projectData.responsive.includes('mobile') ? 'text-cyan-500' : 'text-gray-500']" />
            </div>
          </div>
          <div class="border-b border-zinc-700 pb-4 mb-4 flex justify-between items-center">
            <span>Теги</span>
            <div class="flex items-center gap-2">
              <span v-for="tag in projectData.tags" :key="tag">{{ tag }} <span v-if="tag !== projectData.tags[projectData.tags.length - 1]">|</span></span>
            </div>
          </div>
        </div>

        <div v-if="projectData.helpText" class="border-b border-zinc-700 pb-4 mb-4 text-end text-zinc-500">
          {{ projectData.helpText }}
        </div>

        <div class="flex gap-4">
          <a
            :href="projectData.link"
            target="_blank"
            class="cursor-pointer text-blue-500 hover:text-blue-600 border-b-2 border-blue-500 hover:border-blue-600 font-semibold"
          >
            <div class="flex uppercase items-center gap-2 hover:text-blue-600">
              Посмотреть демо
              <Icon icon="humbleicons:arrow-right-up" class="size-6" />
            </div>
          </a>
          <a
            :href="projectData.githubLink"
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
  </div>
  <div v-else>
    Loading...
  </div>
</template>
