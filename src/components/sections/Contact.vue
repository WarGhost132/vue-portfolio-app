<script setup lang="ts">
import { Icon } from "@iconify/vue"
interface Social {
  icon: string
  link: string
}
const social: Social[] = [
  {
    icon: "mdi:github",
    link: "https://github.com/WarGhost132"
  },
  {
    icon: "ic:baseline-telegram",
    link: "https://t.me/WarGhost"
  },
  {
    icon: "mdi:alphabet-k",
    link: "https://kwork.ru/user/wawghostick"
  },
  {
    icon: "ri:vk-fill",
    link: "https://vk.com/warghostosu"
  },
  {
    icon: "ic:baseline-discord",
    link: "https://discordapp.com/users/275648140542214144"
  },
]
</script>

<template>
  <section id="contact">
    <h2 class="text-6xl font-bold mb-8">Форма обратной связи</h2>

    <div class="grid grid-cols-2 gap-8">
      <div class="text-xl">
        <p>Передайте привет на <a href="mailto:wawghostick@gmail.com"
            class="border-b border-blue-500">wawghostick@gmail.com</a></p>
        <p class="mb-12">Для получения дополнительной информации,<br>вот мое <a href="#"
            class="border-b border-blue-500">резюме</a>
        </p>

        <div class="flex gap-4">
          <div v-for="item in social" :key="item.icon">
            <a :href="item.link" target="_blank" rel="noopener noreferrer">
              <Icon :icon="item.icon" class="size-12 text-cyan-300 hover:text-cyan-500 transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>

      <div>
        <form @submit.prevent="" class="flex flex-col gap-4">
          <div class="flex flex-col w-full gap-2">
            <label for="name">Имя</label>
            <input type="text" class="bg-zinc-800 text-white p-2 rounded-md" id="name">
          </div>
          <div class="flex flex-col w-full gap-2">
            <label for="email">Email</label>
            <input type="email" class="bg-zinc-800 text-white p-2 rounded-md" id="email">
          </div>
          <div class="flex flex-col w-full gap-2">
            <label for="theme">Тема</label>
            <input type="text" class="bg-zinc-800 text-white p-2 rounded-md" id="theme">
          </div>
          <div class="flex flex-col w-full gap-2">
            <label for="message">Сообщение</label>
            <textarea type="text" class="bg-zinc-800 text-white p-2 rounded-md" id="message"></textarea>
          </div>
          <div class="flex items-center gap-4">
            <input type="checkbox" id="agree">
            <label for="agree">Даю согласие на обработку моих персональных данных</label>
          </div>
          <div>
            <button type="submit"
              class="bg-cyan-300 text-black py-2 px-4 rounded-full hover:bg-cyan-400 transition-all duration-300 cursor-pointer">
              Отправить
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
