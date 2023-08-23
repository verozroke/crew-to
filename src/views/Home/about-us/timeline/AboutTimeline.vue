<template>
  <div class="ticker">
    <v-timeline side="end">
      <v-timeline-item
        v-for="year in years"
        :key="year.color"
        :dot-color="year.color"
        size="x-small"
      >
        <template v-slot:opposite>
          <div
            :class="`headline font-weight-bold timeline-year text-${year.color}`"
            style="font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 32px"
            :style="{ color: year.color }"
            v-text="year.year"
          ></div>
        </template>
        <h2
          :class="`headline timeline-text-unique`"
          style="
            font-family: 'Montserrat', sans-serif;
            font-weight: 500;
            font-size: 20px;
            /* padding: 30px 0; */
            width: 100%;
            text-align: left;
            color: #000;
          "
        >
          {{ year.text }}
        </h2>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
// import { ref } from 'vue'
// @ts-ignore

import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

const years = computed(() => [
  {
    color: '#32cc98',
    year: '2013',
    text: t('home.about_us.timeline.1')
  },
  {
    color: '#32cc98',
    year: '2014',
    text: t('home.about_us.timeline.2')
  },
  {
    color: '#32cc98',
    year: '2015',
    text: t('home.about_us.timeline.3')
  },
  {
    color: '#32cc98',
    year: '2016',
    text: t('home.about_us.timeline.4')
  },
  {
    color: '#32cc98',
    year: '2017',
    text: t('home.about_us.timeline.5')
  },
  {
    color: '#32cc98',
    year: '2018',
    text: t('home.about_us.timeline.6')
  },
  {
    color: '#32cc98',
    year: '2019',
    text: t('home.about_us.timeline.7')
  },
  {
    color: '#32cc98',
    year: '2019',
    text: t('home.about_us.timeline.8')
  },
  {
    color: '#32cc98',
    year: '2020',
    text: t('home.about_us.timeline.9')
  },
  {
    color: '#32cc98',
    year: '2020',
    text: t('home.about_us.timeline.10')
  },
  {
    color: '#32cc98',
    year: '2021',
    text: t('home.about_us.timeline.11')
  },
  {
    color: '#32cc98',
    year: '2021',
    text: t('home.about_us.timeline.12')
  },
  {
    color: '#32cc98',
    year: '2021',
    text: t('home.about_us.timeline.13')
  },
  {
    color: '#32cc98',
    year: '2021',
    text: t('home.about_us.timeline.14')
  },
  {
    color: '#32cc98',
    year: '2022',
    text: t('home.about_us.timeline.15')
  },
  {
    color: '#32cc98',
    year: '2022',
    text: t('home.about_us.timeline.16')
  },
  {
    color: '#32cc98',
    year: '2023',
    text: t('home.about_us.timeline.17')
  }
])
</script>

<style scoped>
.ticker {
  height: 2500px;
  box-sizing: content-box;
  width: 100%;

  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-name: ticker;
  animation-name: ticker;
  -webkit-animation-duration: 60s;
  animation-duration: 60s;
}

.timeline-text-unique {
  color: black;
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

@media only screen and (max-width: 736px) {
  .timeline-year {
    font-size: 18px !important;
  }

  .timeline-text-unique {
    font-size: 12px !important;
  }
}

@media only screen and (max-width: 450px) {
  .timeline-text-unique {
    font-size: 9px !important;
    width: 100px !important;
    margin-right: 0 !important;
  }
}
</style>
