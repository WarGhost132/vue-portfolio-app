<script setup lang="ts">
import ProjectCard from '@/components/ui/ProjectCard.vue';
import { useProjectStore } from '@/store/useProjects';
import { onMounted, ref } from 'vue';

const projectStore = useProjectStore()
const isLoading = ref(true)

onMounted(async () => {
  await projectStore.getProjects()
  isLoading.value = false
})
</script>

<template>
  <section id="projects" class="my-5">
    <h1 class="text-6xl font-bold mb-8">Проекты</h1>

    <div v-if="!isLoading" class="flex flex-col gap-8">
      <div v-for="project in projectStore.projects" :key="project.id">
        <ProjectCard :project="project" />
      </div>
    </div>
    <div v-else>
      Loading projects...
    </div>
  </section>
</template>
