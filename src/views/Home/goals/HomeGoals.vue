<template>
  <div class="goals">
    <div class="goals__container">
      <div class="goals__title">Наши цели</div>
      <GoalsRow />
    </div>
  </div>
</template>

<script setup lang="ts">
import GoalsRow from './row/GoalsRow.vue'
</script>

<style lang="scss" scoped>
.goals {
  padding: 40px 0;

  &__container {
    display: flex;
    flex-direction: column;
  }

  &__title {
    width: 100%;
    text-align: left;
    font-size: 64px;
    margin-bottom: 40px;
    font-weight: 900;
    font-family: 'Lora', serif;
    color: $black;
  }
}
</style>
