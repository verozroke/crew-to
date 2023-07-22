<template>
  <div class="text-box">
    <TextButton />
    <div class="adress">
      Место проведения: Ritz-Carlton, Алматы
    </div>
    <div class="text">
      Lorem ipsum dolor sit amet consectetur icing elit. Optio, magnam harum itaque magnamusi.

    </div>
  </div>
</template>

<script setup lang="ts">
import TextButton from './TextButton.vue';

</script>

<style lang="scss" scoped>
.adress {
  width: 400px;
  text-align: end;
  font-weight: 700;
  line-height: 1.2em;
  font-family: 'Lora', serif;

}

.text {
  width: 400px;
  font-family: 'Lora', serif;



  &-box {
    gap: .5em;
    text-align: justify;
    font-weight: 700;
    flex: 1 1 auto;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    line-height: 1.2em;
    align-items: end;
    padding-bottom: 55px;
  }
}
</style>