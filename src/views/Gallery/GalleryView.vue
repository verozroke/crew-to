<template>
  <div id="Gallery" class="gallery">
    <GalleryTitle />
    <GalleryBlocks />
  </div>
</template>

<script setup lang="ts">
import GalleryTitle from './title/GalleryTitle.vue'
import GalleryBlocks from './blocks/GalleryBlocks.vue'

import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useHeaderStore } from '@/stores/headerStore'
const route = useRoute()

const headerStore = useHeaderStore()

onMounted(() => {
  if (route.fullPath === '/crew-awards') {
    headerStore.isCrewAwards = true
  } else {
    headerStore.isCrewAwards = false
  }

  window.scrollTo(0, 0)
})
</script>

<style scoped></style>
