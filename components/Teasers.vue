<template>
  <section class="bg-white border-b py-8" id="choose_programm">
    <br>
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
      <h2
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        Выбрать программу
      </h2>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>
      <teaser-column :rows="2" 
        action="ЗАРЕГИСТРИРОВАТЬСЯ"
        plink="https://catdo.susu.ru/checkout/?add-to-cart=35391"
        dlink="/_nuxt/docs/Стажировка.pdf"
        >
        <!-- <template v-slot:overline>Программа 1</template> -->
        <template v-slot:headline>
          Реализация программ непрерывного образования для специалистов секторов экономики, значимых для региона (в форме стажировки) (32 
        </template>
        <template v-slot:content
          >кратное описание, consectetur adipiscing elit. Aliquam at
          ipsum eu nunc commodo posuere et sit amet ligula.</template
        >
      </teaser-column>
      <teaser-column :rows="2" 
        action="ЗАРЕГИСТРИРОВАТЬСЯ"
        plink="https://catdo.susu.ru/checkout/?add-to-cart=35390"
        dlink="/_nuxt/docs/Цифровые компетенции в профессиональной пед деятельности.pdf"
        >
        <!-- <template v-slot:overline>Программа 2</template> -->
        <template v-slot:headline>
          Цифровые компетенции в профессиональной педагогической деятельности (72 час., грант, 2020) 
        </template>
        <template v-slot:content
          >кратное описание, consectetur adipiscing elit. Aliquam at
          ipsum eu nunc commodo posuere et sit amet ligula.</template
        >
      </teaser-column>
      <teaser-column :rows="2" 
        action="ЗАРЕГИСТРИРОВАТЬСЯ"
        plink="https://catdo.susu.ru/checkout/?add-to-cart=35389"
        dlink="/_nuxt/docs/Наставничество.pdf"
        >
        <!-- <template v-slot:overline>Программа 3</template> -->
        <template v-slot:headline>
          Наставничество в системе непрерывного образования взрослых (72 час., грант, 2020)
        </template>
        <template v-slot:content
          >кратное описание, consectetur adipiscing elit. Aliquam at
          ipsum eu nunc commodo posuere et sit amet ligula.</template
        >
      </teaser-column>
      <teaser-column :rows="2" 
        action="ЗАРЕГИСТРИРОВАТЬСЯ"
        plink="https://catdo.susu.ru/checkout/?add-to-cart=35388"
        dlink="/_nuxt/docs/Цифровая трансформация.pdf"
        >
        <!-- <template v-slot:overline>Программа 3</template> -->
        <template v-slot:headline>
          Цифровая трансформация дополнительного профессионального образования (72 час., грант, 2020)
        </template>
        <template v-slot:content
          >кратное описание, consectetur adipiscing elit. Aliquam at
          ipsum eu nunc commodo posuere et sit amet ligula.</template
        >
      </teaser-column>
      <teaser-column :rows="2" 
        action="ЗАРЕГИСТРИРОВАТЬСЯ"
        plink="https://catdo.susu.ru/checkout/?add-to-cart=35387"
        dlink="/_nuxt/docs/Управление персоналом.pdf"
        >
        <!-- <template v-slot:overline>Программа 3</template> -->
        <template v-slot:headline>
          Управление персоналом организации, реализующей дополнительные профессиональные программы (72 час., грант, 2020) 
        </template>
        <template v-slot:content
          >кратное описание, consectetur adipiscing elit. Aliquam at
          ipsum eu nunc commodo posuere et sit amet ligula.</template
        >
      </teaser-column>
      <teaser-column :rows="2" 
        action="ЗАРЕГИСТРИРОВАТЬСЯ"
        plink="https://catdo.susu.ru/checkout/?add-to-cart=35386"
        dlink="/_nuxt/docs/Модели и технологии образования взрослых.pdf"
        >
        <!-- <template v-slot:overline>Программа 3</template> -->
        <template v-slot:headline>
          Модели и технологии образования взрослых (72 час., грант, 2020) 
        </template>
        <template v-slot:content
          >кратное описание, consectetur adipiscing elit. Aliquam at
          ipsum eu nunc commodo posuere et sit amet ligula.</template
        >
      </teaser-column>
      <teaser-column :rows="2" 
        action="ЗАРЕГИСТРИРОВАТЬСЯ"
        plink="https://catdo.susu.ru/checkout/?add-to-cart=35385"
        dlink="/_nuxt/docs/ОВЗ.pdf"
        >
        <!-- <template v-slot:overline>Программа 3</template> -->
        <template v-slot:headline>
          Разработка и реализация дополнительных профессиональных программ для инвалидов и лиц с ограниченными возможностями здоровья (72 
        </template>
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
