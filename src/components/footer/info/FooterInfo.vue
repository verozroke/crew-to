<template>
  <div class="info">
    <InfoItem
      v-for="item in items"
      :key="item.id"
      :icon="item.icon"
      :link="item.link"
      :text="item.text"
      :type="item.type"
    />
  </div>
</template>

<script setup lang="ts">
import InfoItem from './item/InfoItem.vue'
// @ts-ignore

import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n({ useScope: 'global' })

const items = computed(() => [
  {
    id: 1,
    icon: 'map-marker',
    link: '',
    text: t('footer.address'),
    type: 'text'
  },
  {
    id: 2,
    icon: 'email',
    link: '',
    text: 'info@kaznetpartners.com; crewpropertyawards@gmail.com',
    type: 'text'
  },
  {
    id: 3,
    icon: 'footer-kaznet',
    link: 'https://kaznetpartners.com/',
    text: 'kaznetpartners.com',
    type: 'link'
  }
])
</script>

<style lang="scss" scoped>
.info {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}
</style>
