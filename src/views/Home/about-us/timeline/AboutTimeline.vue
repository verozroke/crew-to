<template>
  <v-timeline>
    <v-timeline-item v-for="year in years" :key="year.color" :dot-color="year.color" size="small">
      <template v-slot:opposite>
        <div :class="`pt-1 headline font-weight-bold text-${year.color}`"
          style="font-family: 'Exo 2', sans-serif; font-weight: 900; font-size: 32px; " v-text="year.year"></div>
      </template>
      <h2 :class="`headline  text-${year.color}`"
        style="font-family: 'Exo 2', sans-serif; font-weight: 500; font-size: 20px; padding: 30px 0;">
        {{ year.text }}
      </h2>
    </v-timeline-item>
  </v-timeline>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const years = ref([
  {
    color: '#32cc98',
    year: '1960',
    text: 'Наше открытие',
  },
  {
    color: '#32cc98',
    year: '1970',
    text: 'Наше открытие',
  },
  {
    color: '#32cc98',
    year: '1980',
    text: 'Наше открытие',
  },
  {
    color: '#32cc98',
    year: '1990',
    text: 'Наше открытие',
  },
])

</script>

<style scoped></style>