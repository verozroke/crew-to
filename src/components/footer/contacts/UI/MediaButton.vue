<template>
  <a><v-btn class="text-white" :icon="'mdi-' + icon" :color="color"></v-btn></a>
</template>

<script setup lang="ts">

defineProps({
  icon: String,
  color: String,
})

</script>

<style scoped></style>