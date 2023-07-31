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
import { ref } from 'vue'
import GridItem from './item/GridItem.vue'

const items = ref([
  {
    id: 1,
    icon: 'mdi-numeric-1-box-outline',
    title: 'Причина 1',
    text: 'Качественный Networking'
  },
  {
    id: 2,
    icon: 'mdi-numeric-2-box-outline',
    title: 'Причина 2',
    text: 'Последние новости рынка недвижимости в Казахстане и Центральной Азии. '
  },
  {
    id: 3,
    icon: 'mdi-numeric-3-box-outline',
    title: 'Причина 3',
    text: 'Преимущества технологий Eco-Friendly. "Зеленые" и SMART- технологии в 2024 году.'
  },
  {
    id: 4,
    icon: 'mdi-numeric-4-box-outline',
    title: 'Причина 4',
    text: 'Расширение партнерских связей и обмен опытом'
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
