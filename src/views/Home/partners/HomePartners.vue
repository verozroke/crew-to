<template>
  <div class="partners">
    <div class="partners__container">
      <div class="partners__title">{{ t('home.partners.official_partner') }}</div>
      <div class="partners__list">
        <a href="https://lynkspm.com/" class="partner"><img style="object-fit: cover !important;"
            src="/partners/official/lynks.jpg" alt="Event Partner" /></a>
        <a href="https://greyplaza.kz/" class="partner"><img src="/partners/common/grey-plaza.jpeg"
            alt="Event Partner" /></a>
        <a href="https://mercury.kz/" class="partner"><img src="/partners/official/mercury.png" alt="Event Partner" /></a>
        <a href="https://tspm.kz/" class="partner"><img src="/partners/official/tspm.png" alt="Event Partner" /></a>
        <a href="https://astanatower.kz/" class="partner"><img src="/partners/common/astana-tower.png"
            alt="Event Partner" /></a>
        <a href="https://fiabcica.com/" class="partner"><img src="/partners/official/fiabci.png"
            alt="Event Partner" /></a>
      </div>
      <div class="partners__title">{{ t('home.partners.partner') }}</div>
      <div class="partners__list">
        <a href="https://marden.kz/" class="partner"><img src="/partners/common/marden.png" alt="Event Partner" />
        </a>
        <a href="https://dmassociates.kz/" class="partner"><img src="/partners/common/dm.png" alt="Event Partner" />
        </a>
        <a href="https://www.property-group.kz/" class="partner"><img src="/partners/common/pmg.png"
            alt="Event Partner" />
        </a>
        <a href="https://esentai.com/" class="partner"><img src="/partners/common/esentai-mall.png" alt="Event Partner" />
        </a>
        <a href="https://est-group.pro/" class="partner"><img src="/partners/common/est.jpg" alt="Event Partner" />
        </a>
        <a href="https://topsg.kz/" class="partner"><img src="/partners/common/top-service.png" alt="Event Partner" />
        </a>
      </div>
      <div class="partners__title">{{ t('home.partners.informational_partner') }}</div>
      <div class="partners__list">
        <a href="https://bizmedia.kz/" class="partner"><img src="/partners/informational/bizmedia.png"
            alt="Event Partner" />
        </a>
        <a href="https://optimism.kz/" class="partner"><img src="/partners/informational/optimism.png"
            alt="Event Partner" />
        </a>
        <a href="https://qazaqpress.kz/" class="partner"><img src="/partners/informational/qazaqpress.png"
            alt="Event Partner" />
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

<script setup lang="ts">
// @ts-ignore

import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })
</script>

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
    object-fit: contain;
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
