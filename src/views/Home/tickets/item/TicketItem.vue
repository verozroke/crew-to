<template>
  <div class="item">
    <div class="item__name">{{ name }}</div>
    <div class="item__price">{{ price }} тенге</div>
    <div class="item__service-title">Пакет включает:</div>
    <ul class="item__services">
      <li class="item__service" v-for="service in services" :key="service">{{ service }}</li>
    </ul>
    <v-btn
      @click="ticketStore.dialog = true"
      style="
        margin-top: 20px;
        font-weight: 600;
        font-family: 'Montserrat', sans-serif;
        color: #284240;
      "
      rounded="0"
      color="#ffc14d"
      size="large"
      width="100%"
      >Купить билет</v-btn
    >
  </div>
</template>

<script setup lang="ts">
import { useTicketStore } from '@/stores/ticketStore'

const ticketStore = useTicketStore()

defineProps({
  name: String,
  services: Array<string>,
  price: String
})
</script>

<style lang="scss" scoped>
.item {
  width: 28%;
  height: 600px;
  padding: 40px;
  background-color: $black;
  border-radius: 20px;
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.177));
  display: flex;
  flex-direction: column;
  align-items: center;

  &__name {
    width: 100%;
    text-align: center;
    font-size: 28px;
    margin-bottom: 40px;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 40px;
    font-family: 'Lora', serif;
    color: $white;
  }

  &__price {
    width: 100%;
    text-align: center;
    font-size: 28px;
    margin-bottom: 80px;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    color: $gold;
  }

  &__service-title {
    width: 100%;
    text-align: center;
    font-size: 28px;
    margin-bottom: 40px;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    color: $white;
  }

  &__services {
    display: flex;
    gap: 1em;
    flex: 1 1 auto;
    padding: 0 0 0 40px;

    & li {
      list-style-type: disc;
      list-style-position: outside;
      width: 100%;
      font-size: 18px;
      font-weight: 500;
      font-family: 'Montserrat', sans-serif;
      color: $gold;
    }

    flex-direction: column;
    align-items: left;
    width: 100%;
  }
}

@media only screen and (max-width: 1285px) {
  .item {
    width: 100%;
    height: fit-content;
  }
}

@media only screen and (max-width: 450px) {
  .item {
    padding: 20px;

    &__name {
      font-size: 22px;
    }

    &__price {
      font-size: 22px;
    }

    &__service-title {
      font-size: 22px;
    }

    &__services li {
      font-size: 15px;
    }
  }
}
</style>
