<template>
  <div>
    <div class="container max-w-6xl mx-auto mt-8">
      <br>
      <br>
      <h1
        class="w-full pt-8 text-4xl leading-tight text-center text-gray-900"
      >
        Контакты
      </h1>

      <div class="text-1xl text-center text-blue-500 mt-2 underline" >
        <a target="_blank" href="https://www.susu.ru/ru/structure/institut-dopolnitelnogo-obrazovaniya">Институт доп Образования Юургу</a> 

        
      </div>
      <div class="flex flex-wrap flex-col sm:flex-row md:mb-2" >
        <div class="w-full md:w-7/12 lg:w-7/12 px-6 sm:p-6 mt-2 md:mt-6 text-center">
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A636bf32d7f2262bfb65b5d0a9bfd66d12d9466d53f71e0ada2b31b2e1e9b52e7&amp;source=constructor" width="100%" height="300" frameborder="0"></iframe>
        </div>
        <div class="w-full md:w-5/12 lg:w-5/12 px-6 sm:p-6 mt-6">
          <div class="align-middle text-gray-700" >

              <b>Телефон</b>:<br><a href="tel:+73512679501">+7 351 2679501</a> 
              <br>
              <br>
              <b>Почта</b>:<br>
              <a href="mailto:2679501@mail.ru">2679501@mail.ru</a> или
              <a href="mailto:ido@susu.ru">ido@susu.ru</a>
              <br>
              <br>
              <b>Контактные лица:</b>
              <br>
              <ul>
                <li>Павловская Марина Сергеевна
                  <br>
                  <a href="tel:+73512679272">+7 351 267 9272</a>
                </li>
                <li>Маклецова Елена Александровна
                  <br>
                  <a href="tel:+73512679501">+7 351 267 9501</a>
                </li>
                <li>Буртовая Светлана Николаевна
                  <br>
                  <a href="tel:+73512679501">+7 351 267 9501</a>
                </li>
              </ul>
          </div>
        </div>
      </div>

    </div>
    
    <!-- <call-to-action /> -->
    <br>
    <br>
    <br>
    <br>
    <hr class="border-b border-gray-500 opacity-25 my-0 py-0">
  </div>
</template>

<script>
import CallToAction from '@/components/CallToAction'

export default {
  name: 'Контакты',
  layout: 'other',
  components:{
    'call-to-action': CallToAction
  }
}
</script>
