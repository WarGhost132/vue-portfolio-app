<script setup lang="ts">
import { useProjectStore } from '@/store/useProjects';
import ProjectCard from '../ui/ProjectCard.vue';
import { computed, onMounted, ref } from 'vue';

const projectStore = useProjectStore()
const isLoading = ref(true)

onMounted(async () => {
  await projectStore.getProjects()
  isLoading.value = false
})

const favoriteProjects =computed(() => {
  return projectStore.projects.filter(project => project.isFavorite)
})

</script>

<template>
  <section id="projects" class="mb-24">
    <h2 class="text-6xl font-bold mb-8">Проекты</h2>

    <div class="flex flex-col gap-8">
      <div v-for="project in favoriteProjects" :key="project.id">
        <ProjectCard :project="project" />
      </div>
    </div>

    <div class="flex items-center justify-center mt-8">
      <RouterLink to="/projects">
        <button type="button" class="cursor-pointer px-4 py-2 border-b border-t border-cyan-200">
          Посмотреть все проекты
        </button>
      </RouterLink>
    </div>
  </section>
</template>
