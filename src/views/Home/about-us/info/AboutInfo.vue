<template>
  <div class="info">
    <div class="info__title">CREW Central Asia</div>
    <div class="info__text">
      <li>10+ лет</li>
      <li>160+ проведенных мероприятий</li>
      <li>5000 делегатов</li>
    </div>
    <div class="info__image">
      <img src="/awards-hero/crew-awards-bg.jpg" alt="About Image" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.info {
  display: flex;
  flex-direction: column;
  gap: 2em;
  width: 45%;
  // height: 400px;

  &__title {
    font-size: 64px;
    font-weight: 900;
    font-family: 'Lora', serif;
    color: $black;
  }

  &__text {
    & li {
      font-size: 25px;
      letter-spacing: 1px;
      font-family: 'Montserrat', sans-serif;
      width: 100%;
      list-style-type: square;
      list-style-position: outside !important;
      color: $black;
      line-height: 1.2em;
      font-weight: 700;
    }
  }

  &__image {
    height: 200px;
    width: 100%;

    & img {
      width: 100%;
      height: 200px;
      border-radius: 10px;
      object-fit: cover;
    }
  }
}

@media only screen and (max-width: 1400px) {
  .info {
    width: 100%;
  }
}

@media only screen and (max-width: 850px) {
  .info {
    &__title {
      font-size: 32px;
    }

    &__text li {
      font-size: 18px;
    }
  }
}

@media only screen and (max-width: 450px) {
  .info {
    &__text li {
      font-size: 15px;
    }
  }
}
</style>
