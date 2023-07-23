<template>
  <div class="list">
    <SpeakerCard v-for="mod in mods" :key="mod.id" :name="mod.name" :occupation="mod.occupation" :company="mod.company"
      :text="mod.text" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SpeakerCard from './card/SpeakerCard.vue';



const mods = ref([
  {
    id: 1,
    name: 'Вася Пупкин',
    occupation: 'Обзорщик аниме',
    company: 'ООО Умных',
    text: 'Бро, тебе надо тренироваться'
  },
  {
    id: 2,
    name: 'Вася Пупкин',
    occupation: 'Обзорщик аниме',
    company: 'ООО Умных',
    text: 'Бро, тебе надо тренироваться'
  },
  {
    id: 3,
    name: 'Вася Пупкин',
    occupation: 'Обзорщик аниме',
    company: 'ООО Умных',
    text: 'Бро, тебе надо тренироваться'
  },
  {
    id: 4,
    name: 'Вася Пупкин',
    occupation: 'Обзорщик аниме',
    company: 'ООО Умных',
    text: 'Бро, тебе надо тренироваться'
  },
  {
    id: 5,
    name: 'Вася Пупкин',
    occupation: 'Обзорщик аниме',
    company: 'ООО Умных',
    text: 'Бро, тебе надо тренироваться'
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
</style>