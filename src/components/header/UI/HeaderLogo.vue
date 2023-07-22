<template>
  <RouterLink :to="{ name: 'Home' }" class="logo">
    <img src="@img/header/header-logo.jpeg" alt="" />
  </RouterLink>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.logo {
  height: 50px;
  width: 85.21px;
  flex: 1 1 auto;

  & img {
    object-fit: cover;
    width: 85.21px;
    height: 50px;
  }
}
</style>
