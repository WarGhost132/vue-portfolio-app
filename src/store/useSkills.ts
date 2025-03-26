import skillData from "@/data/skills"
import type { Skill } from "@/types/skill"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useSkillStore = defineStore('skill', () => {
  const skills = ref<Skill[]>([])

  const getSkills = () => {
    skills.value = skillData
  }

  return {
    skills,
    getSkills
  }
})
