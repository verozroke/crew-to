<template>
  <div v-if="reverse" class="jury">
    <div class="jury__info">
      <div class="jury__name-box">
        <div class="jury__name" style="padding-bottom: 5px;">{{ name }}</div>
        <v-chip color="#32cc98" prepend-icon="mdi-briefcase" class="jury__occupation">{{
          occupation
        }}</v-chip>
      </div>
      <div class="jury__company">{{ company }}</div>
      <div class="jury__text" style="flex: 1 1 auto;">{{ text }}</div>
      <div class="jury__button"><v-btn color="#284240" style="color: #ffdd1b; justify-content: start !important;">Узнать
          более</v-btn></div>
    </div>
    <div class="jury__image">
      <img :src="img" alt="">
    </div>
  </div>
  <div v-if="!reverse" class="jury">
    <div class="jury__image">
      <img :src="img" alt="">
    </div>
    <div class="jury__info">
      <div class="jury__name-box">
        <div class="jury__name" style="padding-bottom: 5px;">{{ name }}</div>
        <v-chip color="#32cc98" prepend-icon="mdi-briefcase" class="jury__occupation">{{
          occupation
        }}</v-chip>
      </div>
      <div class="jury__company">{{ company }}</div>
      <div class="jury__text" style="flex: 1 1 auto;">{{ text }}</div>
      <div class="jury__button"><v-btn color="#284240" style="color: #ffdd1b ;">Узнать
          более</v-btn></div>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps({
  name: String,
  occupation: String,
  company: String,
  text: String,
  img: String,
  reverse: Boolean,
})

</script>

<style lang="scss" scoped>
.jury {
  min-width: 100%;
  display: flex;
  gap: 2em;
  justify-content: center;
  font-family: 'Exo 2', sans-serif;
  color: $black;

  &__image {
    width: 300px;
    height: 300px;
    border-radius: 1em;

    & img {
      border-radius: 1em;
      width: 300px;
      height: 300px;
      object-fit: cover;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    width: 60%;
  }

  &__name {
    font-weight: 600;
    margin-bottom: .2em;
    font-family: 'Lora', serif;
  }

  &__company {
    font-weight: 500;
    color: rgb(150, 150, 150);
    margin-bottom: .5em;
    font-size: 24px;
    letter-spacing: 2px
  }

  &__name-box {
    letter-spacing: 2px;
    align-items: center;
    display: flex;
    font-size: 54px;
    gap: .5em;
  }

  &__text {
    font-size: 18px;
    letter-spacing: 1px;
    width: 100%;
    line-height: 1.2em;
  }

  &__button {
    width: 100%;
    display: flex;
  }
}
</style>
