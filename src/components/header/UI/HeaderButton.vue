<template>
  <v-btn @click="partStore.dialog = true" :color="headerStore.isCrewAwards ? '#ffc14d' : '#32cc98'"
    style="color: #f7f7f7; text-transform: none">{{
      t('header.button') }}</v-btn>
</template>

<script setup lang="ts">

import { useHeaderStore } from '@/stores/headerStore';
import { usePartStore } from '@/stores/partStore';
// @ts-ignore

import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

const partStore = usePartStore()


const headerStore = useHeaderStore()

</script>

<style scoped></style>
