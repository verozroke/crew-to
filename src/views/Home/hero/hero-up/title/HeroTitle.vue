<template>
  <div class="title">
    <div class="title__upper">
      <div class="title__upper-title">
        CREW
      </div>
      <TitleTime />
    </div>
    <div class="title__bottom">Central Asia 2023.</div>
  </div>
</template>

<script setup lang="ts">
import TitleTime from './time/TitleTime.vue'
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 100%;
  padding-bottom: 40px;

  &__upper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__upper-title {
    line-height: 1.2em;
    font-size: 120px;
    letter-spacing: 10px;
    font-family: 'Exo 2', sans-serif;
    font-weight: 900;
    color: $black;
  }

  &__bottom {
    color: $green;
    line-height: 1.2em;
    font-size: 80px;
    letter-spacing: 5px;
    font-family: 'Lora', serif;
    font-weight: 500;
  }
}
</style>