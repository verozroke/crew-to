<template>
  <div class="blocks">
    <GalleryBlock v-for="block in blocks" :key="block.id" :src="block.src" />
  </div>
</template>

<script setup lang="ts">
import GalleryBlock from './GalleryBlock.vue'
import { ref } from 'vue'

const blocks = ref([
  {
    id: 1,
    src: '/storage/gallery/ (1).jpg'
  },
  {
    id: 2,
    src: '/storage/gallery/ (2).jpg'
  },
  {
    id: 3,
    src: '/storage/gallery/ (3).jpg'
  },
  {
    id: 4,
    src: '/storage/gallery/ (4).jpg'
  },
  {
    id: 5,
    src: '/storage/gallery/ (5).jpg'
  },
  {
    id: 6,
    src: '/storage/gallery/ (6).jpg'
  },
  {
    id: 7,
    src: '/storage/gallery/ (7).jpg'
  },
  {
    id: 8,
    src: '/storage/gallery/ (8).jpg'
  },
  {
    id: 9,
    src: '/storage/gallery/ (9).jpg'
  },
  {
    id: 10,
    src: '/storage/gallery/ (10).jpg'
  },
  {
    id: 11,
    src: '/storage/gallery/ (11).jpg'
  },
  {
    id: 12,
    src: '/storage/gallery/ (12).jpg'
  },
  {
    id: 13,
    src: '/storage/gallery/(13).jpg'
  },
  {
    id: 14,
    src: '/storage/gallery/ (14).jpg'
  },
  {
    id: 15,
    src: '/storage/gallery/ (15).jpg'
  },
  {
    id: 16,
    src: '/storage/gallery/ (16).jpg'
  },
  {
    id: 17,
    src: '/storage/gallery/ (17).jpg'
  },
  {
    id: 18,
    src: '/storage/gallery/ (18).jpg'
  },
  {
    id: 19,
    src: '/storage/gallery/ (19).jpg'
  },
  {
    id: 20,
    src: '/storage/gallery/(20).webp'
  }
])
</script>

<style lang="scss" scoped>
.blocks {
  display: flex;
  width: 100vw;
  flex-wrap: wrap;
}
</style>
