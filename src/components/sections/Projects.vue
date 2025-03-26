<script setup lang="ts">
import ProjectCard from '../ui/ProjectCard.vue';

interface Project {
  id: number,
  type: string,
  previewImage: string,
  title: string,
  description: string,
  year: number,
  role: string,
  link: string,
  githubLink: string
}

const projects: Project[] = [
  {
    id: 1,
    type: 'Веб-интерфейс',
    previewImage: '/projects/filter-feedbacks.png',
    title: 'Фильтр отзывов',
    description: 'Современная платформа для интернет-магазинов с уникальной корзиной покупок и системой фильтров.',
    year: 2025,
    role: 'Frontend Developer',
    link: 'https://nuxt-filter-feedbacks.netlify.app/',
    githubLink: 'https://github.com/WarGhost132/nuxt-web-feedback'
  },
  {
    id: 2,
    type: 'Веб-интерфейс',
    previewImage: '/projects/sim-center.png',
    title: 'Сим-центр',
    description: 'Современная платформа для интернет-магазинов с уникальной корзиной покупок и системой фильтров.',
    year: 2025,
    role: 'Frontend Developer',
    link: 'https://nuxt-sim-center.netlify.app/',
    githubLink: 'https://github.com/WarGhost132/nuxt-sim-center'
  },
  {
    id: 3,
    type: 'Веб-интерфейс',
    previewImage: '/projects/creative-gallery.png',
    title: 'Креативная галерея',
    description: 'Современная платформа для интернет-магазинов с уникальной корзиной покупок и системой фильтров.',
    year: 2024,
    role: 'Frontend Developer',
    link: 'https://vue-creative-gallery.netlify.app/',
    githubLink: 'https://github.com/WarGhost132/vue-creative-gallery'
  },
]
</script>

<template>
  <section id="projects" class="mb-24">
    <h2 class="text-6xl font-bold mb-8">Проекты</h2>

    <div class="flex flex-col gap-8">
      <div v-for="project in projects" :key="project.id">
        <ProjectCard :id="project.id" :type="project.type" :previewImage="project.previewImage" :title="project.title"
          :description="project.description" :year="project.year" :role="project.role" :link="project.link"
          :githubLink="project.githubLink" />
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
