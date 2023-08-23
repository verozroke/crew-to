<template>
  <div class="list">
    <SpeakerCard
      v-for="speaker in speakers"
      :key="speaker.id"
      :name="speaker.name"
      :occupation="speaker.occupation"
      :imgSrc="speaker.imgSrc"
      :company="speaker.company"
      :text="speaker.text"
    />
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
  }
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
