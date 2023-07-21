<template>
  <div class="row">
    <MediaButton v-for="button in buttons" :key="button.id" :color="button.color" :icon="button.icon" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MediaButton from './UI/MediaButton.vue';


const buttons = ref([
  {
    id: 1,
    color: '#4267B2',
    icon: 'facebook',
  },
  {
    id: 2,
    color: '#0077b5',
    icon: 'linkedin',
  },
  {
    id: 3,
    color: '#E1306C',
    icon: 'instagram',
  },
  {
    id: 4,
    color: '#FF0000',
    icon: 'youtube',
  },
  {
    id: 5,
    color: '#229ED9',
    icon: 'telegram',
  },
  {
    id: 6,
    color: '#25D366',
    icon: 'whatsapp',
  },


])

</script>

<style lang="scss" scoped>
.row {
  display: flex;
  width: 100%;
  justify-content: end;
  gap: 0.4em;
}
</style>