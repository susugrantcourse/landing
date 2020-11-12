<template>
  <div class="pt-24 pb-24" style="height: 600px">
    <div
      class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center"
    >
      <div
        style="min-height: 50vh"
        class="flex relative flex-col w-full md:w-3/5"
      >
        <div class="absolute" style="bottom: -5em">
          <h1
            class="text-2xl lg:text-2xl my-4 leading-tight font-bold sm:font-normal"
          >
            Федеральные курсы повышения квалификации
          </h1>
          <h2
            class="leading-tight sm:leading-normal text-2xl sm:text-3xl md:text-4xl sm:font-bold"
          >
            Образовательный проект:
            <br />
            «Технологии реализации программ непрерывного образования»
          </h2>

          <br />
          <br />
          <a
            href="#choose_programm"
            class="mx-auto lg:mx-0 bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
          >
            Выбрать программу
          </a>
        </div>
      </div>
      <!--       
      <div
        class="w-full md:w-1/5 py-6 text-center flex content-center justify-center"
      >
        <button
          class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
        >
          ЗАРЕГИСТРИРОВАТЬСЯ
        </button>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroContent',
}
</script>

<style >
</style>