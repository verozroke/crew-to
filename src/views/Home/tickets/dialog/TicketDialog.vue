<template>
  <v-dialog v-model="ticketStore.dialog" style="max-width: 900px">
    <v-card>
      <div class="upper">
        <v-card-title class="title"> {{ t('header.buy_ticket') }} </v-card-title>
        <div @click="ticketStore.dialog = false" class="close">
          <v-btn variant="text" icon="mdi-close"></v-btn>
        </div>
      </div>
      <iframe v-if="locale === 'en'" width="100%" height="768"
        src="https://www.wrike.com/form/eyJhY2NvdW50SWQiOjU4OTQ5OTgsInRhc2tGb3JtSWQiOjExMDA5NDZ9CTQ4NDYzODE2MjM2MzMJYWZiOGZjYmM4YzhlYTYwMDU1Nzc1MzU1NzI2ZjBiOTBmY2QzNjY4ZWI5ZTk3MDRlNWQzYjViNGY3ZmE5ZDlkMQ=="
        frameborder="0"></iframe>
      <iframe v-else width="100%" height="768"
        src=" https://www.wrike.com/form/eyJhY2NvdW50SWQiOjU4OTQ5OTgsInRhc2tGb3JtSWQiOjEwNzMwMjh9CTQ4NDM3NzY3MDc2NDYJOTQwZGM2NWNkYjFlNDU0Y2QzYzhmZDIyNDRjY2NlNDZiOGQ4M2E2YjhmZTFlNTQyMjBmNjU3NWIyOGJkNjYwOA== "
        frameborder="0"></iframe>

    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { useTicketStore } from '../../../../stores/ticketStore'
// @ts-ignore

import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n({ useScope: 'global' })
const ticketStore = useTicketStore()
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
