<template>
  <div class="nomination">
    <div class="nomination__container">
      <div class="nomination__title">{{ t('crew.nominations.title') }}</div>
      <div class="nomination__box">
        <div class="nomination__subtitle">
          {{ t('crew.nominations.1.title') }}
        </div>
        <NominationList :items="items1" />
      </div>
      <div class="nomination__box">
        <div class="nomination__subtitle">
          {{ t('crew.nominations.2.title') }}
        </div>
        <NominationList :items="items2" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import NominationList from './list/NominationList.vue'
import { computed } from 'vue'

// @ts-ignore

import { useI18n } from 'vue-i18n'
import type { ComputedRef } from 'vue'

const { t } = useI18n({ useScope: 'global' })

type TypeNomination = {
  id: number
  title: string
  text: string
}

const items1: ComputedRef<TypeNomination[]> = computed(() => [
  {
    id: 1,
    title: t('crew.nominations.1.1.title'),
    text: t('crew.nominations.1.1.text')
  },
  {
    id: 2,
    title: t('crew.nominations.1.2.title'),
    text: t('crew.nominations.1.2.text')
  },
  {
    id: 3,
    title: t('crew.nominations.1.3.title'),
    text: t('crew.nominations.1.3.text')
  }
])

const items2: ComputedRef<TypeNomination[]> = computed(() => [
  {
    id: 1,
    title: t('crew.nominations.2.1.title'),
    text: t('crew.nominations.2.1.text')
  },
  {
    id: 2,
    title: t('crew.nominations.2.2.title'),
    text: t('crew.nominations.2.2.text')
  },
  {
    id: 3,
    title: t('crew.nominations.2.3.title'),
    text: t('crew.nominations.2.3.text')
  },
  {
    id: 4,
    title: t('crew.nominations.2.4.title'),
    text: t('crew.nominations.2.4.text')
  },
  {
    id: 5,
    title: t('crew.nominations.2.5.title'),
    text: t('crew.nominations.2.5.text')
  },
  {
    id: 6,
    title: t('crew.nominations.2.6.title'),
    text: t('crew.nominations.2.6.text')
  },
  {
    id: 7,
    title: t('crew.nominations.2.7.title'),
    text: t('crew.nominations.2.7.text')
  },
  {
    id: 8,
    title: t('crew.nominations.2.8.title'),
    text: t('crew.nominations.2.8.text')
  },
  {
    id: 9,
    title: t('crew.nominations.2.9.title'),
    text: t('crew.nominations.2.9.text')
  }
])
</script>

<style lang="scss" scoped>
.nomination {
  padding: 40px 0;
  background-color: #1b1a17;

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4em;
  }

  &__subtitle {
    width: 100%;
    text-align: center;
    font-size: 28px;
    margin-bottom: 20px;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    color: $white;
  }

  &__title {
    font-size: 64px;
    margin-bottom: 40px;
    font-weight: 900;
    font-family: 'Lora', serif;
    color: $gold;
  }

  &__box {
    width: 70%;
    display: flex;
    flex-direction: column;
  }
}

@media only screen and (max-width: 850px) {
  .nomination {
    &__title {
      font-size: 32px;
    }
  }
}

@media only screen and (max-width: 608px) {
  .nomination {
    &__subtitle {
      font-size: 18px;
    }
  }
}

@media only screen and (max-width: 500px) {
  .nomination {
    &__box {
      width: 100%;
    }
  }
}
</style>
