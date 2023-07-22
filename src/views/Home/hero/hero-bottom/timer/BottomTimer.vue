<template>
  <div class="timer">
    <div class="timer__box">
      <div class="timer__digit"></div>
      <div class="timer__title">Дней</div>
    </div>
    <div class="timer__box">
      <div class="timer__digit"></div>
      <div class="timer__title">Часов</div>
    </div>
    <div class="timer__box">
      <div class="timer__digit"></div>
      <div class="timer__title">Минут</div>
    </div>
    <div class="timer__box">
      <div class="timer__digit"></div>
      <div class="timer__title">Секунд</div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.timer {
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 2em;

  &__box {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  &__title {
    font-size: 16px;
    text-align: center;
    font-weight: 500;
    color: $gold;
    letter-spacing: 1px;
    font-family: 'Noto Sans', sans-serif;
  }

  &__digit {
    border-radius: .3em;
    border: 2px solid $gold;
    height: 150px;
    width: 100px;
  }
}
</style>