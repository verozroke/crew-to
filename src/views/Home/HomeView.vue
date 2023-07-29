<script setup lang="ts">
import HomeHero from './hero/HomeHero.vue'
import AboutUs from './about-us/AboutUs.vue'
import HomeGoals from './goals/HomeGoals.vue'
import HomeAuditory from './auditory/HomeAuditory.vue'
import HomePartners from './partners/HomePartners.vue'
import HomeForWho from './for-who/HomeForWho.vue'
import HomeProgram from './program/HomeProgram.vue'
import ContactUs from './contact-us/ContactUs.vue'
import HomeTicket from './tickets/HomeTicket.vue'

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

<template>
  <div id="Home">
    <HomeHero />
    <AboutUs />
    <!-- FIXME: ???? -->
    <!-- <HomeGoals /> -->
    <HomeAuditory />
    <!-- <HomeProgram /> -->
    <HomeForWho />
    <HomeTicket />
    <ContactUs />
    <HomePartners />
    <!-- sections -->


  </div>
</template>
