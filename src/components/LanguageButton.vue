<template>
  <v-btn :color="headerStore.isCrewAwards ? '#ffc14d' : '#32cc98'" size="small"
    style="color: #f7f7f7; text-transform: none" @click="switchLang" icon="mdi-translate"></v-btn>
</template>

<script setup lang="ts">
import { useHeaderStore } from '@/stores/headerStore';
import { ref } from 'vue'
//@ts-ignore
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n({ useScope: 'global' })


const select = ref(localStorage.getItem('lang') ? { lang: localStorage.getItem('lang') } : { lang: 'ru' })

const switchLang = () => {
  if (select.value.lang === 'ru') {
    select.value.lang = 'kz'
  } else if (select.value.lang === 'en') {
    select.value.lang = 'ru'
  } else if (select.value.lang === 'kz') {
    select.value.lang = 'en'
  }
  locale.value = select.value.lang
  localStorage.setItem('lang', locale.value)
}


const headerStore = useHeaderStore()

</script>

<style scoped></style>