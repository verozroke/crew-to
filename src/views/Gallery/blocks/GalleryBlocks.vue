<template>
  <div class="blocks">
    <GalleryBlock v-for="block in blocks" :key="block.id" :src="block.src" />
  </div>
</template>

<script setup lang="ts">
import GalleryBlock from './GalleryBlock.vue';
import { ref } from 'vue';



const blocks = ref([
  {
    id: 1,
    src: '1.png'
  },
  {
    id: 2,
    src: '1.png'
  },
  {
    id: 3,
    src: '1.png'
  },
  {
    id: 4,
    src: '1.png'
  },
  {
    id: 5,
    src: '1.png'
  },
  {
    id: 6,
    src: '1.png'
  },
])

</script>

<style lang="scss" scoped>
.blocks {
  margin-top: 5em;
  display: flex;
  width: 100vw;
  flex-wrap: wrap;
}
</style>