<template>
  <div class="list">
    <!-- <SpeakerCard v-for="mod in mods" :key="mod.id" :name="mod.name" :occupation="mod.occupation" :company="mod.company"
      :text="mod.text" /> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SpeakerCard from './card/SpeakerCard.vue'

const mods = ref([])
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  align-items: center;
  justify-content: center;
}

@media only screen and (max-width: 666px) {
  .list {
    width: 300px !important;
  }
}
</style>
