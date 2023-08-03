<template>
  <div class="nomination">
    <div class="nomination__container">
      <div class="nomination__title">Номинации</div>
      <div class="nomination__box">
        <div class="nomination__subtitle">
          Номинации, победители которых автоматически получают право участия в международном этапе
          Конкурса FIABCI Prix d’Excellence
        </div>
        <NominationList :items="items1" />
      </div>
      <div class="nomination__box">
        <div class="nomination__subtitle">
          Специальные номинации Конкурса CENTRAL ASIA PROPERTY AWARDS 2023
        </div>
        <NominationList :items="items2" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Ref } from 'vue'
import NominationList from './list/NominationList.vue'
import { ref } from 'vue'

type TypeNomination = {
  id: number
  title: string
  text: string
}

const items1: Ref<TypeNomination[]> = ref([
  {
    id: 1,
    title: 'Редевелопмент года',
    text: `Лучшие проекты в каждой из нижеперечисленных категорий будут награждены.

    \n● Номинация «Редевелопмент офисной недвижимости»;
    \n● Номинация «Редевелопмент торговой недвижимости»;
    \n● Номинация «Редевелопмент индустриальной недвижимости».`
  },
  {
    id: 2,
    title: 'Офисная недвижимость',
    text: `Лучшие проекты в каждой из нижеперечисленных категорий будут награждены.

    \n● Номинация «Лучшая офисная недвижимость класса А»;
    \n● Номинация «Лучшая офисная недвижимость класса А+»;
    \n● Номинация «Лучшая офисная недвижимости класса В».
    \n● Номинация «Лучшая офисная недвижимости класса В+».`
  },
  {
    id: 3,
    title: 'Лучший объект рекреации и отдыха',
    text: `Лучшие проекты в каждой из нижеперечисленных категорий будут награждены. Объекты рекреации и отдыха
(тематические, детские парки)`
  }
])

const items2: Ref<TypeNomination[]> = ref([
  {
    id: 1,
    title: 'Управляющая компания года',
    text: `Лучшие проекты в каждой из нижеперечисленных категорий будут награждены.
\n● Номинация «Лучшая управляющая компания – Facility Management»;
\n● Номинация «Лучшая управляющая компания – Property Management».`
  },
  {
    id: 2,
    title: 'Складская недвижимость',
    text: `Лучшие проекты в каждой из нижеперечисленных категорий будут награждены.

    \n● Номинация «Крупный складской комплекс класса А»;
    \n● Номинация «Средний складской комплекс класса Б».`
  },
  {
    id: 3,
    title: 'Клининговая компания',
    text: `Лучшие проекты в каждой из нижеперечисленных категорий будут награждены.

    \n● Номинация «Лучшая клининговая компания».`
  },
  {
    id: 4,
    title: 'Коворкинг-центры',
    text: `Лучшие проекты в каждой из нижеперечисленных категорий будут награждены

    \n● Коворкинг года «Лучшее agile-пространство»; 

    \n● Коворкинг года «Лучшие технологические решения»; 

    \n● Коворкинг года «Лучшие архитектурные решения и дизайн». `
  },
  {
    id: 5,
    title: 'Торговые центры',
    text: `Лучшие проекты в каждой из нижеперечисленных категорий будут награждены.

    \n● Торговые центры: крупные (от 100,000 м2).  
\n● Торговые центры: средние (от 50,000 до 100,000 м2).  
\n● Торговые центры: малые (до 50,000 м2). `
  },
  {
    id: 6,
    title: 'Поставщик года',
    text: `Лучшие проекты в каждой из нижеперечисленных категорий будут награждены.

    \n● Номинация «Поставщик года».`
  },
  {
    id: 7,
    title: 'Брокер года',
    text: `Лучшие проекты в каждой из нижеперечисленных категорий будут награждены.

    \n● Номинация «Брокер года».`
  },
  {
    id: 8,
    title: 'Сделка года',
    text: `Лучшие проекты в каждой из нижеперечисленных категорий будут награждены.

    \n● Номинация «Сделка года. Купля-продажа»;
    \n● Номинация «Сделка года. Аренда».`
  },
  {
    id: 9,
    title: 'Девелопер',
    text: `Лучшие проекты в каждой из нижеперечисленных категорий будут награждены.

    \n● Номинация «Девелопер года - Город в городе»;
    \n● Номинация «Девелопер года - Комфортная среда»;
    \n● Номинация «Премьера года».`
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
