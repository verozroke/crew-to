<template>
  <div class="hero">
    <HeroUp />
    <HeroBottom />
  </div>
</template>

<script setup lang="ts">
import HeroBottom from './hero-bottom/HeroBottom.vue';
import HeroUp from './hero-up/HeroUp.vue';


</script>

<style lang="scss" scoped>
.hero {
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  width: 100vw;

}
</style>