<template>
  <div class="up">
    <div class="up__container">
      <HeroTitle />
      <HeroText />
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroText from './text/HeroText.vue'
import HeroTitle from './title/HeroTitle.vue'
</script>

<style lang="scss" scoped>
.up {
  height: 50%;
  background-color: $black;

  &__container {
    display: flex;
    height: 100%;
  }
}


@media only screen and (max-width: 1282px) {
  .up {
    height: 100%;

    &__container {
      flex-direction: column;
    }
  }
}
</style>
