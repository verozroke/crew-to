<template>
  <div class="ticker">
    <v-timeline>
      <v-timeline-item v-for="year in years" :key="year.color" :dot-color="year.color" size="small">
        <template v-slot:opposite>
          <div :class="`headline font-weight-bold text-${year.color}`"
            style="font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 32px;" :style="{ color: year.color }"
            v-text="year.year"></div>
        </template>
        <h2 :class="`headline  text-${year.color}`"
          style="font-family: 'Montserrat', sans-serif; font-weight: 500; font-size: 20px; padding: 30px 0; text-align: justify; width: 300px;">
          {{ year.text }}
        </h2>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const years = ref([
  {
    color: '#32cc98',
    year: '2013',
    text: 'Создание CREW Central Asia',
  },
  {
    color: '#32cc98',
    year: '2014',
    text: 'Проведение первых ивентов в сфере коммерческой недвижимости',
  },
  {
    color: '#32cc98',
    year: '2015',
    text: '2 еженегодный Форум CREW 2015. Специальный гость форума Donald Trump Jr.',
  },
  {
    color: '#32cc98',
    year: '2016',
    text: 'CRE Week впервые в Алмате',
  },
  {
    color: '#32cc98',
    year: '2017',
    text: 'Центрально Азиатский форум по девелопменту с участием мэров городов Центральной Азии.',
  },
  {
    color: '#32cc98',
    year: '2018',
    text: 'Впервые проведен в Астане Форум по Редевелопменту объектов.',
  },
  {
    color: '#32cc98',
    year: '2019',
    text: 'Проведен Первый выездной CREW Форум «Трансформация рынка недвижимости» в горах.',
  },
  {
    color: '#32cc98',
    year: '2019',
    text: 'Первый бизнес завтраки в других регионах Казахстана.',
  },
  {
    color: '#32cc98',
    year: '2020',
    text: 'Серия онлайн конференций «Рынок недвижимости в период пандемии».',
  },
  {
    color: '#32cc98',
    year: '2020',
    text: 'Первая масштабная гибридная (онлайн-офлайн) конференция в городе Ташкент.',
  },
  {
    color: '#32cc98',
    year: '2021',
    text: 'Центрально-Азиатский Форум CREW «Будущее Городов». В городе Ташкент, Узбекистан.',
  },
  {
    color: '#32cc98',
    year: '2021',
    text: 'Подписание сотрудничества и открытия представительства Международной Федерации FIABCI в Центр Азии с головным офисом в Алматы.',
  },
  {
    color: '#32cc98',
    year: '2021',
    text: 'Первые Property туры в Дубае, ОАЭ.',
  },
  {
    color: '#32cc98',
    year: '2021',
    text: 'Создание Real Estate Businesses School.',
  },
  {
    color: '#32cc98',
    year: '2022',
    text: 'Проведение первой по складской конференции в Центральной Азии «CREW WAREHOUSE».',
  },
  {
    color: '#32cc98',
    year: '2022',
    text: 'Проведение первой CREW Central Asia Awards вместе со всемирным конкурсом по недвижимости FIABCI PRIX EXELIANCE.',
  },
  {
    color: '#32cc98',
    year: '2023',
    text: '10-летие компании CREW Central Asia. Создание CREW CLUB.',
  },
])

</script>

<style scoped>
.ticker {
  height: 4000px;
  box-sizing: content-box;

  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-name: ticker;
  animation-name: ticker;
  -webkit-animation-duration: 60s;
  animation-duration: 60s;
}


@keyframes ticker {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  100% {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}
</style>