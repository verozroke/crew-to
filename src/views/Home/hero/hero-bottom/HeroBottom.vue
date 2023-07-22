<template>
  <div class="bottom">
    <div class="bottom__container">
      <div class="bottom__title">Начало через:</div>
      <BottomTimer />
    </div>
  </div>
</template>

<script setup lang="ts">
import BottomTimer from './timer/BottomTimer.vue'

</script>

<style lang="scss" scoped>
.bottom {
  height: 50%;
  background-color: $black;
  padding: 20px 0;

  &__title {
    font-size: 64px;
    font-weight: 900;
    font-family: 'Lora', serif;
    text-align: center;
    color: $gold;
  }

  &__container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>