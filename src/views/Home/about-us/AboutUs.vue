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
    gap: 2em;
  }
}

.timeline {
  width: 50%;
  height: 410px;
  overflow: hidden;
}


@media only screen and (max-width: 1400px) {
  .about {
    &__container {
      flex-direction: column;
    }
  }


  .timeline {
    width: 100%;
  }
}
</style>
