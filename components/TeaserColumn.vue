<template>
  <div
    :class="classList"
    class="w-full p-6 flex flex-col flex-grow flex-shrink"
  >
    <div
      class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
    >
      <a href="#" class="flex flex-wrap no-underline hover:no-underline">
        <p class="w-full text-gray-600 text-xs md:text-sm px-6 pt-2">
          <slot name="overline" />
        </p>
        <div class="w-full text-xl text-gray-800 px-6 pt-5">
          <slot name="headline" />
        </div>
        <p class="text-gray-800 text-base px-6 mb-5">
          <!-- <slot name="content" /> -->
        </p>
      </a>
    </div>
    <div
      class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
    >
      <div class="flex items-center justify-between flex-wrap">
        <a
          target="_blank"
          :href="dlink"
          class="mx-auto lg:mx-0 text-black font-bold my-6 px-4"
        >
        <div class="flex justify-start items-center flex-wrap">
          <span class="w-10 inline-block mr-2"><pdf /></span>
          <span>О программе</span>
        </div>
        </a>
        <a
          target="_blank"
          class="transition duration-700 ease-in-out transform hover:scale-125 mx-auto hover:shadow-xl lg:mx-0 bg-red-600 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg"
          :href="plink"
        >
          Начать учиться
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import pdf from "@/components/pdf";
export default {
  components:{pdf},
  name: 'TeaserColumn',
  props: {
    rows: {
      type: Number,
      required: true,
      validator: value => {
        return value >= 1 && value <= 6
      }
    },
    action: {
      type: String,
      default: ''
    },
    plink: {
      type: String,
      default: ''
    },
    dlink: {
      type: String,
      default: ''
    }
  },
  computed: {
    classList() {
      return `md:w-1/${this.rows}`
    },
    renderAction() {
      return this.action !== ''
    }
  },
  methods: {
    onClick() {
      // NOTE: is fired, but not handled in this template
      this.$emit('clicked')
    }
  }
}
</script>
