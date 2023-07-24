<template>
  <div class="about">
    <div class="about__container">
      <AboutInfo />
      <AboutTimeline />
    </div>
  </div>
</template>

<script setup lang="ts">
import AboutTimeline from './timeline/AboutTimeline.vue'
import AboutInfo from './info/AboutInfo.vue'
</script>

<style lang="scss" scoped>
.about {
  padding: 40px 0;

  &__container {
    gap: 15em;
    display: flex;
    align-items: center;
  }
}
</style>