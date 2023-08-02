<template>
  <div id="Crew" class="crew">
    <CrewHero />
    <CrewSteps />
    <CrewAbout />
    <CrewNomination />
    <CrewTicket />
    <!-- <JuryList /> -->
  </div>
</template>

<script setup lang="ts">
import JuryList from './list/JuryList.vue'
import CrewAbout from './about/CrewAbout.vue'
import CrewHero from './hero/CrewHero.vue'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useHeaderStore } from '@/stores/headerStore'
import CrewTicket from './ticket/СrewTicket.vue'
import CrewNomination from './nominations/CrewNomination.vue'
import CrewSteps from './steps/CrewSteps.vue'
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
