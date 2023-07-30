<template>
  <a v-if="!headerStore.isCrewAwards" :href="link"
    ><v-btn class="text-white" :icon="'mdi-' + icon" color="#32cc98"></v-btn
  ></a>
  <a v-if="headerStore.isCrewAwards" :href="link"
    ><v-btn class="text-white" :icon="'mdi-' + icon" color="#ffc14d"></v-btn
  ></a>
</template>

<script setup lang="ts">
import { useHeaderStore } from '@/stores/headerStore'

const headerStore = useHeaderStore()

defineProps({
  icon: String,
  link: String
})
</script>

<style scoped></style>
