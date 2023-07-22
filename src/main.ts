import '@/assets/nullstyle.scss'
import '@/assets/fontstyle.scss'
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
//@ts-ignore
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi'
import * as directives from 'vuetify/directives'

// I18n
import { languages, defaultLocale } from '@/i18n/index'
//@ts-ignore
import { createI18n, useI18n } from 'vue-i18n'


const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  }
})

const app = createApp(App, {
  setup() {
    const { t } = useI18n()
    return { t }
  }
})

const pinia = createPinia()

// I18n
const messages = Object.assign(languages)

const localStorageLang = localStorage.getItem('lang')

const i18n = createI18n({
  legacy: false,
  locale: localStorageLang || defaultLocale,
  fallbackLocale: 'ru',
  messages

})
app.use(i18n)

app.use(pinia)
app.use(router)
app.use(vuetify)

app.mount('#app')
