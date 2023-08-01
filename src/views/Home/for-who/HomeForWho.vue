<template>
  <div class="who">
    <div class="who__container">
      <div class="who__title">Для кого мероприятие?</div>
      <div class="who__card-list">
        <WhoItem v-for="item in items" :key="item.id" :text="item.text" :icon="item.icon" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WhoItem from './item/WhoItem.vue'

const items = ref([
  {
    id: 1,
    text: 'Девелоперы',
    icon: 'code-json'
  },
  {
    id: 2,
    text: 'Property & facility-компании',
    icon: 'sprout'
  },
  {
    id: 3,
    text: 'Обслуживающие компании',
    icon: 'account-wrench'
  },
  {
    id: 4,
    text: 'Агентства недвижимости',
    icon: 'sign-real-estate'
  },
  {
    id: 5,
    text: 'Поставщики решений',
    icon: 'checkbox-multiple-marked-circle'
  },
  {
    id: 6,
    text: 'Производство материалов',
    icon: 'factory'
  },
  {
    id: 7,
    text: 'Арендаторы',
    icon: 'car-key'
  },
  {
    id: 8,
    text: 'Инвесторы',
    icon: 'cash-multiple'
  },
  {
    id: 9,
    text: 'IT-интеграторы',
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
