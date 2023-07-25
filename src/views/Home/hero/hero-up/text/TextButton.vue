<template>
  <v-btn color="#284240" rounded="0" size="x-large"
    style="font-family: 'Exo 2', sans-serif; font-weight: 700; margin-bottom: 0.5em; color: #ffc14d; ;text-transform: none;"
    @click="partStore.dialog = true">Подать
    заявку</v-btn>
</template>

<script setup lang="ts">
import { usePartStore } from '@/stores/partStore';


const partStore = usePartStore()

</script>

<style scoped></style>