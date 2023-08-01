<template>
  <div class="title">
    <div class="title__container">
      Спикеры и модераторы
      <v-icon class="icon" style="font-size: 100px; margin-left: 0.2em">mdi-account-tie</v-icon>
    </div>
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

@media only screen and (max-width: 750px) {
  .title {
    font-size: 32px;
  }

  .icon {
    font-size: 32px !important;
  }
}
</style>
