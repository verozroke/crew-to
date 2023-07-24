<template>
  <v-btn color="#32cc98" style="color: #f7f7f7; text-transform: none">{{ t('header.button') }}</v-btn>
</template>

<script setup lang="ts">

// @ts-ignore
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

</script>

<style scoped></style>
