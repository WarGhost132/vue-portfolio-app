<script setup lang="ts">
import ProjectCard from '@/components/ui/ProjectCard.vue';
import { useProjectStore } from '@/store/useProjects';
import type { Responsive } from '@/types/project';
import { computed, onMounted, ref } from 'vue';

const projectStore = useProjectStore()
const isLoading = ref(true)

const searchQuery = ref('')
const selectedYear = ref<number | null>(null)
const selectedResponsive = ref<Responsive | null>(null)
const selectedTags = ref<string[]>([])
const selectedType = ref<string | null>(null)
const showAllTags = ref(false)

const projectTypes = computed(() => {
  const types = new Set<string>()
  projectStore.projects.forEach(project => types.add(project.type))
  return Array.from(types)
})

const years = computed(() => {
  const uniqueYears = new Set<number>()
  projectStore.projects.forEach(project => uniqueYears.add(project.year))
  return Array.from(uniqueYears).sort((a, b) => b - a)
})

const allTagsWithCount = computed(() => {
  const tagCounts: Record<string, number> = {}

  projectStore.projects.forEach(project => {
    project.tags.forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1
    })
  })

  return Object.entries(tagCounts)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count)
})

const visibleTags = computed(() => {
  return showAllTags.value
    ? allTagsWithCount.value
    : allTagsWithCount.value.slice(0, 9)
})

const filteredProjects = computed(() => {
  return projectStore.projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    
    const matchesYear = selectedYear.value ? project.year === selectedYear.value : true

    const matchesResponsive = selectedResponsive.value
      ? project.responsive.includes(selectedResponsive.value)
      : true

    const matchesTags = selectedTags.value.length > 0
      ? selectedTags.value.every(tag => project.tags.includes(tag))
      : true

    const matchesType = selectedType.value
      ? project.type === selectedType.value
      : true

    return matchesSearch && matchesYear && matchesResponsive && matchesTags && matchesType
  })
})

const toggleTag = (tag: string) => {
  if (selectedTags.value.includes(tag)) {
    selectedTags.value = selectedTags.value.filter(t => t !== tag)
  } else {
    selectedTags.value = [...selectedTags.value, tag]
  }
}

onMounted(async () => {
  await projectStore.getProjects()
  isLoading.value = false
})
</script>

<template>
  <section id="projects">
    <h1 class="text-6xl font-bold mb-8">Проекты</h1>

    <div class="flex gap-12 relative min-h-screen">
      <div class="flex flex-col gap-8 flex-1">
        <!-- Search -->
        <!-- <div class="mb-6">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Поиск по названию проекта..."
            class="w-full p-3 rounded-lg bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-zinc-500"
          >
        </div> -->

        <!-- Projects -->
        <div v-if="!isLoading" class="grid gap-12">
          <div v-for="project in filteredProjects" :key="project.id">
            <ProjectCard :project="project" />
          </div>

          <div v-if="filteredProjects.length === 0" class="text-center py-10 text-gray-400">
            Проекты не найдены
          </div>
        </div>
        <div v-else>
          Загрузка проектов
        </div>
      </div>

      <!-- Filter -->
      <div class="flex flex-col sticky top-6 h-fit gap-6 w-72">
        <!-- Tags -->
        <div class="bg-zinc-800 p-4 rounded-lg">
          <h3 class="font-bold mb-3">Технологии</h3>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="{tag} in visibleTags"
              :key="tag"
              @click="toggleTag(tag)"
              class="px-3 py-1 rounded-full text-sm cursor-pointer"
              :class="{
                'bg-blue-500 text-white': selectedTags.includes(tag),
                'bg-zinc-700 hover:bg-zinc-600': !selectedTags.includes(tag)
              }"
            >
              {{ tag }}
            </button>
          </div>

          <button
            v-if="allTagsWithCount.length > 9"
            @click="showAllTags = !showAllTags"
            class="mt-3 text-sm text-blue-400 hover:text-blue-300 cursor-pointer"
          >
            {{ showAllTags ? 'Скрыть' : 'Показать все' }}
          </button>
        </div>

        <!-- Project Type -->
        <div class="bg-zinc-800 p-4 rounded-lg">
          <h3 class="font-bold mb-3">Тип проекта</h3>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="type in projectTypes"
              :key="type"
              @click="selectedType = selectedType === type ? null : type"
              class="px-3 py-1 rounded-full text-sm cursor-pointer"
              :class="{
                'bg-blue-500 text-white': selectedType === type,
                'bg-zinc-700 hover:bg-zinc-600': selectedType !== type
              }"
            >
              {{ type }}
            </button>
          </div>
        </div>

        <!-- Responsive -->
        <div class="bg-zinc-800 p-4 rounded-lg">
          <h3 class="font-bold mb-3">Адаптивность</h3>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="type in ['desktop', 'tablet', 'mobile']"
              :key="type"
              @click="selectedResponsive = selectedResponsive === type ? null : type as Responsive"
              class="px-3 py-1 rounded-full text-sm cursor-pointer"
              :class="{
                'bg-blue-500 text-white': selectedResponsive === type,
                'bg-zinc-700 hover:bg-zinc-600': selectedResponsive !== type
              }"
            >
            {{ type }}
          </button>
        </div>
      </div>
      
      <!-- Year -->
      <!-- <div class="bg-zinc-800 p-4 rounded-lg">
        <h3 class="font-bold mb-3">Год</h3>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="year in years"
            :key="year"
            @click="selectedYear = selectedYear === year ? null : year"
            class="px-3 py-1 rounded-full text-sm"
            :class="{
              'bg-blue-500 text-white': selectedYear === year,
              'bg-zinc-700 hover:bg-zinc-600': selectedYear !== year
            }"
          >
            {{ year }}
          </button>
        </div>
      </div> -->

        <!-- Clear filters -->
        <button
          @click="() => {
            searchQuery = '';
            selectedYear = null;
            selectedResponsive = null;
            selectedTags = [];
            selectedType = null;
          }"
          class="px-4 py-2 bg-slate-500 hover:bg-slate-600 rounded-lg text-sm font-medium cursor-pointer"
        >
          Сбросить фильтры
        </button>
      </div>
    </div>
  </section>
</template>
