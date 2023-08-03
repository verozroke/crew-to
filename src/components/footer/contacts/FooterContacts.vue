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
import { ref } from 'vue'

const contacts = ref([
  {
    id: 1,
    occupation: 'Медиа и премии',
    name: 'Алия Кудайбергенова',
    phone: '+7 777 079 3714',
    email: 'crewpropertyawards@gmail.com'
  },
  {
    id: 2,
    occupation: 'Бронирование билетов',

    name: 'Айдын Алимбеков',
    phone: '+7 708 425 3995',
    email: 'info@kaznetpartners.com'
  },
  {
    id: 3,
    occupation: 'Партнерство',
    name: 'Айдын Алимбеков',
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
    color: $green;
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
