<script setup lang="ts"></script>

<template>
  <section class="flex h-full" id="home">
    <div class="grid grid-cols-2 gap-4">
      <div class="flex flex-col justify-center">
        <h1 class="text-7xl font-bold mb-5">Frontend<br>Software Developer</h1>

        <p class="mb-12">Создаю современные и интуитивно понятные веб-приложения, объединяя эстетику дизайна и передовые технологии. Моя цель - преобразить пользовательский опыт через код.</p>
      
        <div class="flex gap-4">
          <a href="#contact" type="button" class="bg-cyan-200 rounded-full px-4 py-1 text-black cursor-pointer hover:bg-cyan-300 transition-all duration-300">
            Заказать сайт
          </a>
          <a href="https://t.me/WarGhost" target="_blank" class="rounded-full px-4 py-1 border-2 border-cyan-200 cursor-pointer hover:border-cyan-300 transition-all duration-300">
            Обсудить проект в <span class="text-cyan-200">tg</span>
          </a>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <img src="/preview.png" alt="preview" class="w-[612px]">
      </div>
    </div>
  </section>
</template>

<style scoped></style>
