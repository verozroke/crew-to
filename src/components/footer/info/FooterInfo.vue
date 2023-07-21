<template>
  <div class="info">
    <InfoItem v-for="item in items" :key="item.id" :icon="item.icon" :link="item.link" :text="item.text"
      :type="item.type" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import InfoItem from './item/InfoItem.vue';

const items = ref([
  {
    id: 1,
    icon: 'map-marker',
    link: '',
    text: 'Сейфуллина 12',
    type: 'text'
  },
  {
    id: 2,
    icon: 'email',
    link: '',
    text: 'Verozroke450@gmail.com',
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
  gap: .5em;
}
</style>