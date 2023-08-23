<template>
  <div class="speaker-info">
    <div class="speaker-info__container">
      <v-tabs
        v-model="tab"
        color="#32cc98"
        style="font-family: 'Montserrat', sans-serif"
        align-tabs="center"
      >
        <v-tab
          density="compact"
          value="speaker"
          class="tab"
          style="text-transform: none; font-weight: 700 !important; width: 300px"
          >{{ t('speaker.speakers') }}</v-tab
        >
        <v-tab
          density="compact"
          value="mod"
          class="tab"
          style="text-transform: none; font-weight: 700 !important; width: 300px"
          >{{ t('speaker.moderators') }}</v-tab
        >
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item value="speaker" class="col">
          <div class="title">{{ t('speaker.our_speakers') }}</div>
          <SpeakerList />
        </v-window-item>
        <v-window-item value="mod" class="col">
          <div class="title">{{ t('speaker.our_moderators') }}</div>
          <ModeratorList />
        </v-window-item>
      </v-window>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SpeakerList from './lists/SpeakerList.vue'
import ModeratorList from './lists/ModeratorList.vue'
// @ts-ignore

import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

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

.col {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media only screen and (max-width: 850px) {
  .title {
    font-size: 32px;
  }
}

@media only screen and (max-width: 666px) {
  .tab {
    width: 120px !important;
  }
}
</style>
