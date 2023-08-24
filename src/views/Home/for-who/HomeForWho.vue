<template>
  <div class="who">
    <div class="who__container">
      <div class="who__title">{{ t('home.for_who.title') }}</div>
      <div class="who__card-list">
        <WhoItem v-for="item in items" :key="item.id" :text="item.text" :icon="item.icon" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import WhoItem from './item/WhoItem.vue'
import { computed } from 'vue'
// @ts-ignore

import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

const items = computed(() => [
  {
    id: 1,
    text: t('home.for_who.1'),
    icon: 'code-json'
  },
  {
    id: 2,
    text: t('home.for_who.2'),
    icon: 'sprout'
  },
  {
    id: 3,
    text: t('home.for_who.3'),
    icon: 'account-wrench'
  },
  {
    id: 4,
    text: t('home.for_who.4'),
    icon: 'sign-real-estate'
  },
  {
    id: 5,
    text: t('home.for_who.5'),
    icon: 'checkbox-multiple-marked-circle'
  },
  {
    id: 6,
    text: t('home.for_who.6'),
    icon: 'factory'
  },
  {
    id: 7,
    text: t('home.for_who.7'),
    icon: 'car-key'
  },
  {
    id: 8,
    text: t('home.for_who.8'),
    icon: 'cash-multiple'
  },
  {
    id: 9,
    text: t('home.for_who.9'),
    icon: 'code-tags-check'
  }
])
</script>

<style lang="scss" scoped>
.who {
  padding: 80px 0;

  &__container {
    display: flex;
    flex-direction: column;
  }

  &__title {
    width: 100%;
    font-size: 64px;
    margin-bottom: 40px;
    font-weight: 900;
    font-family: 'Lora', serif;
    color: $black;
  }

  &__card-list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2em;
  }
}

@media only screen and (max-width: 850px) {
  .who {
    &__title {
      text-align: center;
      font-size: 32px;
    }
  }
}
</style>
