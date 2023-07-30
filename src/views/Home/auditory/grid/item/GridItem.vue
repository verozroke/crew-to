<template>
  <div class="row">
    <div class="item">
      <div class="item__box">
        <v-icon>{{ icon }}</v-icon>
        <div class="item__title">{{ text }}</div>
      </div>
      <div class="item__text"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  icon: String,
  text: String
})
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  flex-direction: column;
  width: 100%;

  &__box {
    display: flex;
    align-items: center;
    gap: 0.5em;
    width: 100%;
    color: $green;
    font-weight: 700;
    letter-spacing: 2px;
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    margin-bottom: 20px;
  }

  &__text {
    gap: 0.5em;
    color: $black;
    text-align: justify;
    font-weight: 500;
    letter-spacing: 1px;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
  }
}

.row {
  width: 100%;
  display: flex;
  gap: 2em;
}



@media only screen and (max-width: 850px) {

  .item {
    &__box {
      font-size: 18px;
    }
  }

}


@media only screen and (max-width: 430px) {


  .item {
    &__box {
      font-size: 14px;
    }
  }
}
</style>
