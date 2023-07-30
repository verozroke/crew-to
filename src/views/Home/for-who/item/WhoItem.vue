<template>
  <v-card width="400px" color="#284240" style="padding: 20px">
    <div class="item">
      <v-icon color="#ffc14d">mdi-{{ icon }}</v-icon>
      <div class="item__name">{{ text }}</div>
    </div>
  </v-card>
</template>

<script setup lang="ts">
defineProps({
  text: String,
  icon: String
})
</script>

<style lang="scss" scoped>
.item {
  justify-content: center;
  display: flex;
  font-size: 18px;
  gap: 1em;
  align-items: center;

  &__name {
    text-align: center;
    gap: 0.5em;
    color: #ffc14d;
    font-weight: 700;
    letter-spacing: 1px;
    font-family: 'Montserrat', sans-serif;
  }
}


@media only screen and (max-width: 450px) {
  .item {
    font-size: 14px;
  }
}
</style>
