<script setup lang="ts">
import Card from '@/components/ui/Card.vue'
import { useSkillStore } from '@/store/useSkills';
import { onMounted } from 'vue';

const skillStore = useSkillStore()

onMounted(() => {
  skillStore.getSkills()
})
</script>

<template>
  <section id="skills" class="mb-24">
    <h2 class="text-6xl font-bold mb-8">Навыки</h2>

    <div class="grid grid-cols-3 gap-6">
      <div v-for="skill in skillStore.skills" :key="skill.title">
        <Card 
          :icon="skill.icon"
          :title="skill.title"
          :description="skill.description"
          :bgColor="skill.bgColor"
          :textColor="skill.textColor"
          :percentage="skill.percentage"
        />
      </div>
    </div>
  </section>
</template>
