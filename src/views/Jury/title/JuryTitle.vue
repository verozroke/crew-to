<template>
  <div class="title">
    <div class="title__container">Жюри мероприятия <v-icon
        style="font-size: 100px; margin-left: .2em;">mdi-star-check</v-icon></div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.title {
  background-color: $black;
  font-family: 'Lora', serif;
  font-size: 100px;
  height: calc(50vh - 75px);
  display: flex;
  color: $gold;
  padding-bottom: 50px;
  align-items: end;
  width: 100%;

  &__container {
    display: flex;
    align-items: end;
    height: 100%;
    width: 100%;
  }
}
</style>
