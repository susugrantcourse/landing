<template>
  <section class="bg-white border-b py-8">
    <div class="container max-w-6xl mx-auto m-8">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        Про институт доп образования Юургу и программу министерскую
      </h1>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>

      <div class="flex flex-wrap flex-col-reverse sm:flex-row">
        <div class="w-full sm:w-8/12 p-6 mt-6">
          <img class="rounded" src="~assets/img/building.jpg" alt />
        </div>
        <div class="w-full sm:w-4/12 p-6 mt-6">
          <div class="align-middle">
            <!-- <h3 class="text-3xl text-gray-800 font-bold leading-none mb-5">
              Это здание ЮУРГУ
            </h3> -->
            <p class="text-gray-600 mb-8">
              это проект по подготовке научно-педагогических работников и административно-управленческого персонала образовательных организаций высшего образования и научных организаций, участвующих в организации системы непрерывного образования, и работников организаций-работодателей в рамках федерального проекта «Новые возможности для каждого» национального проекта «Образование» на 2020 год
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>

      <br />
      <br />
      <div class="flex flex-wrap flex-col-reverse sm:flex-row">
        <div class="w-full sm:w-1/2 p-6 mt-6">
          <div class="align-middle">
            <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
              Министерская программа
            </h3>
            <p class="text-gray-600 mb-8">
              В стратегии развития университет будет опираться на ключевые
              достижения за последние 5 лет.
              <br />
              <br />
              ЮУрГУ вложил более 2 млрд рублей в создание передовой
              исследовательской инфраструктуры, занимает лидирующие позиции в
              стране по разработкам в области искусственного интеллекта для
              промышленной индустрии, тяжелого, транспортного и точного
              машиностроения, успешно развивает стратегическое партнерство и
              наращивает связи с ведущими предприятиями и университетами как в
              России, так и за рубежом, такими как Emerson, SMS-Group, Papilon,
              Kaspersky, Samsung, Huavey, Siemens, ММК, УралАЗ, МГУ, МФТИ,
              Штутгартским университетом, Университетом Лаппеенранта и другими.
            </p>
          </div>
        </div>
        <div class="w-full sm:w-1/2 p-6 mt-6">
          <img class="rounded" src="~assets/img/student1.jpg" alt="" />
        </div>
      </div>
      <br />
      <br />
      <feature-left
        headline="Lorem ipsum dolor sit amet"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula."
      >
        <img src="~assets/img/connected-world.svg?inline" alt slot="svg" />
      </feature-left>
    </div>
  </section>
</template>

<script>
import FeatureCenter from '@/components/FeatureCenter'
import FeatureRight from '@/components/FeatureRight'
import FeatureLeft from '@/components/FeatureLeft'

export default {
  name: 'Features',
  components: {
    'feature-center': FeatureCenter,
    'feature-right': FeatureRight,
    'feature-left': FeatureLeft
  }
}
</script>
