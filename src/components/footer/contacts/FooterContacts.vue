<template>
  <div class="contacts">
    <div class="contact" v-for="contact in contacts" :key="contact.id">
      <div class="contact__subtitle">{{ contact.occupation }}</div>
      <div class="contact__title">{{ contact.name }}</div>
      <div class="contact__phone">
        <v-icon>mdi-phone</v-icon>
        <div>{{ contact.phone }}</div>
      </div>
      <div class="contact__email">
        <v-icon>mdi-email</v-icon>
        <div>{{ contact.email }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHeaderStore } from '@/stores/headerStore'
import { computed } from 'vue'
// @ts-ignore

import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

const headerStore = useHeaderStore()

const occupationColor = computed(() => {
  return headerStore.isCrewAwards ? '#ffc14d' : '#32cc98'
})

const contacts = computed(() => [
  {
    id: 1,
    occupation: t('footer.contacts.1.occupation'),
    name: t('footer.contacts.1.name'),
    phone: '+7 777 079 3714',
    email: 'crewpropertyawards@gmail.com'
  },
  {
    id: 2,
    occupation: t('footer.contacts.2.occupation'),
    name: t('footer.contacts.2.name'),
    phone: '+7 708 425 3995',
    email: 'info@kaznetpartners.com'
  },
  {
    id: 3,
    occupation: t('footer.contacts.3.occupation'),
    name: t('footer.contacts.3.name'),
    phone: '+7 708 425 3995',
    email: 'alimbekovaidyn@kaznetpartners.com'
  }
])
</script>

<style lang="scss" scoped>
.contacts {
  display: flex;
}

@media only screen and (max-width: 850px) {
  .contacts {
    flex-direction: column;
    gap: 2em;
  }
}

.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(183, 183, 183);

  padding: 0 40px;

  &__title {
    color: $white;
    font-weight: 700;
    letter-spacing: 1px;
    text-align: center;
    font-size: 18px;
    margin-bottom: 20px;
  }

  &__subtitle {
    color: v-bind(occupationColor);
    font-weight: 700;
    letter-spacing: 1px;
    text-align: center;
    font-size: 14px;
    margin-bottom: 10px;
  }

  &__phone {
    align-items: center;
    display: flex;
    gap: 0.2em;
  }

  &__email {
    align-items: center;
    display: flex;
    gap: 0.2em;
  }
}
</style>
