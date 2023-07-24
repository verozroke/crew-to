<template>
  <div class="speaker-info">
    <div class="speaker-info__container">
      <v-tabs v-model="tab" color="#32cc98" style="font-family: 'Exo 2', sans-serif;" align-tabs="center">
        <v-tab density="compact" value="speaker"
          style="text-transform: none; font-weight: 700 !important; width: 300px;">Спикеры</v-tab>
        <v-tab density="compact" value="mod"
          style="text-transform: none; font-weight: 700 !important; width: 300px;">Модераторы</v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item value="speaker">
          <div class="title">
            Наши спикеры
          </div>
          <SpeakerList />
        </v-window-item>
        <v-window-item value="mod">
          <div class="title">
            Наши модераторы
          </div>
          <ModeratorList />
        </v-window-item>
      </v-window>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SpeakerList from './lists/SpeakerList.vue'
import ModeratorList from './lists/ModeratorList.vue'


const tab = ref(null)

</script>

<style lang="scss" scoped>
.speaker-info {
  padding: 50px 0;

  &__container {
    gap: 2em;
    display: flex;
    flex-direction: column;
  }
}

.title {
  font-size: 64px;
  font-weight: 900;
  text-align: center;
  margin-bottom: 50px;
  font-family: 'Lora', serif;
  color: $black;
}
</style>