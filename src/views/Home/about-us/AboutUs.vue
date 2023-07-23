<template>
  <div class="about">
    <div class="about__container">
      <AboutTimeline />
      <AboutInfo />
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
    gap: 5em;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>