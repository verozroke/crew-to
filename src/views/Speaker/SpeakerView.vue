<template>
  <div class="speaker">
    <SpeakerTitle />
    <SpeakerInfo />
  </div>
</template>

<script setup lang="ts">
import SpeakerTitle from './title/SpeakerTitle.vue';
import SpeakerInfo from './info/SpeakerInfo.vue'

import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useHeaderStore } from '@/stores/headerStore';
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
