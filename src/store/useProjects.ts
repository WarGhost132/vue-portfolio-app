import projectData from "@/data/projects"
import type { Project } from "@/types/project"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useProjectStore = defineStore('project', () => {
  const projects = ref<Project[]>([])

  const getProjects = () => {
    projects.value = projectData
  }

  return {
    projects,
    getProjects
  }
})
