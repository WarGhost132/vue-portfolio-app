<script setup lang="ts">
import ProjectCard from '@/components/ui/ProjectCard.vue';
import { useProjectStore } from '@/store/useProjects';
import { onMounted } from 'vue';

const projectStore = useProjectStore()

onMounted(() => {
  projectStore.getProjects()
})
</script>

<template>
  <section id="projects" class="my-5">
    <h1 class="text-6xl font-bold mb-8">Проекты</h1>

    <div class="flex flex-col gap-8">
      <div v-for="project in projectStore.projects" :key="project.id">
        <ProjectCard :id="project.id" :type="project.type" :previewImage="project.previewImage" :title="project.title"
          :description="project.description" :year="project.year" :role="project.role" :link="project.link"
          :githubLink="project.githubLink" />
      </div>
    </div>
  </section>
</template>
