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
