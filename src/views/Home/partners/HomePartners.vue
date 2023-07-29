<template>
  <div class="partners">
    <div class="partners__container">
      <div class="partners__title">Партнёры мероприятия</div>
      <div class="partners__list">
        <div style="width: 100%; display: flex; flex-direction: column; align-items: center; gap: 1em;">
          <a href="https://shikimori.me" style="width: 100%; height: 300px;" class="partner"><img
              style="width: 100%; height: 300px;"
              src="https://kaznetpartners.com/wp-content/uploads/2023/07/astana-tower.png" alt="">
          </a>
          <span style="
              width: 100%;
              text-align: center;
              font-size: 32px;
              font-weight: 900;
              margin-bottom: 20px;
              font-family: 'Lora', serif;
              color: #284240;
          ">Генеральный партнёр</span>
        </div>
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
    align-items: center;

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
    gap: 20px;
    width: 720px;
    flex-wrap: wrap;
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