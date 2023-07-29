<template>
  <div class="item">
    <div class="item__info">
      <div class="item__title">{{ title }}</div>
      <div class="item__text">{{ text }}</div>
    </div>
    <div class="item__image">
      <img :src="src" alt="">
    </div>
  </div>
</template>

<script setup lang="ts">


defineProps({
  title: String,
  text: String,
  src: String,
})

</script>

<style lang="scss" scoped>
.item {
  display: flex;
  height: 400px;

  &__info {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;

    height: 100%;
    padding: 20px;
    width: 50%;
    color: $gold;
    margin-bottom: .2em;
    background-color: $black;
  }

  &__title {
    font-weight: 600;
    font-size: 54px;
    font-family: 'Lora', serif;
    letter-spacing: 2px;
    margin-bottom: 20px;
  }

  &__text {
    color: $white;
    font-weight: 500;
    font-size: 24px;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 2px;
  }

  &__image {
    width: 50%;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    height: 100%;

    & img {
      height: 100%;
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
      object-fit: cover;
      width: 100%;
    }
  }



}
</style>