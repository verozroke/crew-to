<template>
  <div class="info">
    <div class="info__title">CREW Central Asia</div>
    <div class="info__text">
      <li>10+ лет</li>
      <li>160+ проведенных мероприятий</li>
      <li>5000 делегатов</li>
    </div>
    <div class="info__image">
      <img
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt=""
      />
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
      text-align: justify;
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
</style>
