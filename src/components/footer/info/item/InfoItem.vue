<template>
  <div v-if="type === 'link'" class="item">
    <KaznetIcon />
    <a :href="link">{{ link }}</a>
  </div>
  <div v-if="type === 'text'" class="item">
    <v-icon>mdi-{{ icon }}</v-icon>
    <div>{{ text }}</div>
  </div>
</template>

<script setup lang="ts">

import KaznetIcon from '../../../UI/KaznetIcon.vue';

defineProps({
  icon: String,
  type: String,
  link: String,
  text: String,
})

</script>

<style lang="scss" scoped>
.item {
  color: rgb(183, 183, 183);

  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 0.3em;

  & a {
    color: rgb(183, 183, 183);

    text-decoration: underline;

    &:visited {
      color: rgb(183, 183, 183);

    }
  }
}
</style>  