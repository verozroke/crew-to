<template>
  <div class="row">
    <MediaButton v-for="button in buttons" :key="button.id" :color="button.color" :icon="button.icon"
      :link="button.link" />
    <a href="https://t.me/llKUa7SLD2hmOGU6 "><v-btn class="text-white" color="#32cc98" icon><img class="telegram-icon"
          src="../../../assets/img/telegram.png" alt=""></v-btn></a>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MediaButton from './UI/MediaButton.vue'


// {
//     id: 5,
//     color: '#229ED9',
//     icon: 'telegram'
//   },

const buttons = ref([
  {
    id: 1,
    color: '#32cc98',
    icon: 'facebook',
    link: 'https://www.facebook.com/kaznetpartners/'
  },
  {
    id: 2,
    color: '#32cc98',
    icon: 'linkedin',
    link: 'https://kz.linkedin.com/in/kazakhstan-networking-partners-b808421a3 '


  },
  {
    id: 3,
    color: '#32cc98',
    icon: 'instagram',
    link: 'https://www.instagram.com/crew_centralasia/ '

  },
  {
    id: 4,
    color: '#32cc98',
    icon: 'youtube',
    link: 'https://www.youtube.com/@crewcentralasia'

  },
  {
    id: 5,
    color: '#32cc98',
    icon: 'whatsapp',
    link: 'https://wa.me/77084253995'

  }
])
</script>

<style lang="scss" scoped>
.telegram-icon {
  height: 24px;
  width: 24px;
}

.row {
  display: flex;
  width: 100%;
  justify-content: end;
  gap: 0.4em;
}
</style>
