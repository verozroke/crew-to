<template>
  <div class="list">
    <SpeakerCard v-for="mod in mods" :key="mod.id" :name="mod.name" :occupation="mod.occupation" :company="mod.company"
      :img-src="mod.imgSrc" :text="mod.text" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import SpeakerCard from './card/SpeakerCard.vue'
// @ts-ignore

import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

const mods = computed(() => [
  {
    id: 1,
    name: t('mod.list.1.name'),
    occupation: t('mod.list.1.occupation'),
    company: 'FIABCI Central Asia, CREW Central Asia',
    text: t('mod.list.1.text'),
    imgSrc: '/mods/mod-1.jpg'
  },
  {
    id: 2,
    name: t('mod.list.2.name'),
    occupation: t('mod.list.2.occupation'),
    company: 'Lynks Property Management',
    text: t('mod.list.2.text'),
    imgSrc: '/mods/mod-2.jpg'
  },
  {
    id: 3,
    name: t('mod.list.3.name'),
    occupation: t('mod.list.3.occupation'),
    company: 'TSPM',
    text: t('mod.list.3.text'),
    imgSrc: '/mods/mod-3.jpg'
  },
  {
    id: 4,
    name: t('mod.list.4.name'),
    occupation: t('mod.list.4.occupation'),
    company: 'EST Group',
    text: t('mod.list.4.text'),
    imgSrc: '/mods/mod-4.jpeg'
  },
  {
    id: 5,
    name: t('mod.list.5.name'),
    occupation: t('mod.list.5.occupation'),
    company: 'Cushman & Wakefield',
    text: t('mod.list.5.text'),
    imgSrc: '/mods/mod-5.jpg'
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
