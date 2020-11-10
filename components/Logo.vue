<template>
  <nuxt-link
    :class="classList"
    class="no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
    to="/"
    >
  <!--Icon from: http://www.potlabicons.com/ -->
    <img class="w-16" src="~assets/img/yourgu.png" alt="">
       
  </nuxt-link>

</template>

<script>
export default {
  name: 'Logo',
  props: {
    isStickable: {
      type: Boolean,
      default: false
    },
    isSticky: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classList() {
      let classList = ''
      if (this.isStickable) {
        classList = this.isSticky ? 'text-gray-800' : 'text-white'
      } else {
        classList = 'text-orange-600'
      }
      return classList
    }
  }
}
</script>
