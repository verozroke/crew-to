<template>
  <div class="grid">
    <GridItem
      v-for="item in items"
      :key="item.id"
      :icon="item.icon"
      :title="item.title"
      :text="item.text"
    />
  </div>
</template>

<script setup lang="ts">
import GridItem from './item/GridItem.vue'
import { computed } from 'vue'

// @ts-ignore

import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

const items = computed(() => [
  {
    id: 1,
    icon: 'mdi-numeric-1-box-outline',
    title: 'Причина 1',
    text: t('home.auditory.points.1')
  },
  {
    id: 2,
    icon: 'mdi-numeric-2-box-outline',
    title: 'Причина 2',
    text: t('home.auditory.points.2')
  },
  {
    id: 3,
    icon: 'mdi-numeric-3-box-outline',
    title: 'Причина 3',
    text: t('home.auditory.points.3')
  },
  {
    id: 4,
    icon: 'mdi-numeric-4-box-outline',
    title: 'Причина 4',
    text: t('home.auditory.points.4')
  }
])
</script>

<style scoped>
.grid {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 2em;
}

@media only screen and (max-width: 1300px) {
  .grid {
    width: 100%;
  }
}
</style>
