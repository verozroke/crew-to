<template>
  <div class="partners">
    <div class="partners__container">
      <div class="partners__title">Партнёры мероприятия</div>
      <div class="partners__list">
        <a href="https://shikimori.me" class="partner"><img
            src="https://kaznetpartners.com/wp-content/uploads/2023/07/astana-tower.png" alt="">
        </a>
        <a href="https://shikimori.me" class="partner"><img
            src="https://kaznetpartners.com/wp-content/uploads/2023/07/lynks_logo_additional_keyword_white.jpg" alt="">
        </a>
        <a href="https://shikimori.me" class="partner"><img
            src="https://kaznetpartners.com/wp-content/uploads/2023/07/gray-plaza.png" alt=""></a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.partners {
  padding: 40px 0;

  &__container {
    display: flex;
    flex-direction: column;
  }

  &__title {
    width: 100%;
    text-align: center;
    font-size: 64px;
    margin-bottom: 40px;
    font-weight: 900;
    font-family: 'Lora', serif;
    color: $black;
  }

  &__list {
    display: flex;
    align-items: center;
    gap: 2em;
    justify-content: center;
  }
}

.partner {
  height: 200px;
  width: 350px;

  & img {
    border-radius: 20px;
    width: 350px;
    object-fit: cover;
    height: 200px;
  }
}
</style>