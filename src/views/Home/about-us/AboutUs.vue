<template>
  <div class="about">
    <div class="about__container">
      <AboutInfo />
      <div class="timeline">
        <AboutTimeline />
      </div>
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
    display: flex;
    align-items: center;
  }
}


.timeline {
  width: 50%;
  height: 410px;
  overflow: hidden;

}
</style>