<template>
  <div class="list">
    <SpeakerCard v-for="speaker in speakers" :key="speaker.id" :name="speaker.name" :occupation="speaker.occupation"
      :imgSrc="speaker.imgSrc" :company="speaker.company" :text="speaker.text" />
  </div>
</template>

<script setup lang="ts">
import SpeakerCard from './card/SpeakerCard.vue'
import { computed } from 'vue'
// @ts-ignore

import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

const speakers = computed(() => [
  {
    id: 1,
    name: t('speaker.list.1.name'),
    occupation: t('speaker.list.1.occupation'),
    company: 'JLL France',
    text: t('speaker.list.1.text'),
    imgSrc: '/speakers/speaker-1.png'
  },
  {
    id: 2,
    name: t('speaker.list.2.name'),
    occupation: t('speaker.list.2.occupation'),
    company: 'CPM IREM',
    text: t('speaker.list.2.text'),
    imgSrc: '/speakers/speaker-2.jpg'
  },
  {
    id: 3,
    name: t('speaker.list.3.name'),
    occupation: t('speaker.list.3.occupation'),
    company: 'IBC Real Estate',
    text: t('speaker.list.3.text'),
    imgSrc: '/speakers/speaker-3.jpg'
  },
  {
    id: 4,
    name: t('speaker.list.4.name'),
    occupation: t('speaker.list.4.occupation'),
    company: 'Astana Tower',
    text: t('speaker.list.4.text'),
    imgSrc: '/speakers/speaker-4.jpg'
  },
  {
    id: 5,
    name: t('speaker.list.5.name'),
    occupation: t('speaker.list.5.occupation'),
    company: 'BI Group',
    text: t('speaker.list.5.text'),
    imgSrc: '/speakers/speaker-5.jpeg'
  },
  {
    id: 6,
    name: t('speaker.list.6.name'),
    occupation: t('speaker.list.6.occupation'),
    company: 'BAUBERG',
    text: t('speaker.list.6.text'),
    imgSrc: '/speakers/speaker-6.jpeg'
  },
  {
    id: 7,
    name: t('speaker.list.7.name'),
    occupation: t('speaker.list.7.occupation'),
    company: 'РОЮЛ',
    text: t('speaker.list.7.text'),
    imgSrc: '/speakers/speaker-7.webp'
  },
  {
    id: 8,
    name: t('speaker.list.8.name'),
    occupation: t('speaker.list.8.occupation'),
    company: 'Technopark Coworking',
    text: t('speaker.list.8.text'),
    imgSrc: '/speakers/speaker-8.jpeg'
  },
  {
    id: 9,
    name: t('speaker.list.9.name'),
    occupation: t('speaker.list.9.occupation'),
    company: 'Becar Asset Management',
    text: t('speaker.list.9.text'),
    imgSrc: '/speakers/speaker-9.jpg'
  },
  {
    id: 10,
    name: t('speaker.list.10.name'),
    occupation: t('speaker.list.10.occupation'),
    company: 'FIABCI',
    text: t('speaker.list.10.text'),
    imgSrc: '/speakers/speaker-10.jpg'
  },
  {
    id: 11,
    name: t('speaker.list.11.name'),
    occupation: t('speaker.list.11.occupation'),
    company: 'ARCADA',
    text: t('speaker.list.11.text'),
    imgSrc: '/speakers/speaker-11.jpeg'
  },
  {
    id: 12,
    name: t('speaker.list.12.name'),
    occupation: t('speaker.list.12.occupation'),
    company: 'ARCADA',
    text: t('speaker.list.12.text'),
    imgSrc: '/speakers/speaker-12.jpg'
  },
  {
    id: 13,
    name: t('speaker.list.13.name'),
    occupation: t('speaker.list.13.occupation'),
    company: 'PropTech Solutions',
    text: t('speaker.list.13.text'),
    imgSrc: '/speakers/speaker-13.jpeg'
  },
  {
    id: 14,
    name: t('speaker.list.14.name'),
    occupation: t('speaker.list.14.occupation'),
    company: 'Bulldozer/Sun Group',
    text: t('speaker.list.14.text'),
    imgSrc: '/speakers/speaker-14.jpeg'
  },
  {
    id: 15,
    name: t('speaker.list.15.name'),
    occupation: t('speaker.list.15.occupation'),
    company: 'Smart Point',
    text: t('speaker.list.15.text'),
    imgSrc: '/speakers/speaker-15.jpeg'
  },
  {
    id: 16,
    name: t('speaker.list.16.name'),
    occupation: t('speaker.list.16.occupation'),
    company: 'TOP Service Group',
    text: t('speaker.list.16.text'),
    imgSrc: '/speakers/speaker-16.jpg'
  },
  {
    id: 17,
    name: t('speaker.list.17.name'),
    occupation: t('speaker.list.17.occupation'),
    company: 'Retail Space Global',
    text: t('speaker.list.17.text'),
    imgSrc: '/speakers/speaker-17.jpeg'
  },
  {
    id: 18,
    name: t('speaker.list.18.name'),
    occupation: t('speaker.list.18.occupation'),
    company: 'Grey Plaza Holding',
    text: t('speaker.list.18.text'),
    imgSrc: '/speakers/speaker-18.jpeg'
  },
  {
    id: 19,
    name: t('speaker.list.19.name'),
    occupation: t('speaker.list.19.occupation'),
    company: 'Комитет по делам строительства и жилищно-коммунального хозяйства',
    text: t('speaker.list.19.text'),
    imgSrc: '/speakers/speaker-19.jpeg'
  },
  {
    id: 20,
    name: t('speaker.list.20.name'),
    occupation: t('speaker.list.20.occupation'),
    company: 'Marden Property',
    text: t('speaker.list.20.text'),
    imgSrc: '/speakers/speaker-20.jpg'
  },
  {
    id: 21,
    name: t('speaker.list.21.name'),
    occupation: t('speaker.list.21.occupation'),
    company: 'ESTGroup',
    text: t('speaker.list.21.text'),
    imgSrc: '/speakers/speaker-21.jpeg'
  },
  {
    id: 22,
    name: t('speaker.list.22.name'),
    occupation: t('speaker.list.22.occupation'),
    company: 'Property Management Group',
    text: t('speaker.list.22.text'),
    imgSrc: '/speakers/speaker-22.jpeg'
  },
  {
    id: 23,
    name: t('speaker.list.23.name'),
    occupation: t('speaker.list.23.occupation'),
    company: 'Global Development',
    text: t('speaker.list.23.text'),
    imgSrc: '/speakers/speaker-23.jpeg'
  },
  {
    id: 24,
    name: t('speaker.list.24.name'),
    occupation: t('speaker.list.24.occupation'),
    company: 'Becar Asset Management',
    text: t('speaker.list.24.text'),
    imgSrc: '/speakers/speaker-24.jpeg'
  },
  {
    id: 25,
    name: t('speaker.list.25.name'),
    occupation: t('speaker.list.25.occupation'),
    company: 'SmartUP',
    text: t('speaker.list.25.text'),
    imgSrc: '/speakers/speaker-25.jpeg'
  },
  {
    id: 26,
    name: t('speaker.list.26.name'),
    occupation: t('speaker.list.26.occupation'),
    company: 'Essentai Tower',
    text: t('speaker.list.26.text'),
    imgSrc: '/speakers/speaker-26.jpeg'
  },
  {
    id: 27,
    name: t('speaker.list.27.name'),
    occupation: t('speaker.list.27.occupation'),
    company: 'Stirling Hospitality Advisors',
    text: t('speaker.list.27.text'),
    imgSrc: '/speakers/speaker-27.png'
  },
])
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  align-items: center;
  justify-content: center;
}

@media only screen and (max-width: 666px) {
  .list {
    width: 300px !important;
  }
}
</style>
