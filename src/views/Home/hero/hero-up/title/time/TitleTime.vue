<template>
  <div class="time">
    <v-badge floating color="#32cc98">
      <div class="time__begin">День мероприятия:</div>
    </v-badge>
    <div class="time__numbers">18.10</div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.time {
  display: flex;
  flex-direction: column;
  margin-right: 35px;
  height: 100px;
  background-color: $gold;
  color: $black;
  width: 300px;
  padding: 10px;

  &__begin {
    font-family: 'Lora', serif;
    font-weight: 700;
    font-size: 14px;
  }

  &__numbers {
    // font-family: 'Lora', serif;
    font-family: 'Noto Sans', sans-serif;
    font-weight: 900;
    letter-spacing: 10px;
    font-size: 64px;
  }
}
</style>