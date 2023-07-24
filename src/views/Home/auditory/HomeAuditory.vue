<template>
  <div class="auditory">
    <div class="auditory__container">
      <div class="auditory__title">Почему стоит посетить наше мероприятие?</div>
      <AuditoryGrid />
    </div>
  </div>
</template>

<script setup lang="ts">
import AuditoryGrid from './grid/AuditoryGrid.vue';

</script>

<style lang="scss" scoped>
.auditory {
  padding: 40px 0;

  &__container {
    display: flex;
    flex-direction: column;
  }

  &__title {
    width: 100%;
    font-size: 64px;
    margin-bottom: 80px;
    font-weight: 900;
    font-family: 'Lora', serif;
    color: $black;
  }
}
</style>