<template>
  <div class="hero">
    <HeroUp />
    <HeroBottom />
    <BottomCircle style="position: absolute; bottom: -1100px; z-index: 2; right: -750px;" />
  </div>
</template>

<script setup lang="ts">
import HeroBottom from './hero-bottom/HeroBottom.vue';
import HeroUp from './hero-up/HeroUp.vue';
import BottomCircle from './circle/BottomCircle.vue'



</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  overflow: hidden;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  width: 100vw;

}
</style>