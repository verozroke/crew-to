<template>
  <div class="ticket">
    <TicketDialog />
    <div class="ticket__container">
      <div class="ticket__title">Билеты</div>
      <div class="ticket__row">
        <TicketItem v-for="ticket in tickets" :key="ticket.id" :name="ticket.name" :price="ticket.price"
          :services="ticket.services" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TicketItem from './item/TicketItem.vue'
import TicketDialog from './dialog/TicketDialog.vue'

const tickets = ref([
  {
    id: 1,
    name: 'Все включено',
    price: '300 000',
    services: [
      'Участие в конференции Central Asia Property',
      'Кофе-брейк',
      'Нетворкинг',
      'Презентации спикеров',
      'Участие в гала-ужине Central Asia Property Awards'
    ]
  },
  {
    id: 2,
    name: 'Конференция',
    price: '150 000',
    services: ['Кофе-брейк', 'Нетворкинг', 'Презентации спикеров']
  },
  {
    id: 3,
    name: 'Гала-ужин Central Asia Property Awards',
    price: '250 000',
    services: ['Фуршет', 'Концертная часть', 'Нетворкинг']
  }
])
</script>

<style lang="scss" scoped>
.ticket {
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

  &__row {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2em;
  }
}


@media only screen and (max-width: 1285px) {
  .ticket {
    &__row {
      flex-direction: column;
    }
  }
}


@media only screen and (max-width: 850px) {
  .ticket {
    &__title {
      font-size: 32px;
    }
  }
}
</style>
