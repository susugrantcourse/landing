<template>
  <div class="pt-24 pb-24">
    <div
      class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center"
    >
      <!--Left Col-->
      <div
        class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left"
      >
        
        <h1 class="my-4 text-6xl font-bold leading-tight">
          Программа первая
        </h1>
        <p class="leading-normal text-6xl mb-8">
          
        </p>

        <button
          class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
        >
          ЗАРЕГИСТРИРОВАТЬСЯ
        </button>
      </div>
      <!--Right Col-->
      <div class="w-full md:w-3/5 py-6 text-center flex content-center justify-center">
        <!-- <img class="w-full md:w-4/5 z-50" src="~/assets/img/yourgu.png" alt /> -->
        <img class="rounded-lg w-full md:w-10/12 z-10" src="~/assets/img/old_hipster.jpg" alt />
        <br>
        <br>
        <br>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroContent'
}
</script>
