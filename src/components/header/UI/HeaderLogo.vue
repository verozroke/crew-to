<template>
  <RouterLink :to="{ name: 'Home' }" class="logo">
    <img :src="headerStore.isCrewAwards
        ? '/crew-to/header/header-gold-logo.png'
        : '/crew-to/header/header-logo.jpeg'
      " alt="Header Crew Central Asia Logo" />
  </RouterLink>
</template>

<script setup lang="ts">
import { useHeaderStore } from '@/stores/headerStore'

const headerStore = useHeaderStore()
</script>

<style lang="scss" scoped>
.logo {
  height: 50px;
  width: 85.21px;
  flex: 1 1 auto;

  & img {
    object-fit: contain;
    width: 85.21px;
    height: 50px;
  }
}
</style>
