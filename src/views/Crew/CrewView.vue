<template>
  <div id="Crew" class="crew">
    <CrewHero />
    <CrewAbout />
    <JuryList />
  </div>
</template>

<script setup lang="ts">
import JuryList from './list/JuryList.vue'
import CrewAbout from './about/CrewAbout.vue'
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useHeaderStore } from '@/stores/headerStore';
const route = useRoute()


const headerStore = useHeaderStore()

onMounted(() => {

  if (route.fullPath === '/crew-awards') {
    headerStore.isCrewAwards = true

  }

  window.scrollTo(0, 0)

})
</script>

<style lang="scss" scoped>
.crew {
  display: flex;
  flex-direction: column;
}
</style>
