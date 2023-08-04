<template>
  <div class="partners">
    <div class="partners__container">
      <div class="partners__title">Официальные партнёры форума</div>
      <div class="partners__list">

        <a href="#" class="partner"><img src="/partners/official/lynks.jpg" alt="Event Partner" /></a>
        <a href="#" class="partner"><img src="/partners/official/esentai.png" alt="Event Partner" /></a>
        <a href="#" class="partner"><img src="/partners/common/grey-plaza.jpeg" alt="Event Partner" /></a>

        <a href="#" class="partner"><img src="/partners/common/astana-tower.png" alt="Event Partner" /></a>
      </div>
      <div class="partners__title">Партнёры форума</div>
      <div class="partners__list">

        <a href="#" class="partner"><img src="/partners/common/marden.png" alt="Event Partner" />
        </a>

      </div>
    </div>
  </div>

  <!-- <span style="
              width: 100%;
              text-align: center;
              font-size: 32px;
              font-weight: 900;
              margin-bottom: 20px;
              font-family: 'Lora', serif;
              color: #284240;
            ">Генеральный партнёр</span> -->
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.partners {
  padding: 80px 0;

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
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
    gap: 40px;
    width: 100%;
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

@media only screen and (max-width: 850px) {
  .partners {
    &__title {
      text-align: center;
      font-size: 32px;
    }

    &__list span {
      font-size: 20px !important;
    }
  }
}

@media only screen and (max-width: 755px) {
  .partners {
    &__list {
      width: 100%;
    }
  }
}

@media only screen and (max-width: 540px) {
  .main-partner {
    height: 200px !important;
  }

  .partner {
    width: 200px;
    height: 125px;

    & img {
      width: 200px;
      height: 125px;
    }
  }

  .main-partner img {
    height: 200px !important;
  }
}

@media only screen and (max-width: 400px) {
  .main-partner {
    height: 150px !important;
  }

  .main-partner img {
    height: 150px !important;
  }
}
</style>
