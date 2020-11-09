<template>
  <section class="bg-white border-b py-8">
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        Программы
      </h1>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>
      <teaser-column :rows="3" action="ЗАРЕГИСТРИРОВАТЬСЯ">
        <template v-slot:overline>Программа 1</template>
        <template v-slot:headline>кратное описание</template>
        <template v-slot:content
          >кратное описание, consectetur adipiscing elit. Aliquam at
          ipsum eu nunc commodo posuere et sit amet ligula.</template
        >
      </teaser-column>
      <teaser-column :rows="3" action="ЗАРЕГИСТРИРОВАТЬСЯ">
        <template v-slot:overline>Программа 2</template>
        <template v-slot:headline>кратное описание</template>
        <template v-slot:content
          >кратное описание, consectetur adipiscing elit. Aliquam at
          ipsum eu nunc commodo posuere et sit amet ligula.</template
        >
      </teaser-column>
      <teaser-column :rows="3" action="ЗАРЕГИСТРИРОВАТЬСЯ">
        <template v-slot:overline>Программа 3</template>
        <template v-slot:headline>кратное описание</template>
        <template v-slot:content
          >кратное описание, consectetur adipiscing elit. Aliquam at
          ipsum eu nunc commodo posuere et sit amet ligula.</template
        >
      </teaser-column>
    </div>
  </section>
</template>

<script>
import TeaserColumn from '@/components/TeaserColumn'

export default {
  name: 'Teasers',
  components: {
    'teaser-column': TeaserColumn
  }
}
</script>
