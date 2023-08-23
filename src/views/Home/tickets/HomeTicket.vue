<template>
  <div class="ticket">
    <TicketDialog />
    <div class="ticket__container">
      <div class="ticket__title">{{ t('tickets.title') }}</div>
      <div class="ticket__row">
        <TicketItem
          v-for="ticket in tickets"
          :key="ticket.id"
          :name="ticket.name"
          :price="ticket.price"
          :services="ticket.services"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import TicketItem from './item/TicketItem.vue'
import TicketDialog from './dialog/TicketDialog.vue'
// @ts-ignore

import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

const tickets = computed(() => [
  {
    id: 1,
    name: t('tickets.ticket1.name'),
    price: t('tickets.ticket1.price'),
    services: [
      t('tickets.ticket1.services.1'),
      t('tickets.ticket1.services.2'),
      t('tickets.ticket1.services.3'),
      t('tickets.ticket1.services.4'),
      t('tickets.ticket1.services.5')
    ]
  },
  {
    id: 2,
    name: t('tickets.ticket2.name'),
    price: t('tickets.ticket2.price'),
    services: [
      t('tickets.ticket2.services.1'),
      t('tickets.ticket2.services.2'),
      t('tickets.ticket2.services.3')
    ]
  },
  {
    id: 3,
    name: t('tickets.ticket3.name'),
    price: t('tickets.ticket2.price'),
    services: [
      t('tickets.ticket3.services.1'),
      t('tickets.ticket3.services.2'),
      t('tickets.ticket3.services.3')
    ]
  }
])
</script>

<style lang="scss" scoped>
.ticket {
  padding: 80px 0;

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
