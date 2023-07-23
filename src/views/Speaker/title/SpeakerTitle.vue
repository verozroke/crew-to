<template>
  <div class="title">
    <div class="title__container">Спикеры и модераторы <v-icon
        style="font-size: 100px; margin-left: .2em;">mdi-account-tie</v-icon></div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.title {
  font-family: 'Lora', serif;
  font-size: 100px;
  height: calc(50vh - 75px);
  background-color: $black;
  color: $gold;
  display: flex;
  align-items: end;
  padding-bottom: 50px;
  width: 100%;

  &__container {
    display: flex;
    align-items: end;
    height: 100%;
    width: 100%;
  }
}
</style>
