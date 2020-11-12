<template>
<scrollactive class="my-nav">
  <nav :class="headerClassList" class="fixed w-full z-30 top-0">
    <div
      class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"
    >
      <div class="pl-4 flex items-center">
        <logo :isStickable="true" :isSticky="isSticky" />
      </div>
      <div class="block lg:hidden pr-4">
        <button
          class="flex items-center p-1 text-blue-900 hover:text-gray-900"
          @click.prevent.stop="onToggleClick"
        >
          <svg
            class="fill-current h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Образовательная программа</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        :class="navContentClassList"
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
      >
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
            <li class="mr-3">
              <a
                class="scrollactive-item inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                href="#about_institute"
                >Об университете</a
              >
            </li>
            <li class="mr-3">
              <a 
                href="#about_programm"
                class="scrollactive-item inline-block py-2 px-4 text-black no-underline">
                О программe
              </a>
            </li>
            <li class="mr-3">
              <a
                class="scrollactive-item inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                href="#choose_programm"
                >Выбрать программу</a
              >
            </li>
        </ul>
        
        <a
          href="#choose_programm"
          :class="navActionClassList"
          class="scrollactive-item mx-auto lg:mx-0 hover:underline font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75"
        >
          участвовать
        </a>
      </div>
      
    </div>
    <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
  </nav>
  </scrollactive>
</template>

<script>
import Logo from '@/components/Logo'

export default {
  name: 'TheHeaderOther',
  components: {
    logo: Logo
  },
  data() {
    return {
      scrollY: 0,
      isOpen: false
    }
  },
  computed: {
    isSticky() {
      return this.scrollY > 10
    },
    headerClassList() {
      return this.isSticky ? 'bg-white shadow' : ''
    },
    navActionClassList() {
      return this.isSticky ? 'gradient text-white' : 'bg-white text-gray-800'
    },
    navContentClassList() {
      let classList = this.isSticky ? 'bg-white' : 'bg-gray-100'
      if (!this.isOpen) {
        classList += ` hidden`
      }
      return classList
    }
  },
  methods: {
    onClick() {
      this.isOpen = false
    },
    onScroll() {
      this.scrollY = window.scrollY
    },
    onToggleClick() {
      this.isOpen = !this.isOpen
    }
  },
  mounted() {
    this.scrollY = window.scrollY
    document.addEventListener('click', this.onClick)
    document.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.onClick, true)
    document.removeEventListener('scroll', this.onScroll, true)
  }
}
</script>

<style>
  .is-active {
    /* font-weight: bold; */
    border-bottom: 2px solid black;
    transition: all 0.25s ease-in-out;
  }
</style>
