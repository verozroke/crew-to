<template>
  <div class="jury">
    <div class="jury__image">
      <img :src="img" alt="" />
    </div>
    <div class="jury__info">
      <div class="jury__name-box">
        <div class="jury__name" style="padding-bottom: 5px">{{ name }}</div>
        <v-chip color="#ffc14d" prepend-icon="mdi-briefcase" class="jury__occupation">{{
          occupation
        }}</v-chip>
      </div>
      <div class="jury__company">{{ company }}</div>
      <div class="jury__button">
        <v-btn append-icon="mdi-open-in-new" color="#ffc14d" style="color: #000"
          >Узнать больше</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: String,
  occupation: String,
  company: String,
  text: String,
  img: String
})
</script>

<style lang="scss" scoped>
.jury {
  width: 300px;
  display: flex;
  gap: 2em;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
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
    align-items: center;
    flex-direction: column;
    gap: 1em;
    width: 100%;
  }

  &__name {
    font-weight: 600;
    margin-bottom: 0.2em;
    color: $gold;
    font-family: 'Lora', serif;
  }

  &__company {
    font-weight: 500;
    color: rgb(62, 62, 62);
    margin-bottom: 0.5em;
    font-size: 16px;
    letter-spacing: 2px;
  }

  &__name-box {
    letter-spacing: 2px;
    align-items: left;
    flex-direction: column;
    display: flex;
    font-size: 22px;
    gap: 0.1em;
  }

  &__text {
    font-size: 18px;
    letter-spacing: 1px;
    width: 100%;
    line-height: 1.2em;
  }
}

.v-chip {
  justify-content: center;
}
</style>
