<template>
  <v-dialog v-model="partStore.dialog" style="max-width: 900px">
    <v-card>
      <div class="upper">
        <v-card-title class="title"> {{ t('header.submit_application') }} </v-card-title>
        <div @click="partStore.dialog = false" class="close">
          <v-btn variant="text" icon="mdi-close"></v-btn>
        </div>
      </div>
      <iframe v-if="locale === 'en'" width="100%" height="768"
        src="https://www.wrike.com/form/eyJhY2NvdW50SWQiOjU4OTQ5OTgsInRhc2tGb3JtSWQiOjExMDA5MzB9CTQ4NDYzODE2MjM2MzMJOTg0MzBkNTQ4ZDk1YTE3OWY5MzY0ZmU3MjllN2Q0YTEzMDAzNDcyMTJhYTk3YWI5OGQ0NTcyNmIzZDc3NDRlYQ=="
        frameborder="0"></iframe>
      <iframe v-else width="100%" height="768"
        src=" https://www.wrike.com/form/eyJhY2NvdW50SWQiOjU4OTQ5OTgsInRhc2tGb3JtSWQiOjEwODI0MTN9CTQ4NDM3NzY3MDc2NDYJODg2NDUxZDI2Yjg4MGMzMzBlYzdlYWFiNGQxOTRiODA0OGU0MGE3YmE5MjE2NDliMjJkZTJiOTFjOGRmOWZlNg== "
        frameborder="0"></iframe>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { usePartStore } from '@/stores/partStore'
// @ts-ignore

import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n({ useScope: 'global' })
const partStore = usePartStore()
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
