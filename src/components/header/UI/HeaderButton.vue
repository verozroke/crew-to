<template>
  <v-btn
    v-if="headerStore.isCrewAwards"
    @click="partStore.dialog = true"
    :color="headerStore.isCrewAwards ? '#ffc14d' : '#32cc98'"
    style="color: #000; text-transform: none"
    >{{ t('header.submit_application') }}</v-btn
  >
  <v-btn
    v-if="!headerStore.isCrewAwards"
    @click="ticketStore.dialog = true"
    :color="headerStore.isCrewAwards ? '#ffc14d' : '#32cc98'"
    style="color: #f7f7f7; text-transform: none"
    >{{ t('header.buy_ticket') }}</v-btn
  >
</template>

<script setup lang="ts">
import { useHeaderStore } from '@/stores/headerStore'
import { usePartStore } from '@/stores/partStore'
import { useTicketStore } from '@/stores/ticketStore'
// @ts-ignore

import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

const partStore = usePartStore()
const ticketStore = useTicketStore()

const headerStore = useHeaderStore()
</script>

<style scoped></style>
