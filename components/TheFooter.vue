<template>
  <footer class="bg-white">
    <div class="container mx-auto px-8">
      <div class="w-full flex flex-col md:flex-row py-6">
        <div class="flex-1 mb-6 mr-12">
          <logo />
        </div>

        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">ссылки</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >FAQ</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Помощь</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Поддержка</a
              >
            </li>
          </ul>
        </div>

        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Соцсети</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                target="_blank"
                href="https://t.me/obrazovanie_onlinee"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Telegramm</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                target="_blank"
                href="https://vk.com/federal_kursi"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >VK</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                target="_blank"
                href="https://vk.com/federal_kursi"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Одноклассники</a
              >
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Дополнительно</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >О нас</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Контакты</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>

  </footer>
</template>

<script>
import Logo from '@/components/Logo'

export default {
  name: 'TheFooter',
  components: {
    logo: Logo
  }
}
</script>
