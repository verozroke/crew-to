<template>
  <div class="logo">
    <img
      :src="headerStore.isCrewAwards ? '/header/header-gold-logo.png' : '/logo.png'"
      alt="Footer Logo"
    />
  </div>
</template>

<script setup lang="ts">
import { useHeaderStore } from '@/stores/headerStore'

const headerStore = useHeaderStore()
</script>

<style lang="scss" scoped>
.logo {
  height: 70px;
  width: 70px;

  & img {
    width: 70px;
    height: 70px;
  }
}
</style>
