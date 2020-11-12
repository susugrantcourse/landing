<template>
  <div>
    <hero />
    <features />
    <teasers />
    <contacts />
    <!-- <call-to-action /> -->
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Teasers from '@/components/Teasers'
import Prices from '@/components/Prices'
import CallToAction from '@/components/CallToAction'
import Contacts from '@/components/Contacts'

export default {
  name: 'курсы',
  components: {
    hero: Hero,
    features: Features,
    teasers: Teasers,
    teasers: Teasers,
    prices: Prices,
    Contacts,
    'call-to-action': CallToAction
  }
}
</script>
