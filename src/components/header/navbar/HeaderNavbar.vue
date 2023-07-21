<template>
  <ul>
    <li>
      <RouterLink :to="{ name: 'Home' }"><v-btn prepend-icon="mdi-home" density="compact" variant="text"
          class="text-capitalize">Главная</v-btn></RouterLink>
    </li>
    <li>
      <RouterLink :to="{ name: 'Jury' }"><v-btn prepend-icon="mdi-star" density="compact" variant="text"
          class="text-capitalize">Жюри</v-btn></RouterLink>
    </li>
    <li>
      <RouterLink :to="{ name: 'Speaker' }"><v-btn prepend-icon="mdi-account-tie" density="compact" variant="text"
          class="text-capitalize">Спикеры / модераторы</v-btn>
      </RouterLink>
    </li>
    <li>
      <RouterLink :to="{ name: 'Gallery' }"><v-btn prepend-icon="mdi-image" density="compact" class="text-capitalize"
          variant="text">Галерея</v-btn></RouterLink>
    </li>
  </ul>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
ul {
  display: flex;
  gap: 0.5em;

  & li a {
    color: $black;
    transition: .2s;

    &:hover {
      transition: .2s;
      color: $green;
    }
  }
}
</style>