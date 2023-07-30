<template>
  <v-btn
    color="#32cc98"
    rounded="0"
    size="x-large"
    style="
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      margin-bottom: 0.5em;
      color: #f7f7f7;
      text-transform: none;
    "
    @click="partStore.dialog = true"
    >Подать заявку</v-btn
  >
</template>

<script setup lang="ts">
import { usePartStore } from '@/stores/partStore'

const partStore = usePartStore()
</script>

<style scoped></style>
