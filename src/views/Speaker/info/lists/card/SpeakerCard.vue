<template>
  <div
    class="card"
    style="background-position: center; background-repeat: no-repeat; background-size: cover"
    :style="{ backgroundImage: `url('${imgSrc}')` }"
  >
    <div class="card__box">
      <div class="card__title">{{ name }}</div>
      <div class="card__occupation">{{ occupation }}, {{ company }}</div>
    </div>
    <div class="card__text">
      <div class="card__title" style="margin-bottom: 10px">{{ name }}</div>
      <div
        style="font-family: 'Montserrat', sans-serif; letter-spacing: 0.5px; color: rgb(89, 89, 89)"
      >
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: String,
  occupation: String,
  text: String,
  company: String,
  imgSrc: String
})
</script>

<style lang="scss" scoped>
.card {
  width: 350px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  overflow: hidden;

  position: relative;

  &:hover {
    .card__box {
      transform: translateY(100px);
      transition: 0.3s;
    }

    .card__text {
      transform: translateY(0px);
      transition: 0.4s;
    }
  }

  &__text {
    width: 100%;
    padding: 20px;
    position: absolute;
    background-color: white;
    height: 50%;
    transform: translateY(500px);
    transition: 0.4s;
  }

  &__box {
    gap: 0.2em;
    border-radius: 5em;
    width: 90%;
    transition: 0.2s;
    padding: 0 20px;
    transform: translateY(0px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100px;
    margin: 0 0 20px 0;
    background-color: $white;
    border: 3px solid #000;
  }

  &__title {
    font-family: 'Lora', serif;
    color: #000;
    letter-spacing: 1px;
    font-size: 20px;
    font-weight: 700;
  }

  &__occupation {
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 0.5px;
    color: rgb(89, 89, 89);
  }
}

@media only screen and (max-width: 666px) {
  .card {
    width: 300px;
    height: 350px;
  }
}
</style>
