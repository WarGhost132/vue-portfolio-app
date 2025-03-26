<script setup lang="ts">
import Preview from '@/components/sections/Preview.vue'
import Skills from '@/components/sections/Skills.vue'
import Projects from '@/components/sections/Projects.vue'
import Contact from '@/components/sections/Contact.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <main class="h-full">
    <div class="h-full relative">
      <div class="w-[1230px] h-[467px] bg-blue-900 opacity-30 blur-3xl absolute top-0 -left-1/2 -z-10 rounded-full rotate-[35deg]" />
      <div class="w-[1230px] h-[467px] bg-amber-900 opacity-30 blur-3xl absolute top-1/5 -right-1/2 -z-10 rounded-full rotate-[-35deg]" />
      <Preview />
    </div>

    <Skills />

    <div class="relative">
      <div class="w-[1230px] h-[467px] bg-pink-900 opacity-30 blur-3xl absolute top-0 -left-1/2 -z-10 rounded-full rotate-[35deg]" />
      <div class="w-[1230px] h-[467px] bg-lime-900 opacity-30 blur-3xl absolute top-1/5 -right-1/2 -z-10 rounded-full rotate-[-35deg]" />
      <Projects />
    </div>

    <Contact />

    <TheFooter />
  </main>
</template>

<style scoped></style>
