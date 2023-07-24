<template>
  <div class="grid">
    <GridItem v-for="item in items" :key="item.id" :icon="item.icon" :title="item.title" :text="item.text" />
  </div>
</template>



<script setup lang="ts">
import { ref } from 'vue';
import GridItem from './item/GridItem.vue';



const items = ref([
  {
    id: 1,
    icon: 'mdi-numeric-1-box-outline',
    title: 'Причина 1',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi vero ratione odit? Libero quo pariatur iure minima! Eum, perferendis officia.',
  },
  {
    id: 2,
    icon: 'mdi-numeric-2-box-outline',
    title: 'Причина 2',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi vero ratione odit? Libero quo pariatur iure minima! Eum, perferendis officia.',
  },
  {
    id: 3,
    icon: 'mdi-numeric-3-box-outline',
    title: 'Причина 3',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi vero ratione odit? Libero quo pariatur iure minima! Eum, perferendis officia.',
  },
  {
    id: 4,
    icon: 'mdi-numeric-4-box-outline',
    title: 'Причина 4',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi vero ratione odit? Libero quo pariatur iure minima! Eum, perferendis officia.',
  },
])

</script>

<style scoped>
.grid {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 5em;
}
</style>