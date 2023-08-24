<template>
  <v-dialog v-model="programStore.dialog" style="max-width: 900px">
    <v-card>
      <div class="upper">
        <v-card-title class="title"> {{ t('home.auditory.become_partner') }} </v-card-title>
        <div @click="programStore.dialog = false" class="close">
          <v-btn variant="text" icon="mdi-close"></v-btn>
        </div>
      </div>
      <iframe v-if="locale === 'en'" width="100%" height="768"
        src="https://www.wrike.com/form/eyJhY2NvdW50SWQiOjU4OTQ5OTgsInRhc2tGb3JtSWQiOjExMDA5MjN9CTQ4NDYzODE2MjM2MzMJZDkwNjMxYjljMWJiMDMyMGI5MzU0Njk1NzcwNDNjYzJkZjI5ZjkxMDljZDhjZDc4YzA4ZmZjZTQ5MGE4NTMwMA=="
        frameborder="0"></iframe>
      <iframe v-else width="100%" height="768"
        src=" https://www.wrike.com/form/eyJhY2NvdW50SWQiOjU4OTQ5OTgsInRhc2tGb3JtSWQiOjEwNzI5MDV9CTQ4NDM3NzY3MDc2NDYJYjU3ODljZTZmMzdiODQyZGE4YWRiNzY1Yjg3MTcxODU0NzQxNmE1MjQ3NjI1NDQzZmQ3ZjA3YzdmZGQ5NTUzOQ== "
        frameborder="0"></iframe>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { useProgramStore } from '../../../../stores/programStore'
// @ts-ignore

import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n({ useScope: 'global' })
const programStore = useProgramStore()
</script>

<style lang="scss" scoped>
.upper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

.title {
  font-weight: 900;
  font-family: 'Lora', serif;
  color: $black;
}
</style>
